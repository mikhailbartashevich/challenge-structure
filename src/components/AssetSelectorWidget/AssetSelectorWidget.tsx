import CryptoAssetList from "./CryptoAssetList";

export type AssetSelectorWidgetMsg =
  | { type: "crypto_asset_clicked"; asset: string } // TODO: union type for assets
  | { type: "stocks_asset_clicked"; asset: string }
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
        <input
          className="flex justify-start items-center pl-[20px] w-full h-[54px] bg-[#F6F6F6] rounded-lg"
          type="text"
          placeholder="Search assets input"
          value=""
        />
      </div>
      <div className="mb-[25px]" />
      <CryptoAssetList />
      <div className="w-full h-[1px] bg-[#EBEBEB]" />
      <button
        type="button"
        onClick={() => onMsg({ type: "stocks_asset_clicked", asset: "APPL" })}
      >
        <div>Srocks assets list</div>
      </button>
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
