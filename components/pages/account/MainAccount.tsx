"use client";
import AccountLayout from "@/components/pages/account/AccountLayout";
import React, { useState } from "react";

const MainAccount = () => {
  const [slug, setSlug] = useState("account");
  return (
    <div>
      <AccountLayout slug={slug} setSlug={setSlug}>
        hello world
      </AccountLayout>
    </div>
  );
};

export default MainAccount;
