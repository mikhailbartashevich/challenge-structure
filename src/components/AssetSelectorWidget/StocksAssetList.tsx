import { STOCK_TEST_RESULT } from "@/api/stocks";
import StocksAssetItem from "./StocksAssetItem";

const StocksAssetList = () => {
  return (
    <div>
      {STOCK_TEST_RESULT.slice(0, 4).map((stock) => (
        <div className="mb-[25px]">
          <StocksAssetItem key={stock.id} stock={stock} onClick={() => {}} />
        </div>
      ))}
    </div>
  );
};

export default StocksAssetList;
