import BlackArrow from "@/components/Icons/BlackArrow";
import Star from "@/components/Icons/Star";
import { Button } from "@/components/ui/button";
import routes from "@/lib/routes";
import Link from "next/link";
import Marquee from "react-fast-marquee";

export default function OfferBanner() {
  return (
    <>
      <div
        className="h-[600px] flex flex-col justify-center items-center p-4 text-secondary gap-[24px]"
        style={{
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url(/offer.webp) lightgray 0px -577.357px / 100% 244.407% no-repeat`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <h2 className="lg:text-[40px] text-[28px] font-[600] text-center">
          خصم 50% علي جميع المنتاجات
        </h2>
        <p className="lg:w-[50%] text-center">
          هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
          النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من
          النصوص الأخرى
        </p>
        <Button asChild>
          <Link href={routes?.Shop}>
            تسوق الان
            <BlackArrow />
          </Link>
        </Button>
      </div>
      <Marquee autoFill loop={0} className="bg-black text-secondary py-2">
        <div className="flex gap-[24px] items-center">
          <h4 className="text-[20px] font-[600]"> خصم 50%</h4>
          <div className="ml-[24px]">
            <Star />
          </div>
        </div>
      </Marquee>
    </>
  );
}
