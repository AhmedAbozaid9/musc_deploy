import { AddressTypes } from "@/apiRequests/address/getAddresses";
import { OrderTypes } from "@/apiRequests/orders/getOrders";
import ArrowLeft from "@/components/Icons/account/ArrowLeft";
import AddressCard from "@/components/pages/account/AddressCard";
import BillsAndPayments from "@/components/pages/account/BillsAndPayments";
import Orders from "@/components/pages/account/Orders";
import React from "react";

interface AccountProps {
  orders: OrderTypes[];
  addresses: AddressTypes[];
  slug: string;
  setSlug: React.Dispatch<React.SetStateAction<string>>;
}

const Account = ({ orders, addresses, slug, setSlug }: AccountProps) => {
  return (
    <div>
      <div className="my-7" />
      <div className="gap-7">
        <Orders orders={orders} slug={slug} setSlug={setSlug} />

        <div>
          <div className="flex items-center justify-between mt-7">
            <h3 className="text-xl font-semibold mb-4">العناوين</h3>
            <button
              onClick={() => setSlug("addresses")}
              className="text-[#A9A9A9] flex items-center gap-2"
            >
              كل العناوين
              <ArrowLeft />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
            {addresses.map((address) => (
              <AddressCard
                key={address._id}
                id={address._id}
                name={address.fullName}
                fullName={address.fullName}
                address={address.detailedAddress}
                phone={address.phoneNumber}
                onClick={() => {}}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
