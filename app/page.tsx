import BannerHero from "@/components/pages/home/BannerHero";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "الرئيسية | متجري",
  description: "كل احتياجاتك من اللالكترونيات بأقوى الخصومات",
};
export default function Home() {
  return (
    <>
      <BannerHero />
    </>
  );
}
