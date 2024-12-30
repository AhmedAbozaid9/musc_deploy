"use client";
import { getWishlist } from "@/apiRequests/wishlist/getWishlist";
import Loading from "@/components/general/Loading";
import ProductCard from "@/components/general/ProductCard";
import routes from "@/lib/routes";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const Favorites = () => {
  const { data: favorites } = useQuery(["favorites"], getWishlist);
  console.log(favorites);
  return (
    <>
      {favorites ? (
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
            />
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Favorites;
