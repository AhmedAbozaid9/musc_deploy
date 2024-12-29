import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
interface CategoryType {
  image: string;
  title: string;
  link: string;
}
const CategoryBanner: React.FC<CategoryType> = ({ image, title, link }) => {
  return (
    <div
      className="relative bg-no-repeat flex lg:h-[500px] h-[350px] flex-col justify-end bg-cover bg-center rounded-[32px] text-secondary p-[32px]"
      style={{
        backgroundImage: `url(${image})`, // Fixing the image background application
        backgroundSize: "cover", // Ensures image covers the entire div
        backgroundPosition: "center", // Ensures the image is centered
      }}
    >
      <div
        className="w-full h-full absolute top-0 left-0 rounded-[32px]"
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0) 56.71%, rgba(0, 0, 0, 0.4) 73.88%)", // Fixed the gradient format
        }}
      ></div>
      <div className="flex items-center justify-between z-10">
        {" "}
        {/* Added z-10 to ensure it's above the overlay */}
        <h2 className="font-[600] lg:text-[32px] text-[24px]">{title}</h2>
        <Button variant="link" asChild>
          <Link href={link}>تسوق الان</Link>
        </Button>
      </div>
    </div>
  );
};
export default CategoryBanner;
