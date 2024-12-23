"use client";

import Brudcambs from "@/components/general/Brudcambs";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import CartHeader from "./CartHeader";
import AddressAndDelivery from "./AddressAndDelivery";
import OrderSummary from "./OrderSummary";
import CartItems from "./CartItems";
import CartSummary from "./CartSummary";

export default function MainCart() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const step = parseInt(searchParams.get("step") || "1", 10);

  const handleStepChange = (step: string) => {
    const params = new URLSearchParams(searchParams?.toString() || "");
    params.set("step", step);

    const newQueryString = params.toString();
    const newUrl = `?${newQueryString}`;

    router.push(newUrl);
  };

  useEffect(() => {
    if (!searchParams.get("step")) {
      const currentParams = new URLSearchParams(searchParams.toString());
      currentParams.set("step", "1");

      router.replace(`?${currentParams.toString()}`);
    }
  }, [router, searchParams]);

  return (
    <div className="container">
      <Brudcambs name="سلة التسوق" />
      <CartHeader />
      <div className="mt-[56px] flex items-start justify-between gap-[38px] lg:flex-row flex-col">
        <div className="lg:w-[56%] w-full">
          {step === 1 && <CartItems />}
          {step === 2 && <AddressAndDelivery />}
        </div>
        <div className="lg:w-[40%] w-full">
          {step === 1 && <CartSummary handleStepChange={handleStepChange} />}
          {step === 2 && <OrderSummary />}
        </div>
      </div>
    </div>
  );
}
