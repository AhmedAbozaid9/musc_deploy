"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useState } from "react";

export default function GalleryImage() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleThumbnailClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <>
      <div className="flex gap-[20px] pb-[80px] galleryImage">
        <div className="lg:w-[150px] w-[80px]">
          <Carousel orientation="vertical">
            <CarouselContent className="lg:h-[550px] h-[320px]">
              {Array(5)
                .fill("")
                .map((_, index) => (
                  <CarouselItem
                    key={index}
                    className={`basis-1/4 cursor-pointer ${
                      activeIndex === index ? "opacity-[1]" : "opacity-[0.5]"
                    }`}
                    onClick={() => handleThumbnailClick(index)}
                  >
                    <Image
                      src={"/pr.webp"}
                      alt={`Thumbnail Slide ${index + 1}`}
                      width={110}
                      height={110}
                      className="rounded-[16px]"
                    />
                  </CarouselItem>
                ))}
            </CarouselContent>
          </Carousel>
        </div>

        <div className="w-full">
          <Carousel>
            <CarouselContent>
              <CarouselItem key={activeIndex}>
                <Image
                  src={"/pr.webp"}
                  alt={`Main Slide ${activeIndex + 1}`}
                  className="rounded-[16px] w-full"
                  width={555}
                  height={580}
                />
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </>
  );
}
