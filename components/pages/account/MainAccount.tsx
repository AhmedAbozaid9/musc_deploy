"use client";
import ArrowLeft from "@/components/Icons/account/ArrowLeft";
import Account from "@/components/pages/account/Account";
import AccountLayout from "@/components/pages/account/AccountLayout";
import AddressCard from "@/components/pages/account/AddressCard";
import Addresses from "@/components/pages/account/Addresses";
import BillsAndPayments from "@/components/pages/account/BillsAndPayments";
import Favorites from "@/components/pages/account/Favorites";
import Orders from "@/components/pages/account/Orders";
import Settings from "@/components/pages/account/Settings";
import { sidebarContent } from "@/constants/sidebarContent";
import { useAuthStore } from "@/store/useAuthStore";
import React, { useState } from "react";

const MainAccount = () => {
  const setUser = useAuthStore((state) => state.setUser);
  const [slug, setSlug] = useState("account");
  const title = sidebarContent.filter((item) => item.slug === slug)[0].title;

  const handleLogout = () => {
    localStorage.removeItem("musc-token");
    setUser(null);
    window.location.href = "/";
  };

  return (
    <div>
      <AccountLayout slug={slug} setSlug={setSlug} handleLogout={handleLogout}>
        <h2 className="font-semibold text-lg sm:text-2xl mb-3">{title}</h2>
        <hr />
        <div className="mt-6">
          {slug === "account" && <Account slug={slug} setSlug={setSlug} />}
          {slug === "orders" && <Orders />}
          {slug === "bills" && <BillsAndPayments />}
          {slug === "addresses" && <Addresses />}
          {slug === "favorites" && <Favorites />}
          {slug === "settings" && <Settings />}
        </div>
      </AccountLayout>
    </div>
  );
};

export default MainAccount;
