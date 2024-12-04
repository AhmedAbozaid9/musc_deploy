import BannerHero from "@/components/pages/home/BannerHero";
import FeaturedProducts from "@/components/pages/home/FeaturedProducts";
import OfferBanner from "@/components/pages/home/OfferBanner";
import OnSaleProducts from "@/components/pages/home/OnSaleProducts";
import ShopByCategory from "@/components/pages/home/ShopByCategory";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "الرئيسية | متجري",
  description: "كل احتياجاتك من اللالكترونيات بأقوى الخصومات",
};
export default function Home() {
  return (
    <>
      <BannerHero />
      <ShopByCategory />
      <OnSaleProducts />
      <OfferBanner />
      <FeaturedProducts />
    </>
  );
}
