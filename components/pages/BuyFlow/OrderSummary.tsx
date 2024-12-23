"use client";
import WhiteArrow from "@/components/Icons/WhiteArrow";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface OrderSummaryProps {
  handleStepChange: (step: string) => void;
}

export default function OrderSummary({ handleStepChange }: OrderSummaryProps) {
  return (
    <>
      <div className="flex items-center justify-between">
        <h4 className="text-black text-[20px]">ملخص الطلب</h4>
        <span className="text-[18px] text-[#787878]">2 عناصر</span>
      </div>
      <div className="bg-white lg:p-[32px] p-[16px] rounded-[32px] mt-[32px]">
        <div className="flex flex-col gap-[18px]">
          <div className="flex items-end justify-between">
            <div className="flex items-center gap-[16px]">
              <Image
                src="/pr.webp"
                alt="Product"
                width={90}
                height={90}
                className="w-[90px] h-[90px] rounded-[17px]"
              />
              <div className="flex flex-col gap-[8px]">
                <p className="text-[#787878] text-[12px]">ليدات زينه</p>
                <h4 className="text-black text-[18px]">ليدات زينه واضاءه</h4>
                <p className="text-black text-[14px] font-[400]">الكميه : 1</p>
              </div>
            </div>
            <h4 className="text-black">3000 جم</h4>
          </div>
          <div className="flex items-end justify-between">
            <div className="flex items-center gap-[16px]">
              <Image
                src="/pr.webp"
                alt="Product"
                width={90}
                height={90}
                className="w-[90px] h-[90px] rounded-[17px]"
              />
              <div className="flex flex-col gap-[8px]">
                <p className="text-[#787878] text-[12px]">ليدات زينه</p>
                <h4 className="text-black text-[18px]">ليدات زينه واضاءه</h4>
                <p className="text-black text-[14px] font-[400]">الكميه : 1</p>
              </div>
            </div>
            <h4 className="text-black">3000 جم</h4>
          </div>
        </div>
        <div className="my-[24px] bg-[#DFDFDF] h-[1px] w-full"></div>
        <div className="flex flex-col gap-[13px]">
          <div className="flex items-center justify-between gap-[8px]">
            <h3 className="text-black text-[16px] font-[400]">
              المجموع الفرعي
            </h3>
            <p className="text-black text-[16px] font-[400]">6000 جم</p>
          </div>
          <div className="flex items-center justify-between gap-[8px]">
            <h3 className="text-black text-[16px] font-[400]">خدمه التركيب</h3>
            <p className="text-black text-[16px] font-[400]">50 جم</p>
          </div>
          <div className="flex items-center justify-between gap-[8px]">
            <h3 className="text-black text-[16px] font-[400]">الشحن</h3>
            <p className="text-black text-[16px] font-[400]">50 جم</p>
          </div>
          <div className="flex items-center justify-between gap-[8px]">
            <h3 className="text-black text-[16px] font-[400]">كود خصم</h3>
            <p className="text-[#08B41A] text-[16px] font-[400]">-100 جم</p>
          </div>
          <div className="bg-[#FAFAFA] rounded-[13px] py-[10px] px-[20px] flex items-center justify-between">
            <h4 className="text-[15px] text-[#1E1E1E] font-[400]">BN100</h4>
            <button className="text-[#C10000] font-[400] text-[14px]">
              ازاله
            </button>
          </div>
          <div className="my-[24px] bg-[#DFDFDF] h-[1px] w-full"></div>
          <div className="flex justify-between items-center gap-[14px]">
            <h4 className="text-black font-[400] lg:text-[24px] text-[18px]">
              المجموع
            </h4>
            <h4 className="text-black font-[400] lg:text-[24px] text-[18px]">
              6000 جم
            </h4>
          </div>

          <Button
            onClick={() => handleStepChange("3")}
            className="bg-primary text-secondary w-full lg:mt-[80px] mt-[40px]"
          >
            الحفظ و الاستمرار <WhiteArrow />
          </Button>
        </div>
      </div>
    </>
  );
}
