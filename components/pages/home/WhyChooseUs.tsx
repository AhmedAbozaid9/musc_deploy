import WhyChosseCard from "@/components/general/WhyChosseCard";
import Payment from "@/components/Icons/Payment";
import Quality from "@/components/Icons/Quality";
import Refund from "@/components/Icons/Refund";
import Shipping from "@/components/Icons/Shipping";

export default function WhyChooseUs() {
  return (
    <>
      <div className="lg:py-[60px] py-[32px] container">
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-[20px]">
          <WhyChosseCard
            icon={<Quality />}
            title={"أعلي جودة"}
            description={"وخدمة ما بعد البيع"}
          />
          <WhyChosseCard
            icon={<Refund />}
            title={"خدمة استرجاع المنتج"}
            description={"خلال 14 يوم"}
          />
          <WhyChosseCard
            icon={<Shipping />}
            title={"خدمه توصيل"}
            description={"خلال 48 ساعه"}
          />
          <WhyChosseCard
            icon={<Payment />}
            title={"وسائل دفع"}
            description={"أمنة ومتعددة"}
          />
        </div>
      </div>
    </>
  );
}
