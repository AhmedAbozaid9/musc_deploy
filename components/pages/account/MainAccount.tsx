"use client";
import { getAddresses } from "@/apiRequests/address/getAddresses";
import { getOrders } from "@/apiRequests/orders/getOrders";
import Loading from "@/components/general/Loading";
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
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

const MainAccount = () => {
  const setUser = useAuthStore((state) => state.setUser);
  const [slug, setSlug] = useState("account");
  const title = sidebarContent.filter((item) => item.slug === slug)[0].title;

  const { data: orders, isLoading: ordersLoading } = useQuery({
    queryKey: ["orders"],
    queryFn: getOrders,
  });
  const {
    data: addresses,
    isLoading: addressesLoading,
    refetch: refetchAddresses,
  } = useQuery({
    queryKey: ["addresses"],
    queryFn: getAddresses,
  });
  const handleLogout = () => {
    localStorage.removeItem("musc-token");
    setUser(null);
    window.location.href = "/";
  };
  if (ordersLoading || addressesLoading) {
    return <Loading />;
  }
  return (
    <div>
      <AccountLayout slug={slug} setSlug={setSlug} handleLogout={handleLogout}>
        <h2 className="font-semibold text-lg sm:text-2xl mb-3">{title}</h2>
        <hr />
        <div className="mt-6">
          {slug === "account" && addresses && orders && (
            <Account
              orders={orders}
              addresses={addresses}
              slug={slug}
              setSlug={setSlug}
              refetch={refetchAddresses}
            />
          )}
          {slug === "orders" && orders && <Orders orders={orders} />}
          {slug === "addresses" && addresses && (
            <Addresses refetch={refetchAddresses} addresses={addresses} />
          )}
          {slug === "favorites" && <Favorites />}
          {slug === "settings" && <Settings />}
        </div>
      </AccountLayout>
    </div>
  );
};

export default MainAccount;
