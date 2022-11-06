import { useCallback, useEffect, useState } from "react";
import CryptoAssetItem from "./CryptoAssetItem";

const CryptoAssetList = () => {
  const [loading, setLoading] = useState(false);
  const [coins, setCoins] = useState([]);

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
    return <div className="mb-[25px]">No data...</div>;
  }

  return (
    <div>
      {loading ? (
        <div className="mb-[25px]">Loading...</div>
      ) : (
        coins.slice(0, 4).map((coin) => (
          <div key={coin.id} className="mb-[25px]">
            <CryptoAssetItem coin={coin} onClick={() => {}} />
          </div>
        ))
      )}
    </div>
  );
};

export default CryptoAssetList;
