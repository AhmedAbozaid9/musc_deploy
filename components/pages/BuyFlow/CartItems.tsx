"use client";
import { CartItemTypes } from "@/apiRequests/cart/getCart";
import ItemCard from "@/components/general/ItemCard";
import { useState } from "react";

interface CartItemsProps {
  cartItems: CartItemTypes[];
  handleDeleteItem: (id: string) => Promise<void>;
  handleUpdateItem: (id: string, quantity: number) => Promise<void>;
}
export default function CartItems({
  cartItems,
  handleUpdateItem,
  handleDeleteItem,
}: CartItemsProps) {
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
              handleDeleteItem={handleDeleteItem}
              handleUpdateItem={handleUpdateItem}
            />
          ))}
        </div>
      </div>
    </>
  );
}
