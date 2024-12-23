"use client";
import AccountLayout from "@/components/pages/account/AccountLayout";
import Addresses from "@/components/pages/account/Addresses";
import BillsAndPayments from "@/components/pages/account/BillsAndPayments";
import Orders from "@/components/pages/account/Orders";
import { sidebarContent } from "@/constants/sidebarContent";
import React, { useState } from "react";

const MainAccount = () => {
  const [slug, setSlug] = useState("account");
  const title = sidebarContent.filter((item) => item.slug === slug)[0].title;
  return (
    <div>
      <AccountLayout slug={slug} setSlug={setSlug}>
        <h2 className="font-semibold text-lg sm:text-2xl mb-3">{title}</h2>
        <hr />
        <div className="mt-6">
          {slug === "account" && (
            <>
              <Orders slug={slug} setSlug={setSlug} />
              <div className="my-4" />
              <BillsAndPayments slug={slug} setSlug={setSlug} />
            </>
          )}
          {slug === "orders" && <Orders />}
          {slug === "bills" && <BillsAndPayments />}
          {slug === "addresses" && <Addresses />}
        </div>
      </AccountLayout>
    </div>
  );
};

export default MainAccount;
