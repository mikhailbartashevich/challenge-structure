export type NavigationMsg = {
  type: "navigation_btn_clicked";
  mode: NavigationMode;
};

export type NavigationMode = "BUY" | "SELL";

type Props = {
  mode: NavigationMode;
  onMsg(msg: NavigationMsg): void;
};

const Navigation = ({ mode, onMsg }: Props) => {
  const getSelectedClassName = (
    navMode: NavigationMode,
    modeToCompare: NavigationMode
  ) => (navMode === modeToCompare ? "text-[#262626]" : "text-[#8A8A8A]");

  const buttonBaseClassName = "font-medium font-inter normal text-base";

  return (
    <div className="flex">
      <div className={`${getSelectedClassName(mode, "BUY")} mr-3`}>
        <button
          type="button"
          className={buttonBaseClassName}
          onClick={() => onMsg({ type: "navigation_btn_clicked", mode: "BUY" })}
        >
          Buy
        </button>
        {mode === "BUY" && (
          <div className="h-[2px] bg-[#262626] rounded-full" />
        )}
      </div>
      <div className={`${getSelectedClassName(mode, "SELL")}`}>
        <button
          type="button"
          className={buttonBaseClassName}
          onClick={() =>
            onMsg({ type: "navigation_btn_clicked", mode: "SELL" })
          }
        >
          Sell
        </button>
        {mode === "SELL" && (
          <div className="h-[2px] bg-[#262626] rounded-full" />
        )}
      </div>
    </div>
  );
};

export default Navigation;
