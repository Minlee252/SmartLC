import React from "react";
import CreateLCForm from "./CreateLCForm";

interface FunctionPanelProps {
  role: "importer" | "exporter";
  address: string;
}

const FunctionPanel: React.FC<FunctionPanelProps> = ({ role, address }) => {
  return (
    <div style={{ marginTop: "2rem" }}>
      <h2>Chức năng cho {role}</h2>
      <p>Địa chỉ ví: {address}</p>

      {role === "importer" && (
        <>
          <h3>Tạo LC mới</h3>
          <CreateLCForm importer={address} />
        </>
      )}

      {/* Thêm các chức năng khác cho exporter sau */}
    </div>
  );
};

export default FunctionPanel;
