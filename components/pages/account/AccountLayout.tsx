import Brudcambs from "@/components/general/Brudcambs";

import User from "@/components/Icons/account/User";
import { sidebarContent } from "@/constants/sidebarContent";
import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  slug: string;
  setSlug: React.Dispatch<React.SetStateAction<string>>;
}
const AccountLayout = ({ children, slug, setSlug }: LayoutProps) => {
  return (
    <div className="container">
      <Brudcambs name="حسابي " />
      <div className="flex max-sm:flex-col gap-6">
        <div className="flex flex-col gap-6 lg:w-1/3">
          <div className="flex items-center gap-3 bg-black text-white p-7 rounded-[32px]">
            <User />
            <div>
              <p className="text-lg">محمد امين</p>
              <p>01210372819</p>
            </div>
          </div>
          {sidebarContent.map((item) => (
            <button
              onClick={() => setSlug(item.slug)}
              key={item.slug}
              className={`flex items-center gap-3 px-5 py-3 ${slug === item.slug && "bg-white border border-black rounded-l-full border-r-8"}`}
            >
              {item.icon}
              <p
                className={`${slug === item.slug ? "text-black" : "text-secondaryText"} `}
              >
                {item.title}
              </p>
            </button>
          ))}
        </div>
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
};

export default AccountLayout;
