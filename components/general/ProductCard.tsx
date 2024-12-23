import Link from "next/link";
import CartButton from "../Icons/CartButton";
import Whishlist from "../Icons/Whishlist";
import { Button } from "../ui/button";
interface ProductType {
  id: string;
  offer?: number | null;
  image: string;
  category: string;
  name: string;
  price: string;
  link: string;
  isInFavorites?: boolean;
}
const ProductCard: React.FC<ProductType> = ({
  id,
  offer,
  image,
  category,
  name,
  price,
  link,
  isInFavorites,
}) => {
  return (
    <>
      <div className="flex flex-col gap-[24px]">
        <div
          className="rounded-[32px] h-[430px] min-w-[430px] px-[32px] py-[20px] flex flex-col justify-between group"
          style={{ background: `url(${image})`, backgroundSize: "cover" }}
        >
          <div className="flex justify-between items-center">
            <div>
              {offer && (
                <div
                  className={`p-[18px] bg-secondary text-primary rounded-[77px] `}
                >
                  وفر {offer}%
                </div>
              )}
            </div>
            {!isInFavorites && (
              <button className="bg-[#ffffff4c] rounded-full p-2">
                <Whishlist />
              </button>
            )}
          </div>
          <Button className="w-full transition-all lg:opacity-0 group-hover:opacity-[1]">
            اشتري الان
            <CartButton />
          </Button>
        </div>
        <div className="flex items-center justify-between gap-[16px] px-[12px]">
          <div className="flex flex-col gap-[12px]">
            <p className="text-[#787878] text-[16px]">{category}</p>
            <Link
              className="text-primary lg:text-[20px] text-[18px]"
              href={link}
            >
              {name}{" "}
            </Link>
          </div>
          <h3 className="text-primary lg:text-[28px] text-[20px] font-[600]">
            {price} جنيه{" "}
          </h3>
        </div>
      </div>
    </>
  );
};
export default ProductCard;
