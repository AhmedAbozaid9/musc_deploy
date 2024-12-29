"use client";
import { getBestSelling } from "@/apiRequests/products/getBestSelling";
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
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
export default function OnSaleProducts() {
  const { data: products } = useQuery(["bestSelling"], getBestSelling);
  return (
    <>
      <div className="lg:py-[60px] py-[32px]">
        <div className="container">
          <div className="flex justify-between items-center gap-[16px]">
            <h2 className="lg:text-[40px] text-[20px] font-[600]">
              ⚡ لفتره محدوده
            </h2>
            <Button className="bg-primary text-secondary w-fit">
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
                {products?.map((product) => (
                  <CarouselItem
                    key={product.id}
                    className="lg:basis-[30%] basis-[85%]"
                  >
                    <ProductCard
                      link={routes?.Product?.POST(product.id)}
                      id={product.id}
                      offer={product.discountPercentage}
                      image={product.imageCover}
                      category={"test"}
                      name={product.title}
                      price={product.priceAfterDiscount}
                    />
                  </CarouselItem>
                ))}
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
