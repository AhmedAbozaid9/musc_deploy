import { AddressTypes } from "@/apiRequests/address/getAddresses";
import AddAddressForm from "@/components/general/AddAddressForm";
import AddNewAddress from "@/components/Icons/account/AddNewAddress";
import AddressCard from "@/components/pages/account/AddressCard";
import React, { useState } from "react";

interface AddressesProps {
  addresses?: AddressTypes[];
  refetch: () => void;
}

const Addresses = ({ addresses, refetch }: AddressesProps) => {
  const [showAddForm, setShowAddForm] = useState(false);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
      {addresses &&
        addresses.length > 0 &&
        addresses.map((address) => (
          <AddressCard
            key={address._id}
            id={address._id}
            name={address.fullName}
            fullName={address.fullName}
            address={address.detailedAddress}
            phone={address.phoneNumber}
            refetch={refetch}
          />
        ))}

      <button
        onClick={() => setShowAddForm(true)}
        className="text-2xl flex items-center  text-[#1E1E1E] font-medium px-[32px] py-[80px] bg-white rounded-[40px] max-w-[350px] border-2 border-[#808E98]"
      >
        <AddNewAddress />
        اضف عنوان جديد
      </button>
      <AddAddressForm
        showForm={showAddForm}
        setShowForm={setShowAddForm}
        refetch={refetch}
      />
    </div>
  );
};

export default Addresses;
