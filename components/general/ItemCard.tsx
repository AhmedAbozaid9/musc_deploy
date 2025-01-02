import Image from "next/image";
import DeleteItemCart from "../Icons/DeleteItemCart";

export interface ItemCartType {
  id: string;
  image: string;
  title: string;
  price: number;
  category: string;
  count: number;
  onCountChange: (newCount: number) => void;
  handleDeleteItem: (id: string) => Promise<void>;
}
const ItemCard: React.FC<ItemCartType> = ({
  id,
  image,
  title,
  price,
  category,
  count,
  onCountChange,
  handleDeleteItem,
}) => {
  const onPlus = () => {
    if (count < 10) {
      onCountChange(count + 1);
    }
  };

  const onMinus = () => {
    if (count > 1) {
      onCountChange(count - 1);
    }
  };
  return (
    <>
      <div className="py-[32px] px-[24px] flex lg:items-center items-start gap-[22px]  rounded-[32px] bg-[#fff]">
        <Image
          src={image}
          alt={title}
          width={150}
          height={150}
          className="rounded-[16px] lg:w-[150px] w-[50px] lg:h-[150px] h-[50px]"
        />
        <div className="flex lg:items-center items-start justify-between w-full flex-col lg:flex-row gap-[16px]">
          <div className="flex flex-col gap-[8px]">
            <p className="text-[#787878] lg:text-[18px] text-[16px] font-[400]">
              {category}
            </p>
            <h2 className="text-[#333] lg:text-[24px] text-[18px] font-[400]">
              {title}
            </h2>
          </div>
          <div className="flex flex-col gap-[8px]">
            <p className="text-[#333] lg:text-[32px] text-[24px] font-[400]">
              {price} جم
            </p>
            <div className="flex item-center gap-[16px] lg:flex-col">
              <div className="flex items-center gap-[16px]">
                <div className="flex w-[150px] justify-between items-center border border-[#D4D4D4] rounded-[15px] gap-[16px] p-[2px]">
                  <button
                    onClick={onMinus}
                    className="bg-[#F7F7F7] py-[8px] px-[18px] rounded-r-[15px]"
                  >
                    -
                  </button>
                  <h4 className="text-[18px] text-[#1D1B1B] font-[600]">
                    {count}
                  </h4>
                  <button
                    onClick={onPlus}
                    className="bg-[#F7F7F7] py-[8px] px-[18px] rounded-l-[15px]"
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                onClick={() => handleDeleteItem(id)}
                className="flex gap-[8px] mx-auto mt-[18px] text-[#F80022] text-[16px]"
              >
                <DeleteItemCart />
                ازاله
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ItemCard;
