import { STOCK_TEST_RESULT } from "@/pages/api/stocks";
import StocksAssetItem from "./StocksAssetItem";

const StocksAssetList = () => {
  return (
    <div>
      {STOCK_TEST_RESULT.slice(0, 4).map((stock) => (
        <div key={stock.id} className="mb-[25px]">
          <StocksAssetItem stock={stock} onClick={() => {}} />
        </div>
      ))}
    </div>
  );
};

export default StocksAssetList;
