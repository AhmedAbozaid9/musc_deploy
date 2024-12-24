import React, { useState } from "react";
import ChangePasswordForm from "@/components/pages/account/ChangePasswordForm";
import ChangeAccountForm from "@/components/pages/account/ChangeAccountForm";

const Settings = () => {
  const [tab, setTab] = useState("account");

  return (
    <div>
      <div className="flex w-full border-b-2  border-[#CDCDCD] gap-7">
        <button
          onClick={() => setTab("account")}
          className={`relative top-0.5 pb-3 ${tab === "account" ? "text-black border-b-2 border-black" : "text-[#787878]"}`}
        >
          معلومات الحساب
        </button>
        <button
          className={`relative top-0.5 pb-3 ${tab === "change_password" ? "text-black border-b-2 border-black" : "text-[#787878]"}`}
          onClick={() => setTab("change_password")}
        >
          تغيير كلمة المرور{" "}
        </button>
      </div>
      <div>
        {tab === "change_password" ? (
          <ChangePasswordForm />
        ) : (
          <ChangeAccountForm />
        )}
      </div>
    </div>
  );
};

export default Settings;
