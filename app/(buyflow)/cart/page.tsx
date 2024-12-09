import MainCart from "@/components/pages/BuyFlow/MainCart";
import { Metadata } from "next";
import { Suspense } from "react";
export const metadata: Metadata = {
  title: "سلة التسوق",
};
export default function page() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <MainCart />
      </Suspense>
    </>
  );
}
