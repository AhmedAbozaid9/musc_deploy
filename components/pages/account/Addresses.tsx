import AddNewAddress from "@/components/Icons/account/AddNewAddress";
import AddressCard from "@/components/pages/account/AddressCard";
import React from "react";

const Addresses = () => {
  return (
    <div className="flex gap-6 flex-wrap">
      <AddressCard
        id={"1"}
        name={"ahmed"}
        fullName={"nyaa"}
        address={"adfsfd"}
        phone={"123"}
        onClick={() => {}}
      />
      <AddressCard
        id={"1"}
        name={"ahmed"}
        fullName={"nyaa"}
        address={"adfsfd"}
        phone={"123"}
        onClick={() => {}}
      />
      <button className="text-2xl flex items-center gap-4 text-[#1E1E1E] font-medium px-[32px] py-[80px] bg-white rounded-[40px] w-[350px] border-2 border-[#808E98]">
        <AddNewAddress />
        اضف عنوان جديد
      </button>
    </div>
  );
};

export default Addresses;
