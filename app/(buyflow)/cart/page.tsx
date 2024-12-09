import MainCart from "@/components/pages/BuyFlow/MainCart";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "سلة التسوق",
};
export default function page() {
  return (
    <>
      <MainCart />
    </>
  );
}
