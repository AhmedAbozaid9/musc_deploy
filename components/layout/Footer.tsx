import Link from "next/link";
import BlackArrow from "../Icons/BlackArrow";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Tiktok from "../Icons/Social/Tiktok";
import Instagram from "../Icons/Social/Instagram";
import Facebook from "../Icons/Social/Facebook";
import Image from "next/image";

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
          <div className="flex items-start justify-between flex-wrap lg:flex-nowrap gap-[36px] lg:mt-[64px] mt-[24px] pb-[32px] border-b border-b-[#ffffff3f]">
            <div>
              <h2 className="lg:text-[32px] text-[24px] font-[500]">
                الاجهزه الكهربائيه
              </h2>
              <div className="grid lg:grid-cols-2 grid-cols-4 gap-[16px] mt-[24px]">
                <Link href="#">تكيفات</Link>
                <Link href="#">تلفزيونات</Link>
                <Link href="#">ثلاجات</Link>
                <Link href="#">غسالات</Link>
                <Link href="#">بوتجازات</Link>
                <Link href="#">سخانات</Link>
              </div>
            </div>
            <div>
              <h2 className="lg:text-[32px] text-[24px] font-[500] ">
                الصحي والتواليت
              </h2>
              <div className="grid grid-cols-1 gap-[16px] mt-[24px]">
                <Link href="#">الخلاطات وأنظمة الدفن والشاور</Link>
                <Link href="#">أحواص وحدات وحلل</Link>
                <Link href="#">أطقم الصحي والتواليت</Link>
              </div>
            </div>
            <div>
              <h2 className="lg:text-[32px] text-[24px] font-[500] mb-[24px]">
                خدمة العملاء
              </h2>
              <div className="grid grid-cols-1 gap-[16px] mt-[24px]">
                <Link href="#">سياسة الشحن والتوصيل</Link>
                <Link href="#">سياسة الأسترجاع والأستبدال</Link>
                <Link href="#">الشروط والأحكام</Link>
                <Link href="#">الأسئلة الشائعة</Link>
              </div>
            </div>
          </div>
          <div className="flex items-start lg:justify-between justify-center flex-wrap lg:flex-nowrap gap-[16px] mt-[24px]">
            <h2>جميع الحقوق محفوطة لدي متجري © 2024</h2>
            <Image
              src="/payment.png"
              alt="Payment Accept"
              width={253}
              height={28}
            />
          </div>
        </div>
      </div>
    </>
  );
}
