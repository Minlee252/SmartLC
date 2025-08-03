// src/wallet.ts
import { showConnect, UserSession, AppConfig } from "@stacks/connect";
import type { FinishedAuthData } from "@stacks/connect";

const appConfig = new AppConfig(["store_write", "publish_data"]);
export const userSession = new UserSession({ appConfig }); // 👈 THÊM DÒNG NÀY

// Thông tin DApp hiển thị trong ví
const appDetails = {
  name: "SmartLC DApp",
  icon: window.location.origin + "/logo.png",
};

// ✅ Hàm kết nối ví Leather
export const authenticate = async (): Promise<string> => {
  return new Promise((resolve, reject) => {
    showConnect({
      userSession, // 👈 THÊM DÒNG NÀY ĐỂ VÍ KẾT NỐI THEO PHIÊN LÀM VIỆC
      appDetails,
      onFinish: (payload: FinishedAuthData) => {
        const address =
          payload.authResponsePayload?.profile?.stxAddress?.testnet ?? null;

        if (address) {
          sessionStorage.setItem("user-address", address);
          resolve(address);
        } else {
          reject("Không thể lấy địa chỉ ví");
        }
      },
      onCancel: () => {
        reject("Người dùng hủy kết nối ví");
      },
    });
  });
};

// ✅ Hàm lấy địa chỉ ví từ session
export const getUserAddress = (): string | null => {
  return sessionStorage.getItem("user-address");
};

// ✅ Hàm đăng xuất
export const logout = () => {
  userSession.signUserOut(window.location.origin); // 👈 DÙNG API CHUẨN
  sessionStorage.removeItem("user-address");
};
