"use client";
import ItemCard from "@/components/general/ItemCard";
import { useState } from "react";
interface Item {
  id: string;
  image: string;
  title: string;
  price: string;
  category: string;
  count: number;
}
export default function CartItems() {
  const [items, setItems] = useState<Item[]>([
    {
      id: "1",
      image: "/pr.webp",
      title: "ليدات زينه واضاءه",
      price: "3000",
      category: "ليدات زينه",
      count: 1,
    },
    {
      id: "2",
      image: "/pr.webp",
      title: "ليدات زينه واضاءه",
      price: "3000",
      category: "ليدات زينه",
      count: 1,
    },
    {
      id: "3",
      image: "/pr.webp",
      title: "ليدات زينه واضاءه",
      price: "3000",
      category: "ليدات زينه",
      count: 1,
    },
  ]);

  const onCountChange = (id: string, newCount: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, count: newCount } : item
      )
    );
  };

  return (
    <>
      <div>
        <h2 className="lg:text-[32px] text-[20px] font-[600]">سله المشتريات</h2>
        <div className="flex flex-col gap-[32px] mt-[42px]">
          {items.map((item) => (
            <ItemCard
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              category={item.category}
              count={item.count}
              onCountChange={(newCount) => onCountChange(item.id, newCount)}
            />
          ))}
        </div>
      </div>
    </>
  );
}
