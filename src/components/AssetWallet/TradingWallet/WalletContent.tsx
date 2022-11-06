import Image from "next/image";
import WalletContentItem from "./WalletContentItem";
import ExchangeArrowsImg from "../../../assets/exchange_arrows.svg";

export type WalletContentMsg =
  | { type: "pay_with_item_clicked" }
  | { type: "buy_item_clicked" };

type Props = {
  onMsg(msg: WalletContentMsg): void;
};

const WalletContent = ({ onMsg }: Props) => {
  return (
    <div className="relative w-[330px] text-gray-4 bg-white rounded-xl border border-gray-6">
      <WalletContentItem
        title="Buy"
        asset="BTC"
        onClick={() => onMsg({ type: "buy_item_clicked" })}
      />
      <div className="flex  items-center">
        <div className="w-[228px] h-[1px] bg-[#EBEBEB]" />
        <button type="button" className="absolute right-[62px] bottom-[50px]">
          <div className="flex justify-center items-center w-[35px] h-[35px] text-[#262626] bg-[#F6F6F6] rounded-full">
            <Image src={ExchangeArrowsImg} />
          </div>
        </button>
        <div className="w-[35px] bg-[#EBEBEB]" />
        <div className="ml-[6px] w-[55px] h-[1px] bg-[#EBEBEB]" />
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
