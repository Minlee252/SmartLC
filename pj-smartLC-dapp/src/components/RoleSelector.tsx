import React from "react";

interface RoleSelectorProps {
  onSelect: (role: "importer" | "exporter") => void;
}

const RoleSelector: React.FC<RoleSelectorProps> = ({ onSelect }) => {
  return (
    <div>
      <h2>Chọn vai trò:</h2>
      <button onClick={() => onSelect("importer")}>Importer</button>
      <button onClick={() => onSelect("exporter")}>Exporter</button>
    </div>
  );
};

export default RoleSelector;
