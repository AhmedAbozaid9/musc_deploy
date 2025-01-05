"use client";
import { getAddresses } from "@/apiRequests/address/getAddresses";
import AddAddressForm from "@/components/general/AddAddressForm";
import AddressCard from "@/components/general/AddressCard";
import AddAddressIcon from "@/components/Icons/AddAddressIcon";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function AddressAndDelivery() {
  const [showAddressesForm, setShowAddressesForm] = useState(false);
  const [activeAddress, settActiveAddress] = useState("");

  const { data: addresses, refetch } = useQuery({
    queryKey: ["addresses"],
    queryFn: getAddresses,
  });
  return (
    <>
      <div>
        <h2 className="lg:text-[32px] text-[20px] font-[600]">
          العنوان والتسليم
        </h2>
        <div className="flex flex-col gap-[24px] mt-[24px]">
          {addresses?.map((address) => (
            <div
              key={address._id}
              className={`${
                activeAddress === address._id &&
                "border border-primary rounded-[40px]"
              }`}
            >
              <AddressCard
                refetch={refetch}
                id={address._id}
                name={address.detailedAddress}
                fullName={address.fullName}
                address={address.detailedAddress}
                phone={address.phoneNumber}
                onClick={() => {
                  settActiveAddress(address._id);
                }}
              />
            </div>
          ))}

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
        refetch={refetch}
      />
    </>
  );
}
