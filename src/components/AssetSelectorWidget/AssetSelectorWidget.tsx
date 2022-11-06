import Image from "next/image";
import CryptoAssetList, { CryptoAssetListMsg } from "./CryptoAssetList";
import StocksAssetList, { StocksAssetListMsg } from "./StocksAssetList";
import IconSeach from "../../assets/icon_search.svg";

export type AssetSelectorWidgetMsg =
  | CryptoAssetListMsg
  | StocksAssetListMsg
  | { type: "cancel_btn_clicked" };

type Props = {
  onMsg(msg: AssetSelectorWidgetMsg): void;
};

const AssetSelectorWidget = ({ onMsg }: Props) => {
  return (
    <div className="flex flex-col justify-between w-full h-full">
      <div>
        <div className="font-medium text-[#191919] font-inter normal text-base">
          Which asset would you like to buy?
        </div>
        <div className="mb-[25px]" />
        <div className="flex justify-start items-center pl-[20px] w-full h-[54px] bg-[#F6F6F6] rounded-lg">
          <Image src={IconSeach} />
          <input
            className="p-[10px] ml-2 w-full h-full bg-[#F6F6F6]"
            type="text"
            placeholder="Search assets input"
          />
        </div>
      </div>
      <div className="mb-[25px]" />
      <CryptoAssetList onMsg={onMsg} />
      <div className="w-full h-[1px] bg-[#EBEBEB]" />
      <div className="mb-[25px]" />
      <StocksAssetList onMsg={onMsg} />
      <button
        className="w-full h-[57px] font-medium text-[#DB5940] rounded-lg border border-gray-6 font-inter normal text-base"
        type="button"
        onClick={() => onMsg({ type: "cancel_btn_clicked" })}
      >
        Cancel
      </button>
    </div>
  );
};

export default AssetSelectorWidget;
