"use client";
import AccountLayout from "@/components/pages/account/AccountLayout";
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
      </AccountLayout>
    </div>
  );
};

export default MainAccount;
