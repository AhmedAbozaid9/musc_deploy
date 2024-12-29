import ProductCard from "@/components/general/ProductCard";
import SearchIconBtn from "@/components/Icons/SearchIconBtn";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import routes from "@/lib/routes";

export default function MainSingleCategory() {
  return (
    <div className="flex items-start lg:flex-row flex-col lg:gap-[56px] gap-[24px]">
      <div className="flex flex-col gap-[32px] lg:min-w-[400px] min-w-full">
        <div className="flex items-center">
          <Input
            placeholder="بحث..."
            className="bg-secondary rounded-r-full h-[56px] border-none"
          />
          <Button
            variant="link"
            size="custom"
            className="bg-primary px-[24px] rounded-full"
          >
            <SearchIconBtn />
          </Button>
        </div>
        <div className="px-[24px] py-[32px] bg-secondary rounded-[12px]">
          <div className="flex justify-between items-center border-b border-b-[#E6E8EA] pb-[24px]">
            <h4 className="text-[#787878]">نوع المنتج</h4>
            <span className="text-[#787878]">-</span>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-[26px] grid-cols-1 w-full">
        <ProductCard
          link={routes?.Product?.POST("test")}
          id={"1"}
          offer={8}
          image={"/pr.webp"}
          category={"تلفزيونات"}
          name={"تلفزيون LG"}
          price={18000}
        />
        <ProductCard
          link={routes?.Product?.POST("test")}
          id={"1"}
          offer={8}
          image={"/pr.webp"}
          category={"تلفزيونات"}
          name={"تلفزيون LG"}
          price={18000}
        />
        <ProductCard
          link={routes?.Product?.POST("test")}
          id={"1"}
          offer={8}
          image={"/pr.webp"}
          category={"تلفزيونات"}
          name={"تلفزيون LG"}
          price={18000}
        />
        <ProductCard
          link={routes?.Product?.POST("test")}
          id={"1"}
          offer={8}
          image={"/pr.webp"}
          category={"تلفزيونات"}
          name={"تلفزيون LG"}
          price={18000}
        />
        <ProductCard
          link={routes?.Product?.POST("test")}
          id={"1"}
          offer={8}
          image={"/pr.webp"}
          category={"تلفزيونات"}
          name={"تلفزيون LG"}
          price={18000}
        />
        <ProductCard
          link={routes?.Product?.POST("test")}
          id={"1"}
          offer={8}
          image={"/pr.webp"}
          category={"تلفزيونات"}
          name={"تلفزيون LG"}
          price={18000}
        />
        <ProductCard
          link={routes?.Product?.POST("test")}
          id={"1"}
          offer={8}
          image={"/pr.webp"}
          category={"تلفزيونات"}
          name={"تلفزيون LG"}
          price={18000}
        />
      </div>
    </div>
  );
}
