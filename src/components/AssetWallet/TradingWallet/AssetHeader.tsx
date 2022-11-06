const AssetHeader = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="font-normal text-[#8A8A8A] font-inter normal text-sm">
        ETH Wallet: $29,778.36
      </div>
      <div className="flex items-center">
        <button type="button">
          <div className="flex  justify-center items-center mr-[10px] w-[32px] h-[32px] font-normal text-[#262626] bg-[#F6F6F6] rounded-full">
            C
          </div>
        </button>
        <button type="button">
          <div className="flex justify-center items-center w-[55px] h-[32px] font-normal text-[#262626] bg-[#F6F6F6] rounded-full">
            MAX
          </div>
        </button>
      </div>
    </div>
  );
};

export default AssetHeader;
