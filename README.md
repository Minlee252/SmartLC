
-Tên dự án: SmartLC - Thư tín dụng thông minh trên blockchain

-Họ và tên các thành viên:
Trần Thị Linh Chi 
Lê Diệu Linh
Lê Hữu Sơn
Lê Ngọc Minh
-Tên và email người đại diện: Lê Ngọc Minh - minhle.06666666@gmail.com

-Số tài khoản ngân hàng - Tên: 7909052004 - VPbank - Lê Ngọc Minh

-SmartLC là dự án xây dựng một hệ thống quản lý L/C (Letter of Credit) thông minh dựa trên blockchain Stacks, sử dụng ngôn ngữ Clarity cho hợp đồng thông minh và tích hợp với các thư viện Stacks SDK.

-Mục tiêu:

Tạo và quản lý hợp đồng LC trên blockchain Stacks.

Quản lý trạng thái hợp đồng LC (Tạo, Xác thực, Gửi tài liệu, Thanh toán, Đóng LC).

Xây dựng API để giao tiếp giữa backend và smart contract.

Quản lý dữ liệu tài liệu dưới dạng hash (SHA256).

-Cấu trúc dự án

pj-smartLC/


├── contracts/              # Các hợp đồng Clarity


├── scripts/                # Script deploy & test hợp đồng


├── api/                    # API Backend xử lý giao tiếp với smart contract


├── node_modules/           # Thư viện dependencies (Stacks SDK & Clarity tools)


├── package.json            # Quản lý dependencies & script npm


└── README.md               # Tài liệu hướng dẫn (file này)

-Cài đặt

git clone https://github.com/Minlee252/SmartLC.git

cd pj-smartLC

npm install

-Cách sử dụng

-Triển khai hợp đồng Clarity:

# Ví dụ deploy contract lên testnet

clarinet deploy

-Giao tiếp hợp đồng qua API:

npm run start

# Truy cập http://localhost:5173/

-Các thành phần chính

contracts/: Hợp đồng LC logic viết bằng Clarity.

api/: Backend NodeJS dùng Stacks.js để tương tác với blockchain.

scripts/: Script hỗ trợ build/deploy/test contract.

-Công nghệ sử dụng

Stacks Blockchain & Clarity Smart Contract

Node.js & Stacks.js SDK

Clarinet: Môi trường phát triển Clarity.

-Tiêu chí đánh giá dự án

Dự án SmartLC hiện đang trong giai đoạn phát triển. Các chức năng chính về logic backend và smart contract đã được xây dựng cơ bản. Giao diện UI mẫu hiện tại đang trong quá trình xây dựng, chưa hoàn thiện đầy đủ các chức năng nghiệp vụ. Ví Stacks được kết nối thông qua Leather Wallet, hỗ trợ thực hiện các thao tác thử nghiệm với smart contract.

Để đáp ứng tiêu chí của ban tổ chức, dự án cam kết đạt các tiêu chí sau:

1. Chất lượng kỹ thuật

Hợp đồng thông minh viết bằng Clarity đã được kiểm thử logic và deploy thành công lên testnet.

API backend hiện đang phát triển và mới dừng ở mức thử nghiệm các thao tác khởi tạo LC, cập nhật trạng thái và xác 
thực tài liệu; các chức năng nâng cao và khả năng vận hành ổn định sẽ được tiếp tục hoàn thiện trong các giai đoạn tới.

2. Giao diện minh họa (Prototype/UI)

Giao diện web đơn giản, kết nối trực tiếp với ví Stacks.

Các chức năng minh họa luồng nghiệp vụ LC: tạo LC, xác thực, cập nhật tài liệu, hoàn tất thanh toán.

Giao diện hiện tại đang trong giai đoạn phát triển, các chức năng nghiệp vụ vẫn đang được bổ sung và hoàn thiện.

3. Tính sáng tạo và khả năng mở rộng

Ý tưởng ứng dụng LC trên blockchain giúp giảm chi phí trung gian, tăng tính minh bạch.

Hệ thống thiết kế mở, có thể mở rộng để tích hợp thêm nhiều loại tài liệu khác nhau (vận đơn, bảo hiểm, chứng từ hải quan).

4. Tài liệu đi kèm

Repository GitHub công khai, đầy đủ mã nguồn.

File README mô tả chi tiết ý tưởng, chức năng chính và hướng dẫn cài đặt.

5. Địa chỉ ví Stacks
Địa chỉ ví Stacks (STX Address) sẽ được cung cấp ở dưới.

Đội ngũ phát triển cam kết cung cấp đầy đủ thông tin ví trong file README.

Ảnh minh chứng triển khai hợp đồng thành công

Địa chỉ ví người mua: ST2PRNFXSYNDK0HQXXQ1SQAQWNEVVFV0W00QW28TC.

Địa chỉ ví người bán: ST28Z6NNES2H7406W5WZY8XNPASFSMHH8K0DZM7BZ.

Dưới đây là ảnh minh chứng cho thao tác Người bán gửi yêu cầu tạo LC (submit) thành công trên mạng lưới Stacks:

![Deploy Success](./images/C:\Users\ADMIN\Pictures\Screenshots\Screenshot 2025-08-03 222334.png)

Dưới đây là ảnh minh chứng cho thao tác Người bán gửi tài liệu (submit document) thành công trên mạng lưới Stacks:

![Deploy Success](./images/C:\Users\ADMIN\Pictures\Screenshots\Screenshot 2025-08-03 223356.png)

Dưới đây là ảnh minh chứng cho thao tác Người mua xác nhận đã nhận hàng (confirm delivery) trên mạng lưới Stacks:

![Deploy Success](./images/C:\Users\ADMIN\Pictures\Screenshots\Screenshot 2025-08-03 223541.png)

Dưới đây là ảnh minh chứng cho thao tác Người mua xác nhận đã nhận hàng (confirm delivery) trên mạng lưới Stacks:

![Deploy Success](./images/"C:\Users\ADMIN\Pictures\Screenshots\Screenshot 2025-08-03 235255.png")
