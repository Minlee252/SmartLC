import { useEffect } from "react";
import { authenticate, getUserAddress } from "../wallet";

interface ConnectWalletProps {
  onConnect: (address: string) => void;
}

export default function ConnectWallet({ onConnect }: ConnectWalletProps) {
  useEffect(() => {
    const userAddress = getUserAddress();
    if (userAddress) onConnect(userAddress);
  }, []);

  const handleLogin = async () => {
    const userAddress = await authenticate();
    onConnect(userAddress);
  };

  return (
    <div>
      <button onClick={handleLogin}>Kết nối ví Leather</button>
    </div>
  );
}
