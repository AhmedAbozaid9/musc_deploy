"use client";

import Brudcambs from "@/components/general/Brudcambs";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import CartHeader from "./CartHeader";
import AddressAndDelivery from "./AddressAndDelivery";
import OrderSummary from "./OrderSummary";

export default function MainCart() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const step = parseInt(searchParams.get("step") || "1", 10);
  useEffect(() => {
    if (!searchParams.get("step")) {
      const currentParams = new URLSearchParams(searchParams.toString());
      currentParams.set("step", "1");

      router.replace(`?${currentParams.toString()}`);
    }
  }, [router, searchParams]);

  const changeStep = (newStep: string) => {
    const currentParams = new URLSearchParams(searchParams.toString());
    currentParams.set("step", newStep);
    router.replace(`?${currentParams.toString()}`);
  };

  return (
    <div className="container">
      <Brudcambs name="سلة التسوق" />
      <CartHeader />
      <div className="mt-[56px] flex items-start justify-between gap-[38px] lg:flex-row flex-col">
        <div className="lg:w-[56%] w-full">
          {step === 1 && <AddressAndDelivery />}
        </div>
        <div className="lg:w-[40%] w-full">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
}
