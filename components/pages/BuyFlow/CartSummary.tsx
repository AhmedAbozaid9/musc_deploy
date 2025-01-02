import { CartTypes } from "@/apiRequests/cart/getCart";
import CouponCode from "@/components/general/CouponCode";
import WhiteArrow from "@/components/Icons/WhiteArrow";
import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

interface CartSummaryProps {
  cart: CartTypes;
  handleStepChange: (step: string) => void;
}

export default function CartSummary({
  cart,
  handleStepChange,
}: CartSummaryProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  return (
    <>
      <div className="px-[16px] py-[32px] border border-[#DEDEDE] bg-[#FAFAFA] rounded-[32px]">
        <h2 className="text-black font-[500] text-[24px] mb-[24px]">
          ملخص الطلبيه
        </h2>
        <CouponCode />
        <div className="my-[48px]">
          <div className="flex justify-between items-center mb-[24px]">
            <p className="text-[#787878] text-[20px] font-[300]">
              المجموع الفرعي
            </p>
            <p className="text-[#1E1E1E] text-[24px] font-[500]">
              {cart.totalPrice} جم
            </p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-[#787878] text-[20px] font-[300]">رسوم الشحن</p>
            <p className="text-[#1E1E1E] text-[24px] font-[500]">
              {cart.shippingPrice} جم
            </p>
          </div>
        </div>
        <Button
          onClick={() => handleStepChange("2")}
          className="bg-primary text-secondary w-full lg:mt-[80px] mt-[40px]"
        >
          إتمام الشراء
          <WhiteArrow />
        </Button>
      </div>
    </>
  );
}
