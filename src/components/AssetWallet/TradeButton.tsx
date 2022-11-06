import { useMemo } from "react";

export type TradeButtonMsg = { type: "trade_btn_clicked" };

type Props = {
  mode: "BUY" | "SELL";
  asset: string;
  onMsg(msg: TradeButtonMsg): void;
};

const TradeButton = ({ mode, asset, onMsg }: Props) => {
  const buttonLabel = useMemo(
    () => `${mode[0].toUpperCase()}${mode.slice(1).toLowerCase()} ${asset}`,
    [mode, asset]
  );

  return (
    <button
      className="w-full h-[57px] font-medium text-white bg-[#191919] rounded-lg font-inter normal text-base"
      type="submit"
      onClick={() => onMsg({ type: "trade_btn_clicked" })}
    >
      {buttonLabel}
    </button>
  );
};

export default TradeButton;
