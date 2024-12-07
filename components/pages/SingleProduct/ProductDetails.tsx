"use client";
import FireIcon from "@/components/Icons/FireIcon";
import HeartFavorite from "@/components/Icons/HeartFavorite";
import ShareIcon from "@/components/Icons/ShareIcon";
import StockIcon from "@/components/Icons/StockIcon";
import toast from "react-hot-toast";
import ProductActions from "./ProductActions";

export default function ProductDetails() {
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
            <h2 className="text-[#333] text-[24px]">ليدات زينه واضاءه</h2>
          </div>
          <div className="flex items-center gap-[24px]">
            <button
              className="p-[12px] rounded-[8px] border border-[#EDEDED]"
              onClick={handleCopy}
            >
              <ShareIcon />
            </button>
            <button>
              <HeartFavorite />
            </button>
          </div>
        </div>
        <div className="flex items-center gap-[8px]">
          <div className="flex items-center gap-[8px]">
            <StockIcon />
            <p>
              المتبقى <span className="text-[#62D0B6]">16</span> وحدة
            </p>
          </div>
          <div className="w-[1px] h-[13px] bg-[#EEE]" />
          <div className="flex items-center gap-[8px]">
            <FireIcon />
            <p>
              تم شراءه
              <span className="text-[#62D0B6]"> 250 </span>مرة
            </p>
          </div>
        </div>
        <p className="text-[#787878] text-[16px]">
          هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
          النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من
          النصوص الأخرى
        </p>
        <ProductActions />
      </div>
    </>
  );
}
