import notReachable from "@/tools/notReachable";
import { useCallback, useState } from "react";
import Navigation, { NavigationMode, NavigationMsg } from "./Navigation";
import TotalAmount from "./TotalAmount";
import TradeButton, { TradeButtonMsg } from "./TradeButton";
import TradingWallet, { TradingWalletMsg } from "./TradingWallet/TradingWallet";

export type AssetWalletMsg = TradingWalletMsg | TradeButtonMsg;

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
      <Navigation mode={navigationMode} onMsg={onNavigationMsg} />
      <TotalAmount />
      <div>
        <TradingWallet onMsg={onMsg} />
        <div className="mb-2" />
        <TradeButton asset="BTC" mode="BUY" onMsg={onTradeButtonMsg} />
      </div>
    </div>
  );
};

export default AssetWallet;
