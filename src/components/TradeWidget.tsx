import notReachable from "@/tools/notReachable";
import { useCallback, useState } from "react";
import AssetSelectorWidget, {
  AssetSelectorWidgetMsg,
} from "./AssetSelectorWidget/AssetSelectorWidget";
import AssetWallet, { AssetWalletMsg } from "./AssetWallet/AssetWallet";

type ModeState = { type: "asset_wallet" } | { type: "asset_selector" };

const TradeWidget = () => {
  const [mode, setMode] = useState<ModeState>({ type: "asset_wallet" });

  const onAssetWalletMsg = useCallback(
    (msg: AssetWalletMsg) => {
      switch (msg.type) {
        case "choose_asset_clicked":
          setMode({ type: "asset_selector" });
          break;
        case "choose_pay_with_clicked":
        case "trade_btn_clicked":
          // TODO: not used in MVP
          break;
        default:
          notReachable(msg);
      }
    },
    [setMode]
  );

  const onAssetSelectorWidgetMsg = useCallback(
    (msg: AssetSelectorWidgetMsg) => {
      switch (msg.type) {
        case "crypto_asset_clicked":
        case "stocks_asset_clicked":
          setMode({ type: "asset_wallet" });
          break;
        default:
          notReachable(msg);
      }
    },
    [setMode]
  );

  switch (mode.type) {
    case "asset_wallet":
      return <AssetWallet onMsg={onAssetWalletMsg} />;
    case "asset_selector":
      return <AssetSelectorWidget onMsg={onAssetSelectorWidgetMsg} />;
    default:
      return notReachable(mode);
  }
};

export default TradeWidget;
