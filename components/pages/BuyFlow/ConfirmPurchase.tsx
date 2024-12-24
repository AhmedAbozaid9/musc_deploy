import CartConfirm from "@/components/Icons/CartConfirm";
import React from "react";

const ConfirmPurchase = () => {
  return (
    <div>
      <div className="flex  items-center justify-center bg-white rounded-[32px] px-4 py-12 gap-4 ">
        <CartConfirm />
        <div>
          <h2 className="text-[32px] sm:text-[48px] font-semibold ">
            تم استلام طلبك بنجاح
          </h2>
          <p className="text-lg text-[#888888]">شكرًا لتسوقك من musc</p>
        </div>
      </div>
      <div className="mt-6 flex  items-center justify-around max-sm:flex-col gap-5  bg-white rounded-[32px] px-4 py-12 ">
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="sm:text-lg text-[#515151]">طريقة الدفع</p>
          <span className="text-lg sm:text-2xl font-semibold">تحويل بنكي</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="sm:text-lg text-[#515151]"> الاجمالي</p>
          <span className="text-lg sm:text-2xl font-semibold"> 6000 جم </span>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="sm:text-lg text-[#515151]"> التاريخ</p>
          <span className="text-lg sm:text-2xl font-semibold"> 11/29/2024</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="sm:text-lg text-[#515151]"> رقم الاوردر</p>
          <span className="text-lg sm:text-2xl font-semibold"> 100100</span>
        </div>
      </div>
    </div>
  );
};

export default ConfirmPurchase;
