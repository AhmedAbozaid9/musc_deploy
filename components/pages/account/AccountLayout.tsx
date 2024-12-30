"ude client";
import Brudcambs from "@/components/general/Brudcambs";
import Loading from "@/components/general/Loading";
import Logout from "@/components/Icons/account/Logout";

import User from "@/components/Icons/account/User";
import { sidebarContent } from "@/constants/sidebarContent";
import { useAuthStore } from "@/store/useAuthStore";
import { useRouter } from "next/navigation";
import React, { ReactNode, useEffect, useState } from "react";

interface LayoutProps {
  children: ReactNode;
  slug: string;
  setSlug: React.Dispatch<React.SetStateAction<string>>;
  handleLogout: () => void;
}
const AccountLayout = ({
  children,
  slug,
  setSlug,
  handleLogout,
}: LayoutProps) => {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  const user = useAuthStore((state) => state.user);
  const setUser = useAuthStore((state) => state.setUser);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <Loading />;
  }

  return (
    <div className="container">
      <Brudcambs name="حسابي " />
      <div className="flex max-sm:flex-col gap-6">
        <div className="flex flex-col gap-6 lg:w-1/3">
          <div className="flex items-center gap-3 bg-black text-white p-7 rounded-[32px]">
            <User />
            {user && (
              <div>
                <p className="text-lg"> {user.username}</p>
                <p>{user.phoneNumber}</p>
              </div>
            )}
          </div>
          {sidebarContent.map((item) => (
            <button
              onClick={() => setSlug(item.slug)}
              key={item.slug}
              className={`flex items-center gap-3 px-5 py-3 ${
                slug === item.slug &&
                "bg-white border border-black rounded-l-full border-r-8"
              }`}
            >
              {item.icon}
              <p
                className={`${
                  slug === item.slug ? "text-black" : "text-secondaryText"
                } `}
              >
                {item.title}
              </p>
            </button>
          ))}
          <button
            onClick={handleLogout}
            className="text-[#EE2D47] border-2 border-[#EE2D47] py-4 px-8 rounded-md flex gap-3 items-center"
          >
            <Logout />
            تسجيل الخروج
          </button>
        </div>
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
};

export default AccountLayout;
