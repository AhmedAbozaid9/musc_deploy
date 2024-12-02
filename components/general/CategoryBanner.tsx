import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
interface CategoryType {
  image: string;
  title: string;
  link: string;
}
const CategoryBanner: React.FC<CategoryType> = ({ image, title, link }) => {
  return (
    <div
      className="flex lg:h-[500px] h-[350px] flex-col justify-end bg-cover bg-center rounded-[32px] text-secondary p-[32px]"
      style={{
        background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 56.71%, rgba(0, 0, 0, 0.40) 73.88%), url(${image}) lightgray 0px -37.859px / 100% 136.179% no-repeat;`,
      }}
    >
      <div className="flex items-center justify-between">
        <h2 className="font-[600] lg:text-[32px] text-[24px]">{title}</h2>
        <Button variant="link" asChild>
          <Link href={link}>تسوق الان</Link>
        </Button>
      </div>
    </div>
  );
};
export default CategoryBanner;
