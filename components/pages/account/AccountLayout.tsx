import Brudcambs from "@/components/general/Brudcambs";
import Addresses from "@/components/Icons/account/Addresses";
import Bills from "@/components/Icons/account/Bills";
import Favorites from "@/components/Icons/account/Favorites";
import MyAccount from "@/components/Icons/account/MyAccount";
import Orders from "@/components/Icons/account/Orders";
import Settings from "@/components/Icons/account/Settings";
import React, { ReactNode } from "react";

const sidebarContent = [
  { slug: "account", title: "حسابي", icon: <MyAccount /> },
  { slug: "orders", title: "الطلبات", icon: <Orders /> },
  { slug: "addresses", title: "العناوين", icon: <Addresses /> },
  { slug: "bills", title: "الدفغ و الفواتير", icon: <Bills /> },
  { slug: "favorites", title: "المفضلة", icon: <Favorites /> },
  { slug: "settings", title: "الاعدادات", icon: <Settings /> },
];
interface LayoutProps {
  children: ReactNode;
  slug: string;
  setSlug: React.Dispatch<React.SetStateAction<string>>;
}
const AccountLayout = ({ children, slug, setSlug }: LayoutProps) => {
  return (
    <div className="container">
      <Brudcambs name="حسابي " />

      <div className="flex flex-col gap-6 lg:w-1/4">
        {sidebarContent.map((item) => (
          <button
            onClick={() => setSlug(item.slug)}
            key={item.slug}
            className={`flex items-center gap-3 px-5 py-3 ${slug === item.slug && "border border-black rounded-l-full border-r-8"}`}
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
      <div>{children}</div>
    </div>
  );
};

export default AccountLayout;
