import WhiteArrow from "@/components/Icons/WhiteArrow";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { CartTypes } from "@/apiRequests/cart/getCart";
import { useQuery } from "@tanstack/react-query";
import { getSingleAddress } from "@/apiRequests/address/getSingleAddress";

interface IProps {
  cart: CartTypes;
  selectedAddress: string;
}

const ConfirmPurchaseDetails = ({ cart, selectedAddress }: IProps) => {
  const dateFormatter = new Intl.DateTimeFormat("ar-EG", { dateStyle: "long" });
  const fiveDaysFromNow = new Date();
  fiveDaysFromNow.setDate(fiveDaysFromNow.getDate() + 5);

  const formattedDate = dateFormatter.format(fiveDaysFromNow);

  const { data: address } = useQuery({
    queryKey: ["address", selectedAddress],
    queryFn: () => getSingleAddress(selectedAddress),
  });
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
            {cart.cartItems.map((item, idx) => (
              <>
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
                      <h4 className="text-black">{item.price} جم</h4>
                      <p className="text-black text-[14px] font-[400]">
                        الكميه : {item.quantity}
                      </p>
                    </div>
                  </div>
                </div>
                {idx < cart.cartItems.length - 1 && <hr />}
              </>
            ))}
          </div>
        </div>
      </div>
      {/*shipment summary*/}
      <div className="w-full bg-white rounded-[32px] p-6 flex flex-col gap-4">
        <p className="font-semibold text-lg">العنوان</p>
        <div>
          <p className="font-semibold text-lg">{address?.addressTitle}</p>
          <p className="text-secondaryText"> {address?.detailedAddress} </p>
        </div>
        <div>
          <p className="font-semibold text-lg">{address?.fullName} </p>
          <p className="text-secondaryText">{address?.phoneNumber}</p>
        </div>
        <span className="bg-[#4D9254] text-white self-start p-4 rounded-lg mt-4">
          التاريخ المتوقع للتسليم: {formattedDate}
        </span>
      </div>
    </div>
  );
};

export default ConfirmPurchaseDetails;
