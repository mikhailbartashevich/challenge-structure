export type AssetWalletMsg =
  | { type: "choose_asset_clicked" }
  | { type: "choose_pay_with_clicked" };

type Props = {
  onMsg(msg: AssetWalletMsg): void;
};

const AssetWallet = ({ onMsg }: Props) => {
  return (
    <div className="flex flex-col  justify-between">
      <div>Navigation Buy Sell</div>
      <div>Total amount</div>
      <button
        type="submit"
        onClick={() => onMsg({ type: "choose_asset_clicked" })}
      >
        <div>Trading Wallet</div>
      </button>
      <div>Trade Button</div>
    </div>
  );
};

export default AssetWallet;
