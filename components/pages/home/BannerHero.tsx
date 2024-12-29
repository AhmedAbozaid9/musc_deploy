"use client";
import { getBanners } from "@/apiRequests/general/getBanners";
import BlackArrow from "@/components/Icons/BlackArrow";
import { Button } from "@/components/ui/button";
import routes from "@/lib/routes";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function BannerHero() {
  const { data: banners } = useQuery(["banners"], getBanners);
  console.log(banners && banners[0].imageUrl);

  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="container text-secondary pb-[60px]">
      {banners ? (
        <Slider {...settings}>
          {banners.map((banner: any) => (
            <div
              key={banner._id}
              className="lg:h-[80vh] h-[60vh] rounded-[32px] flex flex-col justify-between lg:p-[40px] px-[12px] py-[32px] relative"
            >
              <div
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center rounded-[32px]"
                style={{
                  backgroundImage: `url(${banner.imageUrl})`,
                  zIndex: -1,
                }}
              ></div>

              <div
                className="absolute top-0 left-0 w-full h-full rounded-[32px]"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 77.87%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0.20) 16.67%, rgba(0, 0, 0, 0.00) 65.05%)",
                  zIndex: -1,
                }}
              ></div>

              <div className="flex flex-col justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center">
                <h2 className="lg:text-[64px] text-[32px] font-[600]">
                  {banner.title}
                </h2>
              </div>

              <div className="absolute  bottom-8 w-full flex flex-col items-center lg:flex-row justify-center gap-[16px]">
                <Button asChild>
                  <Link href={routes?.Shop}>
                    <BlackArrow />
                    تسوق الان
                  </Link>
                </Button>
                <p className="font-[300] lg:w-[70%] text-center lg:text-right">
                  {banner.description}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        <p>Loading banners...</p>
      )}
    </div>
  );
}
