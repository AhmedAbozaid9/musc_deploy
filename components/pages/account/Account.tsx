import { OrderTypes } from "@/apiRequests/orders/getOrders";
import ArrowLeft from "@/components/Icons/account/ArrowLeft";
import AddressCard from "@/components/pages/account/AddressCard";
import BillsAndPayments from "@/components/pages/account/BillsAndPayments";
import Orders from "@/components/pages/account/Orders";
import React from "react";

interface AccountProps {
  orders: OrderTypes[];
  slug: string;
  setSlug: React.Dispatch<React.SetStateAction<string>>;
}

const Account = ({ orders, slug, setSlug }: AccountProps) => {
  return (
    <div>
      <Orders orders={orders} slug={slug} setSlug={setSlug} />
      <div className="my-7" />
      <div className="flex gap-7">
        <BillsAndPayments slug={slug} setSlug={setSlug} />
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold mb-4">العناوين</h3>
            <button
              onClick={() => setSlug("addresses")}
              className="text-[#A9A9A9] flex items-center gap-2"
            >
              كل العناوين
              <ArrowLeft />
            </button>
          </div>
          <AddressCard
            id={"1"}
            name={"ahmed"}
            fullName={"nyaa"}
            address={"adfsfd"}
            phone={"123"}
            onClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default Account;
