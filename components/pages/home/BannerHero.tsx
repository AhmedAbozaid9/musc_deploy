import BlackArrow from "@/components/Icons/BlackArrow";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function BannerHero() {
  return (
    <>
      <div className="container text-secondary">
        <div
          className="lg:h-[80vh] h-[60vh] rounded-[32px] bg-cover flex flex-col justify-between p-[40px]"
          style={{
            background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 77.87%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0.20) 16.67%, rgba(0, 0, 0, 0.00) 65.05%), linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url(/bg-hero.webp) lightgray 50% / cover no-repeat;`,
          }}
        >
          <div></div>
          <div>
            <h2 className="text-center lg:text-[64px] text-[32px] font-[600] lg:w-[80%] m-auto">
              كل احتياجاتك من اللالكترونيات بأقوى الخصومات
            </h2>
          </div>
          <div className="flex lg:items-center justify-between flex-col lg:flex-row items-start gap-[16px]">
            <p className="font-[300] lg:w-[70%]">
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
              هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
              العديد من النصوص الأخرى
            </p>
            <Button asChild>
              <Link href="#">
                تسوق الان
                <BlackArrow />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
