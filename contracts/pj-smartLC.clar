;; === Ma loi ===
(define-constant ERR-UNAUTHORIZED (err u100)) ;; Loi: khong co quyen thuc hien
(define-constant ERR-NOT-FOUND (err u101)) ;; Loi: khong tim thay LC
(define-constant ERR-INVALID-STATUS (err u102)) ;; Loi: trang thai khong hop le
(define-constant ERR-ALREADY-SUBMITTED (err u103)) ;; Loi: da nop tai lieu roi
(define-constant ERR-INVALID-AMOUNT (err u104)) ;; Loi: so tien khong hop le

;; === Trang thai LC ===
(define-constant STATUS-FUNDED u0) ;; LC da duoc funding
(define-constant STATUS-DOCS-SUBMITTED u1) ;; Exporter da nop tai lieu
(define-constant STATUS-CONFIRMED u2) ;; Importer da xac nhan nhan hang
(define-constant STATUS-CANCELLED u3) ;; LC da bi huy

;; === Cau truc du lieu LC ===
(define-map letters-of-credit
  uint
  {
    importer: principal, ;; nguoi nhap khau (nguoi tao LC)
    exporter: principal, ;; nguoi xuat khau
    amount: uint, ;; so tien LC
    status: uint, ;; trang thai LC
    documents-hash: (optional (buff 32)) ;; hash tai lieu xuat khau
  }
)

(define-data-var lc-counter uint u0) ;; dem so luong LC da tao

;; === Tao LC moi ===
(define-public (create-lc (exporter principal) (amount uint))
  (begin
    (asserts! (> amount u0) ERR-INVALID-AMOUNT) ;; kiem tra so tien > 0
    (try! (stx-transfer? amount tx-sender (as-contract tx-sender))) ;; chuyen tien vao smart contract
    (let (
      (lc-id (+ (var-get lc-counter) u1)) ;; tao ID moi
      (new-lc {
        importer: tx-sender,
        exporter: exporter,
        amount: amount,
        status: STATUS-FUNDED,
        documents-hash: none
      })
    )
      (map-set letters-of-credit lc-id new-lc) ;; luu vao map
      (var-set lc-counter lc-id) ;; cap nhat counter
      (ok lc-id)
    )
  )
)

;; === Exporter nop tai lieu ===
(define-public (submit-documents (lc-id uint) (hash (buff 32)))
  (let ((lc (unwrap! (map-get? letters-of-credit lc-id) ERR-NOT-FOUND)))
    (asserts! (is-eq tx-sender (get exporter lc)) ERR-UNAUTHORIZED) ;; chi exporter moi nop duoc
    (asserts! (is-eq (get status lc) STATUS-FUNDED) ERR-INVALID-STATUS) ;; chi nop neu dang o trang thai FUNDED
    (asserts! (is-none (get documents-hash lc)) ERR-ALREADY-SUBMITTED) ;; da nop thi khong nop lai
    (map-set letters-of-credit lc-id
      (merge lc {
        documents-hash: (some hash),
        status: STATUS-DOCS-SUBMITTED
      })
    )
    (ok true)
  )
)

;; === Importer xac nhan nhan hang, chuyen tien cho exporter ===
(define-public (confirm-receipt (lc-id uint))
  (let ((lc (unwrap! (map-get? letters-of-credit lc-id) ERR-NOT-FOUND)))
    (asserts! (is-eq tx-sender (get importer lc)) ERR-UNAUTHORIZED) ;; chi importer moi xac nhan duoc
    (asserts! (is-eq (get status lc) STATUS-DOCS-SUBMITTED) ERR-INVALID-STATUS) ;; chi xac nhan sau khi exporter da nop tai lieu
    (try! (as-contract (stx-transfer? (get amount lc) tx-sender (get exporter lc)))) ;; chuyen tien cho exporter
    (map-set letters-of-credit lc-id
      (merge lc { status: STATUS-CONFIRMED })
    )
    (ok true)
  )
)

;; === Importer huy LC neu exporter chua nop tai lieu ===
(define-public (cancel-lc (lc-id uint))
  (let ((lc (unwrap! (map-get? letters-of-credit lc-id) ERR-NOT-FOUND)))
    (asserts! (is-eq tx-sender (get importer lc)) ERR-UNAUTHORIZED) ;; chi importer moi huy duoc
    (let ((s (get status lc)))
      (asserts! (or (is-eq s STATUS-FUNDED) (is-eq s STATUS-DOCS-SUBMITTED)) ERR-INVALID-STATUS) ;; chi huy neu chua xac nhan nhan hang
      (try! (as-contract (stx-transfer? (get amount lc) tx-sender (get importer lc)))) ;; tra lai tien cho importer
      (map-set letters-of-credit lc-id
        (merge lc { status: STATUS-CANCELLED })
      )
      (ok true)
    )
  )
)

;; === Doc thong tin chi tiet LC ===
(define-read-only (get-lc (lc-id uint))
  (map-get? letters-of-credit lc-id)
)

;; === Lay trang thai hien tai cua LC ===
(define-read-only (get-status (lc-id uint))
  (match (map-get? letters-of-credit lc-id)
    lc (ok (get status lc))
    ERR-NOT-FOUND
  )
)
