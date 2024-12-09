"use client";

import Brudcambs from "@/components/general/Brudcambs";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import CartHeader from "./CartHeader";

export default function MainCart() {
  const router = useRouter();
  const searchParams = useSearchParams();

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
    </div>
  );
}
