import { TEST_RESULT } from "@/api/coins";
import CryptoAssetItem from "./CryptoAssetItem";

const CryptoAssetList = () => {
  return (
    <div>
      {TEST_RESULT.slice(0, 4).map((coin) => (
        <div className="mb-[25px]">
          <CryptoAssetItem key={coin.id} coin={coin} onClick={() => {}} />
        </div>
      ))}
    </div>
  );
};

export default CryptoAssetList;
