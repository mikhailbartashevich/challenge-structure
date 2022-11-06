import { Instrument } from "@/types/api";
import { useCallback, useEffect, useState } from "react";
import StocksAssetItem from "./StocksAssetItem";

export type StocksAssetListMsg = {
  type: "stocks_asset_clicked";
  asset: string;
};

type Props = {
  onMsg(msg: StocksAssetListMsg): void;
};

const StocksAssetList = ({ onMsg }: Props) => {
  const [loading, setLoading] = useState(false);
  const [stocks, setStocks] = useState<Instrument[]>([]);

  const fetchStocks = useCallback(async () => {
    setLoading(true);
    fetch("/api/stocks")
      .then((res) => res.json())
      .then((data) => {
        setStocks(data.result);
        setLoading(false);
      });
  }, [setStocks]);

  useEffect(() => {
    fetchStocks();
  }, [fetchStocks]);

  if (!loading && (!stocks || !stocks.length)) {
    return <div className="mb-[25px]">No stocks data...</div>;
  }
  return (
    <div>
      {stocks.slice(0, 2).map((stock) => (
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
