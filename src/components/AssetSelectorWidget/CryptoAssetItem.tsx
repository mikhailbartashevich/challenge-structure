import { Instrument } from "@/types/api";

type Props = {
  coin: Instrument;
  onClick(): void;
};

const CryptoAssetItem = ({ coin, onClick }: Props) => {
  return (
    <button className="w-full" type="button" onClick={onClick}>
      <div className="flex items-center w-full">
        <div className="shrink-0 w-[42px] h-[42px] text-[#EBEBEB] bg-white rounded-full border" />
        <div className="shrink ml-[10px] w-full">
          <div className="flex justify-between w-full text-left">
            <div className="font-normal text-left text-[#262626] font-inter normal text-base">
              {coin.name}
            </div>
            <div className="font-normal text-left text-[#262626] font-inter normal text-base">
              ${coin.value}
            </div>
          </div>
          <div className="flex justify-between w-full text-[14px] text-left">
            <div className="font-normal text-[#8A8A8A] font-inter normal">
              {coin.symbol}
            </div>
            <div className="font-normal text-[#8A8A8A] font-inter normal">
              {coin.amount}
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default CryptoAssetItem;
