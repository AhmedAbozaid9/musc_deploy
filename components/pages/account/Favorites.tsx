"use client";
import { getWishlist } from "@/apiRequests/wishlist/getWishlist";
import Loading from "@/components/general/Loading";
import ProductCard from "@/components/general/ProductCard";
import { ProductType } from "@/types/ProductType";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const Favorites = () => {
  const {
    data: favorites = [],
    isLoading,
    refetch,
  } = useQuery<ProductType[]>(["favorites"], getWishlist, {
    retry: false,
  });
  console.log("wishlist", favorites);
  return (
    <>
      {!isLoading ? (
        <>
          {favorites.length ? (
            <>
              <div className="flex flex-wrap gap-6">
                {favorites.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    image={product.imageCover}
                    category={product.category}
                    name={product.title}
                    price={product.price}
                    link={`/product/${product.id}`}
                    isInFavorites={true}
                    refetch={refetch}
                  />
                ))}
              </div>
            </>
          ) : (
            <p>لا توجد منتجات</p>
          )}
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Favorites;
