"use client";
import { CartItemTypes } from "@/apiRequests/cart/getCart";
import ItemCard from "@/components/general/ItemCard";
import { useState } from "react";

interface CartItemsProps {
  cartItems: CartItemTypes[];
}
export default function CartItems({ cartItems }: CartItemsProps) {
  return (
    <>
      <div>
        <h2 className="lg:text-[32px] text-[20px] font-[600]">سله المشتريات</h2>
        <div className="flex flex-col gap-[32px] mt-[42px]">
          {cartItems.map((item) => (
            <ItemCard
              key={item.productId}
              id={item.productId}
              image={""}
              title={"item"}
              price={item.price}
              category={"needed"}
              count={item.quantity}
              onCountChange={(newCount) => {}}
            />
          ))}
        </div>
      </div>
    </>
  );
}
