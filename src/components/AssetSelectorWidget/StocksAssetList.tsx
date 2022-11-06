import { STOCK_TEST_RESULT } from "@/pages/api/stocks";
import StocksAssetItem from "./StocksAssetItem";

export type StocksAssetListMsg = {
  type: "stocks_asset_clicked";
  asset: string;
};

type Props = {
  onMsg(msg: StocksAssetListMsg): void;
};

const StocksAssetList = ({ onMsg }: Props) => {
  return (
    <div>
      {STOCK_TEST_RESULT.slice(0, 4).map((stock) => (
        <div key={stock.id} className="mb-[25px]">
          <StocksAssetItem
            stock={stock}
            onClick={() =>
              onMsg({ type: "stocks_asset_clicked", asset: stock.symbol })
            }
          />
        </div>
      ))}
    </div>
  );
};

export default StocksAssetList;
