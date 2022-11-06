type Props = {
  title: string;
  asset: string;
  onClick(): void;
};

const WalletContentItem = ({ title, asset, onClick }: Props) => {
  return (
    <div>
      <button className="p-[20px] w-full" type="button" onClick={onClick}>
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center">
            <div className="mr-[20px] min-w-[64px] font-normal text-left text-[#262626] font-inter normal text-base">
              {title}
            </div>
            <div className="mr-1 w-[25px]  h-[25px] text-[#EBEBEB] bg-white rounded-full border" />
            <div className="font-normal text-[#262626] font-inter normal text-base">
              {asset}
            </div>
          </div>
          <svg
            width="9"
            height="16"
            viewBox="0 0 9 16"
            className="shrink-0 text-[#191919]"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Chevron</title>
            <path d="M1 1L8 8L1 15" strokeLinecap="round" />
          </svg>
        </div>
      </button>
    </div>
  );
};

export default WalletContentItem;
