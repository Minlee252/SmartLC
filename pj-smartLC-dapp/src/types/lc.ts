import {
  stringAsciiCV,
  uintCV,
  standardPrincipalCV,
} from "@stacks/transactions";
import { openContractCall } from "@stacks/connect";

const contractAddress = "ST2PRNFXSYNDK0HQXXQ1SQAQWNEVVFV0W00QW28TC"; // <-- thay bằng địa chỉ thực
const contractName = "lc-contract";
const functionName = "create-lc";

// ✅ Tạo network object thủ công (tránh lỗi SDK)
const network: any = {
  coreApiUrl: "https://api.testnet.hiro.so",
};

interface CreateLCParams {
  lcId: string;
  amount: number;
  importer: string;
  exporter: string;
}

export const createLC = async ({
  lcId,
  amount,
  importer,
  exporter,
}: CreateLCParams) => {
  await openContractCall({
    contractAddress,
    contractName,
    functionName,
    functionArgs: [
      stringAsciiCV(lcId),
      uintCV(amount),
      standardPrincipalCV(importer),
      standardPrincipalCV(exporter),
    ],
    network,
    appDetails: {
      name: "SmartLC DApp",
      icon: window.location.origin + "/logo.png",
    },
    onFinish: (data) => {
      console.log("✅ Giao dịch thành công:", data);
    },
    onCancel: () => {
      console.log("❌ Giao dịch bị hủy.");
    },
  });
};