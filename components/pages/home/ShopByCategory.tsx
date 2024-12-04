import CategoryBanner from "@/components/general/CategoryBanner";
import WhiteArrow from "@/components/Icons/WhiteArrow";
import { Button } from "@/components/ui/button";
import routes from "@/lib/routes";
import Link from "next/link";

export default function ShopByCategory() {
  return (
    <>
      <div className="lg:py-[60px] py-[32px]">
        <div className="container">
          <div className="flex justify-between items-center gap-[16px]">
            <h2 className="lg:text-[40px] text-[24px] font-[600]">
              تسوق حسب التصنيف
            </h2>
            <Button className="bg-primary text-secondary">
              <Link href={routes?.Shop}>
                تسوق الان
                <WhiteArrow />
              </Link>
            </Button>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-[32px] mt-[56px]">
            <CategoryBanner
              image={"/cat1.webp"}
              title={"أدوات كهربائية"}
              link={"#"}
            />
            <CategoryBanner
              image={"/cat2.webp"}
              title={"أدوات صحية"}
              link={"#"}
            />
          </div>
        </div>
      </div>
    </>
  );
}
