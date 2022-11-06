import WalletContentItem from "./WalletContentItem";

export type WalletContentMsg =
  | { type: "pay_with_item_clicked" }
  | { type: "buy_item_clicked" };

type Props = {
  onMsg(msg: WalletContentMsg): void;
};

const WalletContent = ({ onMsg }: Props) => {
  return (
    <div className="w-full text-gray-4 bg-white rounded-xl border border-gray-6">
      <WalletContentItem
        title="Buy"
        asset="BTC"
        onClick={() => onMsg({ type: "buy_item_clicked" })}
      />
      <WalletContentItem
        title="Pay with"
        asset="ETH"
        onClick={() => onMsg({ type: "pay_with_item_clicked" })}
      />
    </div>
  );
};

export default WalletContent;
