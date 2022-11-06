import { Instrument } from "@/types/api";
import { useCallback, useEffect, useState } from "react";
import CryptoAssetItem from "./CryptoAssetItem";

export type CryptoAssetListMsg = {
  type: "crypto_asset_clicked";
  asset: string;
};

type Props = {
  onMsg(msg: CryptoAssetListMsg): void;
};

const CryptoAssetList = ({ onMsg }: Props) => {
  const [loading, setLoading] = useState(false);
  const [coins, setCoins] = useState<Instrument[]>([]);

  const fetchCoins = useCallback(async () => {
    setLoading(true);
    fetch("/api/coins")
      .then((res) => res.json())
      .then((data) => {
        setCoins(data.result);
        setLoading(false);
      });
  }, [setCoins]);

  useEffect(() => {
    fetchCoins();
  }, [fetchCoins]);

  if (!loading && (!coins || !coins.length)) {
    return <div className="mb-[25px]">No coins data...</div>;
  }

  return (
    <div>
      {loading ? (
        <div className="mb-[25px]">Loading coins data...</div>
      ) : (
        coins.slice(0, 4).map((coin) => (
          <div key={coin.id} className="mb-[25px]">
            <CryptoAssetItem
              coin={coin}
              onClick={() =>
                onMsg({ type: "crypto_asset_clicked", asset: coin.symbol })
              }
            />
          </div>
        ))
      )}
    </div>
  );
};

export default CryptoAssetList;
