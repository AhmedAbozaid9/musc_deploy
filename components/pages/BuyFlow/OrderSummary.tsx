"use client";
import { CartTypes } from "@/apiRequests/cart/getCart";
import WhiteArrow from "@/components/Icons/WhiteArrow";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface OrderSummaryProps {
  handleCheckout: () => Promise<string | undefined>;
  cart: CartTypes;
}

export default function OrderSummary({
  handleCheckout,
  cart,
}: OrderSummaryProps) {
  return (
    <>
      <div className="flex items-center justify-between">
        <h4 className="text-black text-[20px]">ملخص الطلب</h4>
        <span className="text-[18px] text-[#787878]">
          {cart.cartItems.length === 1
            ? `${cart.cartItems.length} عنصر`
            : `${cart.cartItems.length} عناصر`}
        </span>
      </div>
      <div className="bg-white lg:p-[32px] p-[16px] rounded-[32px] mt-[32px]">
        <div className="flex flex-col gap-[18px]">
          {cart.cartItems.length > 0 &&
            cart.cartItems.map((item) => (
              <div className="flex items-end justify-between">
                <div className="flex items-center gap-[16px]">
                  <Image
                    src={item.imageCover}
                    alt="Product"
                    width={90}
                    height={90}
                    className="w-[90px] h-[90px] rounded-[17px]"
                  />
                  <div className="flex flex-col gap-[8px]">
                    <h4 className="text-black text-[18px]">{item.title}</h4>
                    <p className="text-black text-[14px] font-[400]">
                      الكميه : {item.quantity}
                    </p>
                  </div>
                </div>
                <h4 className="text-black">{item.price} ر.س</h4>
              </div>
            ))}
        </div>
        <div className="my-[24px] bg-[#DFDFDF] h-[1px] w-full"></div>
        <div className="flex flex-col gap-[13px]">
          <div className="flex items-center justify-between gap-[8px]">
            <h3 className="text-black text-[16px] font-[400]">
              المجموع الفرعي
            </h3>
            <p className="text-black text-[16px] font-[400]">
              {cart.totalPrice} ر.سس
            </p>
          </div>
          <div className="flex items-center justify-between gap-[8px]">
            <h3 className="text-black text-[16px] font-[400]">خدمه التركيب</h3>
            <p className="text-black text-[16px] font-[400]">50 ر.س</p>
          </div>
          <div className="flex items-center justify-between gap-[8px]">
            <h3 className="text-black text-[16px] font-[400]">الشحن</h3>
            <p className="text-black text-[16px] font-[400]">
              {cart.shippingPrice} ر.س
            </p>
          </div>
          <div className="flex items-center justify-between gap-[8px]">
            <h3 className="text-black text-[16px] font-[400]">كود خصم</h3>
            <p className="text-[#08B41A] text-[16px] font-[400]">
              -{cart.totalPrice * (cart.discount / 100)} ر.س
            </p>
          </div>
          <div className="bg-[#FAFAFA] rounded-[13px] py-[10px] px-[20px] flex items-center justify-between">
            {cart.appliedCoupon && (
              <h4 className="text-[15px] text-[#1E1E1E] font-[400]">
                {cart.appliedCoupon}
              </h4>
            )}
            {/* <button className="text-[#C10000] font-[400] text-[14px]">
              ازاله
            </button> */}
          </div>
          <div className="my-[24px] bg-[#DFDFDF] h-[1px] w-full"></div>
          <div className="flex justify-between items-center gap-[14px]">
            <h4 className="text-black font-[400] lg:text-[24px] text-[18px]">
              المجموع
            </h4>
            <h4 className="text-black font-[400] lg:text-[24px] text-[18px]">
              {cart.totalPriceAfterDiscount} ر.س
            </h4>
          </div>

          <Button
            onClick={handleCheckout}
            className="bg-primary text-secondary w-full lg:mt-[80px] mt-[40px]"
          >
            الحفظ و الاستمرار <WhiteArrow />
          </Button>
        </div>
      </div>
    </>
  );
}
