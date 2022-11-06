import AssetHeader from "./AssetHeader";
import WalletContent, { WalletContentMsg } from "./WalletContent";

export type TradingWalletMsg = WalletContentMsg;

type Props = {
  onMsg(msg: TradingWalletMsg): void;
};

const TradingWallet = ({ onMsg }: Props) => {
  return (
    <div>
      <AssetHeader />
      <div className="mb-2" />
      <WalletContent onMsg={onMsg} />
    </div>
  );
};

export default TradingWallet;
