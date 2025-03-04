interface CountableItemProps {
  count: number;
  onCountChange: (newCount: number) => void;
  maxQuantity: number;
}

export default function CountableItem({
  count,
  onCountChange,
  maxQuantity,
}: CountableItemProps) {
  const onPlus = () => {
    if (count < maxQuantity) {
      onCountChange(count + 1);
    }
  };

  const onMinus = () => {
    if (count > 1) {
      onCountChange(count - 1);
    }
  };

  return (
    <div className="flex items-center gap-[16px]">
      <h4 className="text-primary">حدد الكمية</h4>
      <div className="flex w-[200px] justify-between items-center border border-[#D4D4D4] rounded-[15px] gap-[16px] p-[2px]">
        <button
          onClick={onMinus}
          className="bg-[#F7F7F7] py-[8px] px-[24px] rounded-r-[15px]"
        >
          -
        </button>
        <h4 className="text-[18px] text-[#1D1B1B] font-[600]">{count}</h4>
        <button
          onClick={onPlus}
          className="bg-[#F7F7F7] py-[8px] px-[24px] rounded-l-[15px]"
        >
          +
        </button>
      </div>
    </div>
  );
}
