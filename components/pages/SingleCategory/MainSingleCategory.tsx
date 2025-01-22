"use client";
import ProductCard from "@/components/general/ProductCard";
import SearchIconBtn from "@/components/Icons/SearchIconBtn";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import routes from "@/lib/routes";
import Image from "next/image";
import Brudcambs from "@/components/general/Brudcambs";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getBestSelling } from "@/apiRequests/products/getBestSelling";
import { getAllProducts } from "@/apiRequests/products/getAllProducts";
import { Key, useState } from "react";
import {
  getSubCategories,
  SubCategoryRespone,
  SubCategoryType,
} from "@/apiRequests/products/getSubCategories";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { LineWave } from "react-loader-spinner";
export default function MainSingleCategory() {
  const params = useParams();
  const categoryId = params.slug;
  const isOffers = categoryId === "offers";
  const [categorySelect, setCategorySelect] = useState(categoryId);

  // Fetch products
  const {
    data: products,
    refetch,
    isFetching,
  } = useQuery(
    ["products", categorySelect],
    () =>
      isOffers ? getBestSelling() : getAllProducts(categorySelect as string),
    {
      enabled: !!categorySelect,
    }
  );

  // Fetch subcategories
  const { data: subCategory } = useQuery<SubCategoryRespone>({
    queryKey: ["subCategory"],
    queryFn: () => getSubCategories(categoryId as string),
  });

  // Handle category selection
  const handleSelection = (value: string) => {
    setCategorySelect(value);
    refetch();
  };

  return (
    <>
      <Image src="/cat.webp" alt="Category" width={1360} height={459} />
      <Brudcambs name="اسم التصنيف" />
      <div className="flex items-start lg:flex-row flex-col lg:gap-[56px] gap-[24px]">
        <div className="flex flex-col gap-[32px] lg:min-w-[400px] min-w-full">
          {/* <div className="flex items-center">
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
          </div> */}
          <div className="px-[24px] py-[32px] bg-secondary rounded-[12px]">
            <div className="flex justify-between items-center border-b border-b-[#E6E8EA] pb-[24px]">
              <h4 className="text-[#787878]">نوع المنتج</h4>
              <span className="text-[#787878]">-</span>
            </div>
            <RadioGroup
              className="space-y-2 mt-8"
              onValueChange={handleSelection}
              value={categorySelect as string}
            >
              {subCategory?.result.map((item: SubCategoryType) => (
                <div
                  key={item._id}
                  className="flex items-center justify-end space-x-2 text-right rtl"
                >
                  <label
                    htmlFor={item._id}
                    className="text-sm font-medium text-gray-700 cursor-pointer"
                  >
                    {item.title}
                  </label>
                  <RadioGroupItem id={item._id} value={item._id} />
                </div>
              ))}
            </RadioGroup>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid lg:grid-cols-2 gap-[26px] grid-cols-1 w-full">
          {isFetching ? (
            <div className="flex justify-center items-center w-full">
              <p className="w-full flex items-center justify-center">
                <LineWave
                  visible={true}
                  height="100"
                  width="100"
                  color="#000"
                />
              </p>
            </div>
          ) : products?.length > 0 ? (
            products.map(
              (item: {
                id: Key | null | undefined;
                imageCover: string;
                title: string;
                price: number;
              }) => (
                <ProductCard
                  key={item.id}
                  link={routes?.Product?.POST(item.id as string)}
                  id={item.id as string}
                  offer={8}
                  image={item.imageCover}
                  category={""}
                  name={item.title}
                  price={item.price}
                />
              )
            )
          ) : (
            <p>لا توجد منتجات</p>
          )}
        </div>
      </div>
    </>
  );
}
