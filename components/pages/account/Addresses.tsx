import AddNewAddress from "@/components/Icons/account/AddNewAddress";
import AddressCard from "@/components/pages/account/AddressCard";
import React from "react";

const Addresses = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
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
      <button className="text-2xl flex items-center  text-[#1E1E1E] font-medium px-[32px] py-[80px] bg-white rounded-[40px] max-w-[350px] border-2 border-[#808E98]">
        <AddNewAddress />
        اضف عنوان جديد
      </button>
    </div>
  );
};

export default Addresses;
