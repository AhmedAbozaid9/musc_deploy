"use client";
import MainAuth from "@/components/pages/auth/MainAuth";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useSignup } from "@/context/ShowSignupContext";
import routes from "@/lib/routes";
import { HeaderLinks, HeaderType } from "@/store/Links";
import { useAuthStore } from "@/store/useAuthStore";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import CartIcon from "../Icons/CartIcon";
import Logo from "../Icons/Logo";
import SearchIcon from "../Icons/SearchIcon";
import UserIcon from "../Icons/UserIcon";
import { Button } from "../ui/button";
export default function Header() {
  const router = useRouter();
  const user = useAuthStore((state) => state.user);
  const { showSignup, setShowSignup } = useSignup();
  const path = usePathname();
  const [SideBar, setSidebar] = useState(false);
  const handleClose = () => {
    setSidebar(false);
  };
  return (
    <>
      <div className="container mt-[48px] mb-[26px]">
        <div className="bg-primary lg:px-[48px] px-[24px] py-[12px] rounded-[32px]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-[80px]">
              <Link href="/">
                <Logo />
              </Link>

              <div className="lg:flex items-center gap-[24px] hidden">
                {HeaderLinks?.map((item: HeaderType, index) => (
                  <Link
                    href={item.link}
                    key={index}
                    className={`${
                      item.link !== path && "opacity-[0.8]"
                    } hover:opacity-[1] font-[400] text-[18px] text-secondary`}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex lg:gap-[36px] gap-[16px] items-center">
              <Button variant="link" size={"icon"} asChild>
                <Link href={routes?.Cart}>
                  <CartIcon />
                </Link>
              </Button>
              <Button
                onClick={() =>
                  user ? router.push("/account") : setShowSignup(true)
                }
                variant="link"
                size={"icon"}
              >
                <UserIcon />
              </Button>
              <Button variant="link" size={"icon"}>
                <SearchIcon />
              </Button>
              <div className="block lg:hidden text-secondary">
                <Sheet open={SideBar} onOpenChange={setSidebar}>
                  <SheetTrigger>O</SheetTrigger>
                  <SheetContent className="bg-primary">
                    <SheetHeader>
                      <SheetTitle>
                        <div className="flex items-start gap-[24px] justify-start flex-col mt-[36px]">
                          {HeaderLinks?.map((item: HeaderType, index) => (
                            <Link
                              href={item.link}
                              key={index}
                              className={`${
                                item.link !== path && "opacity-[0.8]"
                              } hover:opacity-[1] font-[400] text-[18px] text-secondary`}
                              onClick={handleClose}
                            >
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      </SheetTitle>
                    </SheetHeader>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MainAuth showSignup={showSignup} setShowSignup={setShowSignup} />
    </>
  );
}
1;
