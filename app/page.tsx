"use client";

import { getUser } from "@/apiRequests/auth/getUser";
import BannerHero from "@/components/pages/home/BannerHero";
import FeaturedProducts from "@/components/pages/home/FeaturedProducts";
import OfferBanner from "@/components/pages/home/OfferBanner";
import OnSaleProducts from "@/components/pages/home/OnSaleProducts";
import ShopByCategory from "@/components/pages/home/ShopByCategory";
import WhyChooseUs from "@/components/pages/home/WhyChooseUs";
import { useAuthStore } from "@/store/useAuthStore";
import Cookies from "js-cookie";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";

function HomeContent() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const user = useAuthStore((state) => state.user);
  const setUser = useAuthStore((state) => state.setUser);

  useEffect(() => {
    if (token) {
      Cookies.set("musc-token", token);
      window.location.href = "/";
    }
  }, [token]);

  useEffect(() => {
    if (!user) {
      (async () => {
        try {
          const userData = await getUser();
          setUser(userData);
        } catch (error) {
          console.error("Failed to fetch user:", error);
        }
      })();
    }
  }, []);

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

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeContent />
    </Suspense>
  );
}
