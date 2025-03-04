"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useState } from "react";

interface GalleryImageProps {
  images: string[];
}

export default function GalleryImage({ images }: GalleryImageProps) {
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
              {images.map((image, index) => (
                <CarouselItem
                  key={index}
                  className={`basis-1/4 cursor-pointer ${
                    activeIndex === index ? "opacity-[1]" : "opacity-[0.5]"
                  }`}
                  onClick={() => handleThumbnailClick(index)}
                >
                  <Image
                    src={image}
                    alt={`Thumbnail Slide ${index + 1}`}
                    width={110}
                    height={110}
                    className="rounded-[16px] w-[110px] h-[110px] object-cover object-center border-2"
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
                  src={images[activeIndex]}
                  alt={`Main Slide ${activeIndex + 1}`}
                  className="rounded-[16px] w-full "
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
