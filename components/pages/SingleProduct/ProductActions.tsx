"use client";
import CountableItem from "@/components/general/Count";
import CartButton from "@/components/Icons/CartButton";
import CartButtonWhite from "@/components/Icons/CartButtonWhite";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface ProductActionsProps {
  price: number;
  maxQuantity: number;
  handleAddToCart: () => Promise<string | undefined>;
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}

export default function ProductActions({
  price,
  maxQuantity,
  handleAddToCart,
  quantity,
  setQuantity,
}: ProductActionsProps) {
  const onCountChange = (newCount: number) => {
    setQuantity(newCount);
  };
  return (
    <>
      <div className="flex flex-col gap-[16px]">
        <div className="flex justify-between lg:items-center items-start gap-[12px] flex-col lg:flex-row">
          {maxQuantity > 0 && (
            <CountableItem
              count={quantity}
              onCountChange={onCountChange}
              maxQuantity={maxQuantity}
            />
          )}
          <h4 className="text-[24px]">{price} ر.س</h4>
        </div>
        <div className="flex items-center gap-[16px]">
          {maxQuantity > 0 ? (
            <>
              <Button
                onClick={handleAddToCart}
                className="w-full bg-primary text-secondary"
              >
                اشتري الان
                <CartButtonWhite />
              </Button>
              <Button onClick={handleAddToCart} className="w-full">
                اضف للسلة
                <CartButton />
              </Button>
            </>
          ) : (
            <p className="text-lg text-center w-full my-2 p-4 border rounded-full">
              لقد نفذ هذا المنتج
            </p>
          )}
        </div>
      </div>
    </>
  );
}
