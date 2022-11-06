import WalletContentItem from "./WalletContentItem";

export type WalletContentMsg =
  | { type: "pay_with_item_clicked" }
  | { type: "buy_item_clicked" };

type Props = {
  onMsg(msg: WalletContentMsg): void;
};

const WalletContent = ({ onMsg }: Props) => {
  return (
    <div className="relative w-full text-gray-4 bg-white rounded-xl border border-gray-6">
      <WalletContentItem
        title="Buy"
        asset="BTC"
        onClick={() => onMsg({ type: "buy_item_clicked" })}
      />
      <div className="flex absolute bottom-[45px] items-center">
        <div className="mr-1 w-[228px] h-[1px] bg-[#EBEBEB]" />
        <button type="button">
          <div className="flex justify-center items-center w-[35px] h-[35px] text-[#262626] bg-[#F6F6F6] rounded-full">
            ||
          </div>
        </button>
        <div className="ml-1 w-[54px] h-[1px] bg-[#EBEBEB]" />
      </div>
      <WalletContentItem
        title="Pay with"
        asset="ETH"
        onClick={() => onMsg({ type: "pay_with_item_clicked" })}
      />
    </div>
  );
};

export default WalletContent;
