"use client";

import BannerHero from "@/components/pages/home/BannerHero";
import FeaturedProducts from "@/components/pages/home/FeaturedProducts";
import OfferBanner from "@/components/pages/home/OfferBanner";
import OnSaleProducts from "@/components/pages/home/OnSaleProducts";
import ShopByCategory from "@/components/pages/home/ShopByCategory";
import WhyChooseUs from "@/components/pages/home/WhyChooseUs";
import { useAuthStore } from "@/store/useAuthStore";
import Cookies from "js-cookie";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const setUser = useAuthStore((state) => state.setUser);

  useEffect(() => {
    if (token) {
      Cookies.set("musc-token", token);
      window.location.replace(window.location.pathname);
    }
  }, [token]);

  return (
    <>
      <BannerHero />
      <ShopByCategory />
      <OnSaleProducts />
      <OfferBanner />
      <FeaturedProducts />
      <WhyChooseUs />
    </>
  );
}
