"use client";
import { useSearchParams } from "next/navigation";

export default function CartHeader() {
  const searchParams = useSearchParams();
  const step = parseInt(searchParams.get("step") || "1", 10);
  return (
    <>
      <div className="grid grid-cols-3  border-b border-b-[#E4E4E4] ">
        <div className="flex items-start pb-[10px] gap-[12px] border-b-[2px] border-[#1E1E1E] ">
          <span className="text-[#1E1E1E] lg:text-[24px] text-[12px] font-[500]">
            01
          </span>
          <div>
            <h2 className="text-[#1E1E1E] lg:text-[24px] text-[16px] font-[500]">
              سله المشتريات
            </h2>
            <p className="text-[#787878] lg:text-[18px] text-[14px]">
              تحكم في المنتجات
            </p>
          </div>
        </div>
        <div
          className={`flex items-start pb-[10px] gap-[12px] ${
            step >= 2 && "border-b-[2px] border-[#1E1E1E]"
          }`}
        >
          <span
            className={` ${
              step >= 2 ? "text-[#1E1E1E]" : "text-[#767676]"
            } lg:text-[24px] text-[12px] font-[500]`}
          >
            02
          </span>
          <div>
            <h2
              className={` ${
                step >= 2 ? "text-[#1E1E1E]" : "text-[#767676]"
              } lg:text-[24px] text-[16px] font-[500]`}
            >
              العنوان والدفع
            </h2>
            <p className="text-[#787878] lg:text-[18px] text-[14px]">
              تحقق من قائمة العناصر الخاصة بك.
            </p>
          </div>
        </div>
        <div
          className={`flex items-start pb-[10px] gap-[12px] ${
            step === 3 && "border-b-[2px] border-[#1E1E1E]"
          }`}
        >
          <span
            className={` ${
              step === 3 ? "text-[#1E1E1E]" : "text-[#767676]"
            } lg:text-[24px] text-[12px] font-[500]`}
          >
            03
          </span>
          <div>
            <h2
              className={` ${
                step === 3 ? "text-[#1E1E1E]" : "text-[#767676]"
              } lg:text-[24px] text-[16px] font-[500]`}
            >
              تاكيد الطلب
            </h2>
            <p className="text-[#787878] lg:text-[18px] text-[14px]">
              قم بمراجعه وتاكيد الطلب
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
