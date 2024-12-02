import CategoryBanner from "@/components/general/CategoryBanner";
import WhiteArrow from "@/components/Icons/WhiteArrow";
import { Button } from "@/components/ui/button";

export default function ShopByCategory() {
  return (
    <>
      <div className="lg:py-[120px] py-[64px]">
        <div className="container">
          <div className="flex justify-between items-center gap-[16px]">
            <h2 className="lg:text-[40px] text-[24px] font-[600]">
              تسوق حسب التصنيف
            </h2>
            <Button className="bg-primary text-secondary">
              تسوق الان
              <WhiteArrow />
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
