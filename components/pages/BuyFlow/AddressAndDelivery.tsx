"use client";
import AddAddressForm from "@/components/general/AddAddressForm";
import AddressCard from "@/components/general/AddressCard";
import AddAddressIcon from "@/components/Icons/AddAddressIcon";
import { useState } from "react";

export default function AddressAndDelivery() {
  const [showAddressesForm, setShowAddressesForm] = useState(false);
  const [activeAddress, settActiveAddress] = useState("");
  return (
    <>
      <div>
        <h2 className="lg:text-[32px] text-[20px] font-[600]">
          العنوان والتسليم
        </h2>
        <div className="flex flex-col gap-[24px] mt-[24px]">
          <div
            className={`${
              activeAddress === "1" && "border border-primary rounded-[40px]"
            }`}
          >
            <AddressCard
              id={"1"}
              name={"المنزل"}
              fullName={"ابانوب عادل"}
              address={"هذا النص هو مثال لنص يمكن "}
              phone={"01210372819"}
              onClick={() => {
                settActiveAddress("1");
              }}
            />
          </div>
          <div
            className={`${
              activeAddress === "2" && "border border-primary rounded-[40px]"
            }`}
          >
            <AddressCard
              id={"2"}
              name={"المنزل"}
              fullName={"ابانوب عادل"}
              address={"هذا النص هو مثال لنص يمكن "}
              phone={"01210372819"}
              onClick={() => {
                settActiveAddress("2");
              }}
            />
          </div>
          <button
            onClick={() => setShowAddressesForm(true)}
            className="p-[32px] bg-white rounded-[40px] border-[2px] border-[#D0D5DD] flex items-center gap-[15px]"
          >
            <AddAddressIcon />
            <h4 className="lg:text-[24px] font-[500] text-[18px]">
              اضف عنوان جديد
            </h4>
          </button>
        </div>
      </div>
      <AddAddressForm
        showForm={showAddressesForm}
        setShowForm={setShowAddressesForm}
      />
    </>
  );
}
