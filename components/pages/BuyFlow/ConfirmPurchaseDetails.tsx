import WhiteArrow from "@/components/Icons/WhiteArrow";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const ConfirmPurchaseDetails = () => {
  return (
    <div className="mt-6 flex gap-6 max-sm:flex-col">
      {/*order summary*/}
      <div className="w-full bg-white rounded-[32px] p-6">
        <div className="flex items-center justify-between  ">
          <h4 className="text-black text-[24px] font-semibold mb-6">
            ملخص الطلب
          </h4>
        </div>
        <div className=" ">
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
                  <h4 className="text-black text-[18px]">ليدات زينه واضاءه</h4>
                  <h4 className="text-black">3000 جم</h4>
                  <p className="text-black text-[14px] font-[400]">
                    الكميه : 1
                  </p>
                </div>
              </div>
            </div>
            <hr />
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
                  <h4 className="text-black text-[18px]">ليدات زينه واضاءه</h4>
                  <h4 className="text-black">3000 جم</h4>
                  <p className="text-black text-[14px] font-[400]">
                    الكميه : 1
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*shipment summary*/}
      <div className="w-full bg-white rounded-[32px] p-6 flex flex-col gap-4">
        <h2 className="font-semibold text-2xl ">معلومات التوصيل</h2>
        <p className="font-semibold text-lg">العنوان</p>
        <div>
          <p className="font-semibold text-lg">المنزل</p>
          <p className="text-secondaryText">هذا النص هو مثال لنص يمكن </p>
        </div>
        <div>
          <p className="font-semibold text-lg">محمد امين</p>
          <p className="text-secondaryText">+20 1210372819</p>
        </div>
        <span className="bg-[#4D9254] text-white self-start p-4 rounded-lg mt-4">
          التاريخ المتوقع للتسليم: 12 أكتوبر 2024
        </span>
      </div>
    </div>
  );
};

export default ConfirmPurchaseDetails;
