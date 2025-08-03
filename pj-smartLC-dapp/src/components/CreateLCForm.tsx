import React, { useState } from "react";
import { createLC } from "../types/lc";

interface CreateLCFormProps {
  importer: string;
}

const CreateLCForm: React.FC<CreateLCFormProps> = ({ importer }) => {
  const [formData, setFormData] = useState({
    lcId: "",
    amount: 0,
    exporter: "",
  });
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "amount" ? Number(value) : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Đang gửi giao dịch...");

    try {
      await createLC({
        lcId: formData.lcId,
        amount: formData.amount,
        importer,
        exporter: formData.exporter,
      });
      setStatus("Đã gửi tạo LC thành công.");
    } catch (error) {
      console.error("Lỗi khi tạo LC:", error);
      setStatus("Tạo LC thất bại.");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "1rem" }}>
      <div>
        <label>ID LC: </label>
        <input name="lcId" value={formData.lcId} onChange={handleChange} required />
      </div>

      <div>
        <label>Exporter: </label>
        <input name="exporter" value={formData.exporter} onChange={handleChange} required />
      </div>

      <div>
        <label>Số tiền: </label>
        <input name="amount" type="number" value={formData.amount} onChange={handleChange} required />
      </div>

      <button type="submit" style={{ marginTop: "1rem" }}>Gửi tạo LC</button>
      {status && <p>{status}</p>}
    </form>
  );
};

export default CreateLCForm;
