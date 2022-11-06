import { Instrument } from "@/types/api";
import { useMemo } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

type Props = {
  stock: Instrument;
  onClick(): void;
};

const StocksAssetItem = ({ stock, onClick }: Props) => {
  const amountClassName = useMemo(() => {
    if (stock.amount === 0) {
      return "text-[#8A8A8A]";
    }
    return stock.amount > 0 ? "text-[#5EB242]" : "text-[#DB5940]";
  }, [stock.amount]);

  return (
    <button className="w-full" type="button" onClick={onClick}>
      <div className="flex items-center w-full">
        <div className="shrink-0 w-[42px] h-[42px] text-[#EBEBEB] bg-white rounded-full border" />
        <div className="shrink ml-[10px] w-full">
          <div className="flex justify-between w-full text-left">
            <div className="font-normal text-left text-[#262626] font-inter normal text-base">
              {stock.name}
            </div>
            <div className="font-normal text-left text-[#262626] font-inter normal text-base">
              {stock.value}
            </div>
          </div>
          <div className="flex justify-between w-full text-left">
            <div className="font-normal text-[#8A8A8A] font-inter normal text-sm">
              {stock.symbol}
            </div>
            <div
              className={`${amountClassName} font-normal  font-inter normal text-sm flex items-center`}
            >
              <div>{stock.amount > 0 ? <FaAngleUp /> : <FaAngleDown />}</div>
              {`${Math.abs(stock.amount)}%`}
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default StocksAssetItem;
