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
  ) =>
    navMode === modeToCompare ? "text-[#262626] border-b-2" : "text-[#8A8A8A]";

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
      </div>
    </div>
  );
};

export default Navigation;
