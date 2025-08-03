import { useState, useEffect } from "react";
import ConnectWallet from "./components/ConnectWallet";
import RoleSelector from "./components/RoleSelector";
import FunctionPanel from "./components/FunctionPanel";
import { logout, userSession } from "./wallet";

export default function App() {
  const [userAddress, setUserAddress] = useState<string | null>(null);
  const [role, setRole] = useState<"importer" | "exporter" | null>(null);

  //Tự động lấy địa chỉ ví nếu đã login trước đó
  useEffect(() => {
    if (userSession.isUserSignedIn()) {
      const userData = userSession.loadUserData();
      setUserAddress(userData.profile.stxAddress.testnet);
    }
  }, []);

  const handleLogout = () => {
    logout();
    setUserAddress(null);
    setRole(null);
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Smart LC DApp</h1>

      {!userAddress ? (
        <ConnectWallet onConnect={(address: string) => setUserAddress(address)} />
      ) : !role ? (
        <>
          <p>Ví đã kết nối: {userAddress}</p>
          <button onClick={handleLogout}>Đăng xuất</button>
          <RoleSelector onSelect={(r: "importer" | "exporter") => setRole(r)} />
        </>
      ) : (
        <>
          <p>Ví: {userAddress} | Vai trò: {role}</p>
          <button onClick={() => setRole(null)}>🔁 Đổi vai trò</button>
          <hr />
          <FunctionPanel role={role} address={userAddress} />
        </>
      )}
    </div>
  );
}
