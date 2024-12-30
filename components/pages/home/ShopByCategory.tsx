"use client";
import { getCategories } from "@/apiRequests/products/getCategories";
import CategoryBanner from "@/components/general/CategoryBanner";
import WhiteArrow from "@/components/Icons/WhiteArrow";
import { Button } from "@/components/ui/button";
import routes from "@/lib/routes";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

export default function ShopByCategory() {
  const { data: categories, isLoading } = useQuery(
    ["categories"],
    getCategories
  );
  console.log(categories);

  return (
    <>
      <div className="lg:py-[60px] py-[32px]">
        <div className="container">
          <div className="flex justify-between items-center gap-[16px]">
            <h2 className="lg:text-[40px] text-[24px] font-[600]">
              تسوق حسب التصنيف
            </h2>
          </div>

          {/* Skeleton Loader for Categories */}
          {isLoading ? (
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-[32px] mt-[56px]">
              {[...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className="relative bg-gray-300 animate-pulse rounded-lg h-[250px]"
                >
                  <div className="absolute top-0 left-0 w-full h-full bg-gray-400 rounded-lg"></div>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-400 h-8 w-1/2 rounded"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-[32px] mt-[56px]">
              {categories?.map((category) => (
                <CategoryBanner
                  key={category.id}
                  image={category.image}
                  title={category.title}
                  link={"#"}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
