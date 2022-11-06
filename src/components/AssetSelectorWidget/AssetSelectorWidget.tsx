export type AssetSelectorWidgetMsg =
  | { type: "crypto_asset_clicked"; asset: string } // TODO: union type for assets
  | { type: "stocks_asset_clicked"; asset: string }
  | { type: "cancel_btn_clicked" };

type Props = {
  onMsg(msg: AssetSelectorWidgetMsg): void;
};

const AssetSelectorWidget = ({ onMsg }: Props) => {
  return (
    <div className="flex flex-col  justify-between">
      <div>Which asset would you like to buy?</div>
      <div>Search assets input</div>
      <button
        type="button"
        onClick={() => onMsg({ type: "crypto_asset_clicked", asset: "BTC" })}
      >
        <div>Crypto assets list</div>
      </button>
      <button
        type="button"
        onClick={() => onMsg({ type: "stocks_asset_clicked", asset: "APPL" })}
      >
        <div>Srocks assets list</div>
      </button>
      <button
        type="button"
        onClick={() => onMsg({ type: "cancel_btn_clicked" })}
      >
        <div>Cancel button</div>
      </button>
    </div>
  );
};

export default AssetSelectorWidget;
