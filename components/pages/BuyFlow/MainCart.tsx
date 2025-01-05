"use client";

import { applyPromoCode } from "@/apiRequests/cart/applyPromoCode";
import { checkout } from "@/apiRequests/cart/checkout";
import { deleteCartItem } from "@/apiRequests/cart/deleteCartItem";
import { getCart } from "@/apiRequests/cart/getCart";
import { updateCartItem } from "@/apiRequests/cart/updateCartItem";
import Brudcambs from "@/components/general/Brudcambs";
import Loading from "@/components/general/Loading";
import ConfirmPurchase from "@/components/pages/BuyFlow/ConfirmPurchase";
import ConfirmPurchaseDetails from "@/components/pages/BuyFlow/ConfirmPurchaseDetails";
import { useQuery } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import AddressAndDelivery from "./AddressAndDelivery";
import CartHeader from "./CartHeader";
import CartItems from "./CartItems";
import CartSummary from "./CartSummary";
import OrderSummary from "./OrderSummary";

export default function MainCart() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const step = parseInt(searchParams.get("step") || "1", 10);
  const [selectedAddress, setSelectedAddress] = useState("");
  const [priceAfterPromo, setPriceAfterPromo] = useState(0);

  const { data: cart, isLoading, refetch } = useQuery(["cart"], getCart);

  const handleStepChange = (step: string) => {
    const params = new URLSearchParams(searchParams?.toString() || "");
    params.set("step", step);

    const newQueryString = params.toString();
    const newUrl = `?${newQueryString}`;

    router.push(newUrl);
  };

  const handleUpdateItem = async (id: string, quantity: number) => {
    try {
      const response = await updateCartItem(id, quantity);
      if (response.status === "success") {
        toast.success("تم تحديث الكمية بنجاح");
        refetch();
      }
    } catch (err) {
      toast.error("حدث خطأ ما");
    }
  };

  const handleDeleteItem = async (id: string) => {
    try {
      const response = await deleteCartItem(id);
      if (response.status === "success") {
        toast.success("تم حذف المنتج بنجاح");
        refetch();
      }
    } catch (err) {
      toast.error("حدث خطأ ما");
    }
  };
  const handleApplyPromoCode = async (code: string) => {
    try {
      const response = await applyPromoCode(code);
      setPriceAfterPromo(response.totalPriceAfterDiscount);
      toast.success("تم تطبيق الكوبون بنجاح");
    } catch (err) {
      toast.error("حدث خطأ ما");
    }
  };
  const handleCheckout = async () => {
    try {
      await checkout(selectedAddress);
      toast.success("تم ارسال الطلب بنجاح");
      handleStepChange("3");
    } catch (err) {
      toast.error("حدث خطأ ما");
    }
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
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {cart && cart.cartItems.length > 0 ? (
            <>
              {" "}
              <Brudcambs name="سلة التسوق" />
              <CartHeader />
              <div className="mt-[56px] flex items-start justify-between gap-[38px] lg:flex-row flex-col">
                <div className="lg:w-[56%] w-full">
                  {step === 1 && (
                    <CartItems
                      cartItems={cart.cartItems}
                      handleUpdateItem={handleUpdateItem}
                      handleDeleteItem={handleDeleteItem}
                    />
                  )}
                  {step === 2 && (
                    <AddressAndDelivery
                      selectedAddress={selectedAddress}
                      setSelectedAddress={setSelectedAddress}
                    />
                  )}
                </div>
                <div className="lg:w-[40%] w-full">
                  {step === 1 && (
                    <CartSummary
                      cart={cart}
                      handleStepChange={handleStepChange}
                      priceAfterPromo={priceAfterPromo}
                      handleApplyPromoCode={handleApplyPromoCode}
                    />
                  )}
                  {step === 2 && (
                    <OrderSummary cart={cart} handleCheckout={handleCheckout} />
                  )}
                </div>
              </div>
              {step === 3 && (
                <div>
                  <ConfirmPurchase />
                  <ConfirmPurchaseDetails />
                </div>
              )}
            </>
          ) : (
            <p className="py-12 ">لا توجد منتجات</p>
          )}
        </>
      )}
    </div>
  );
}
