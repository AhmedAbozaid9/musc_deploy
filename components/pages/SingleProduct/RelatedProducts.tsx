import ProductCard from "@/components/general/ProductCard";
import WhiteArrow from "@/components/Icons/WhiteArrow";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import routes from "@/lib/routes";
import Link from "next/link";
export default function RelatedProducts() {
  return (
    <>
      <div className="lg:py-[60px] py-[32px]">
        <div className="container">
          <div className="flex justify-between items-center gap-[16px]">
            <h2 className="lg:text-[40px] text-[20px] font-[600]">
              منتجات ذات صله
            </h2>
            <Button className="bg-primary text-secondary w-fit" asChild>
              <Link
                href={routes?.Shop}
                className="flex items-center gap-[16px]"
              >
                تسوق الان
                <WhiteArrow />
              </Link>
            </Button>
          </div>
          <div className="mt-[56px]">
            <Carousel>
              <CarouselContent>
                <CarouselItem className="lg:basis-[30%] basis-[85%]">
                  <ProductCard
                    link={routes?.Product?.POST("test")}
                    id={"1"}
                    offer={8}
                    image={"/pr.webp"}
                    category={"تلفزيونات"}
                    name={"تلفزيون LG"}
                    price={18000}
                  />
                </CarouselItem>
                <CarouselItem className="lg:basis-[30%] basis-[85%]">
                  <ProductCard
                    link={routes?.Product?.POST("test")}
                    id={"1"}
                    offer={15}
                    image={"/pr.webp"}
                    category={"تيست"}
                    name={"تلفزيون LG"}
                    price={18000}
                  />
                </CarouselItem>
                <CarouselItem className="lg:basis-[30%] basis-[85%]">
                  <ProductCard
                    link={routes?.Product?.POST("test")}
                    id={"1"}
                    offer={8}
                    image={"/pr.webp"}
                    category={"تلفزيونات"}
                    name={"تلفزيون LG"}
                    price={18000}
                  />
                </CarouselItem>
                <CarouselItem className="lg:basis-[30%] basis-[85%]">
                  <ProductCard
                    link={routes?.Product?.POST("test")}
                    id={"1"}
                    offer={8}
                    image={"/pr.webp"}
                    category={"تلفزيونات"}
                    name={"تلفزيون LG"}
                    price={18000}
                  />
                </CarouselItem>
                <CarouselItem className="lg:basis-[30%] basis-[85%]">
                  <ProductCard
                    link={routes?.Product?.POST("test")}
                    id={"1"}
                    offer={8}
                    image={"/pr.webp"}
                    category={"تلفزيونات"}
                    name={"تلفزيون LG"}
                    price={18000}
                  />
                </CarouselItem>
                <CarouselItem className="lg:basis-[30%] basis-[85%]">
                  <ProductCard
                    link={routes?.Product?.POST("test")}
                    id={"1"}
                    offer={14}
                    image={"/pr.webp"}
                    category={"تلفزيونات"}
                    name={"تلفزيون LG"}
                    price={18000}
                  />
                </CarouselItem>
                <CarouselItem className="lg:basis-[30%] basis-[85%]">
                  <ProductCard
                    link={routes?.Product?.POST("test")}
                    id={"1"}
                    offer={8}
                    image={"/pr.webp"}
                    category={"تلفزيونات"}
                    name={"تلفزيون LG"}
                    price={18000}
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="p-1 justify-center" />
              <CarouselNext className="p-1 justify-center" />
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
}
