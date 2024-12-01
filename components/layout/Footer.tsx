import Link from "next/link";
import BlackArrow from "../Icons/BlackArrow";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Tiktok from "../Icons/Social/Tiktok";
import Instagram from "../Icons/Social/Instagram";
import Facebook from "../Icons/Social/Facebook";

export default function Footer() {
  return (
    <>
      <div className="bg-primary text-secondary py-[64px] mt-[18px]">
        <div className="container">
          <div className="flex justify-between items-center lg:flex-row flex-col gap-[12px] pb-[32px] border-b border-b-[#ffffff3f]">
            <div>
              <h4>اشترك الأن لمعرفة كل العروض</h4>
              <div className="flex gap-[8px] items-center mt-[12px]">
                <Input
                  placeholder="البريد الالكتروني"
                  type="email"
                  className="bg-secondary p-[24px] rounded-[44px] font-[300] text-[16px] lg:min-w-[340px]"
                />
                <Button>
                  اشترك
                  <BlackArrow />
                </Button>
              </div>
            </div>
            <div>
              <h4>وسائل التواصل الاجتماعي</h4>
              <div className="flex items-center gap-[32px] mt-[16px]">
                <Link href="#">
                  <Tiktok />
                </Link>
                <Link href="#">
                  <Instagram />
                </Link>
                <Link href="#">
                  <Facebook />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
