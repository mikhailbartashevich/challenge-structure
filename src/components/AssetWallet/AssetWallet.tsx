import notReachable from "@/tools/notReachable";
import { useCallback, useState } from "react";
import Navigation, { NavigationMode, NavigationMsg } from "./Navigation";
import TotalAmount from "./TotalAmount";
import TradeButton, { TradeButtonMsg } from "./TradeButton";

export type AssetWalletMsg =
  | { type: "choose_asset_clicked" }
  | { type: "choose_pay_with_clicked" }
  | TradeButtonMsg;

type Props = {
  onMsg(msg: AssetWalletMsg): void;
};

const AssetWallet = ({ onMsg }: Props) => {
  const [navigationMode, setNavigationMode] = useState<NavigationMode>("BUY");

  const onTradeButtonMsg = useCallback(
    (msg: TradeButtonMsg) => {
      switch (msg.type) {
        case "trade_btn_clicked":
          onMsg(msg);
          break;
        default:
          notReachable(msg.type);
      }
    },
    [onMsg]
  );

  const onNavigationMsg = useCallback(
    (msg: NavigationMsg) => {
      switch (msg.type) {
        case "navigation_btn_clicked":
          setNavigationMode(msg.mode);
          break;
        default:
          notReachable(msg.type);
      }
    },
    [setNavigationMode]
  );

  return (
    <div className="flex flex-col justify-between w-full h-full">
      <div>
        <Navigation mode={navigationMode} onMsg={onNavigationMsg} />
      </div>
      <div>
        <TotalAmount />
      </div>
      <button
        type="submit"
        onClick={() => onMsg({ type: "choose_asset_clicked" })}
      >
        <div>Trading Wallet</div>
      </button>
      <div>
        <TradeButton asset="BTC" mode="BUY" onMsg={onTradeButtonMsg} />
      </div>
    </div>
  );
};

export default AssetWallet;
