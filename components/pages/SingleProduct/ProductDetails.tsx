"use client";
import FireIcon from "@/components/Icons/FireIcon";
import HeartFavorite from "@/components/Icons/HeartFavorite";
import ShareIcon from "@/components/Icons/ShareIcon";
import StockIcon from "@/components/Icons/StockIcon";
import { ProductType } from "@/types/ProductType";
import toast from "react-hot-toast";
import { set } from "zod";
import ColorPicker from "./ColorPicker";
import ProductActions from "./ProductActions";

interface ProductDetailsProps {
  product: ProductType;
  handleAddToCart: () => Promise<void>;
  handleAddToWishlist: () => Promise<void>;
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
}

export default function ProductDetails({
  product,
  handleAddToCart,
  handleAddToWishlist,
  quantity,
  setQuantity,
  color,
  setColor,
}: ProductDetailsProps) {
  const handleCopy = () => {
    const urlToCopy = window.location.href;
    navigator.clipboard
      .writeText(urlToCopy)
      .then(() => {
        toast.success("تم نسخ الرابط ");
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };
  return (
    <>
      <div className="flex flex-col gap-[16px]">
        <div className="flex justify-between lg:items-center items-start gap-[24px] flex-col lg:flex-row">
          <div>
            <p className="text-[#787878] text-[18px] font-[400]">ليدات زينه</p>
            <h2 className="text-[#333] text-[24px]">{product.title} </h2>
          </div>
          <div className="flex items-center gap-[24px]">
            <button
              className="p-[12px] rounded-[8px] border border-[#EDEDED]"
              onClick={handleCopy}
            >
              <ShareIcon />
            </button>
            <button onClick={handleAddToWishlist}>
              <HeartFavorite />
            </button>
          </div>
        </div>
        <div className="flex items-center gap-[8px]">
          <div className="flex items-center gap-[8px]">
            <StockIcon />
            <p>
              المتبقى <span className="text-[#62D0B6]">{product.quantity}</span>{" "}
              وحدة
            </p>
          </div>
          <div className="w-[1px] h-[13px] bg-[#EEE]" />
          <div className="flex items-center gap-[8px]">
            <FireIcon />
            <p>
              تم شراءه
              <span className="text-[#62D0B6]"> {product.sold} </span>مرة
            </p>
          </div>
        </div>
        <p className="text-[#787878] text-[16px]">{product.description}</p>
        <ColorPicker
          color={color}
          setColor={setColor}
          colors={product.colors}
        />
        <ProductActions
          quantity={quantity}
          setQuantity={setQuantity}
          maxQuantity={product.quantity}
          price={product.priceAfterDiscount}
          handleAddToCart={handleAddToCart}
        />
      </div>
    </>
  );
}
