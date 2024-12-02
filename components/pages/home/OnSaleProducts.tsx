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
export default function OnSaleProducts() {
  return (
    <>
      <div className="lg:py-[60px] py-[32px]">
        <div className="container">
          <div className="flex justify-between items-center gap-[16px]">
            <h2 className="lg:text-[40px] text-[20px] font-[600]">
              ⚡ لفتره محدوده
            </h2>
            <Button className="bg-primary text-secondary">
              تسوق الان
              <WhiteArrow />
            </Button>
          </div>
          <div className="mt-[56px]">
            <Carousel>
              <CarouselContent>
                <CarouselItem className="lg:basis-[30%] basis-[85%]">
                  <ProductCard />
                </CarouselItem>
                <CarouselItem className="lg:basis-[30%] basis-[85%]">
                  <ProductCard />
                </CarouselItem>
                <CarouselItem className="lg:basis-[30%] basis-[85%]">
                  <ProductCard />
                </CarouselItem>
                <CarouselItem className="lg:basis-[30%] basis-[85%]">
                  <ProductCard />
                </CarouselItem>
                <CarouselItem className="lg:basis-[30%] basis-[85%]">
                  <ProductCard />
                </CarouselItem>
                <CarouselItem className="lg:basis-[30%] basis-[85%]">
                  <ProductCard />
                </CarouselItem>
                <CarouselItem className="lg:basis-[30%] basis-[85%]">
                  <ProductCard />
                </CarouselItem>
                <CarouselItem className="lg:basis-[30%] basis-[85%]">
                  <ProductCard />
                </CarouselItem>
                <CarouselItem className="lg:basis-[30%] basis-[85%]">
                  <ProductCard />
                </CarouselItem>
                <CarouselItem className="lg:basis-[30%] basis-[85%]">
                  <ProductCard />
                </CarouselItem>
                <CarouselItem className="lg:basis-[30%] basis-[85%]">
                  <ProductCard />
                </CarouselItem>
                <CarouselItem className="lg:basis-[30%] basis-[85%]">
                  <ProductCard />
                </CarouselItem>
                <CarouselItem className="lg:basis-[30%] basis-[85%]">
                  <ProductCard />
                </CarouselItem>
                <CarouselItem className="lg:basis-[30%] basis-[85%]">
                  <ProductCard />
                </CarouselItem>
                <CarouselItem className="lg:basis-[30%] basis-[85%]">
                  <ProductCard />
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
