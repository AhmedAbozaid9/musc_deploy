import ProductCard from "@/components/general/ProductCard";
import routes from "@/lib/routes";
import React from "react";

const Favorites = () => {
  return (
    <div className="flex flex-wrap gap-6">
      <ProductCard
        isInFavorites={true}
        link={routes?.Product?.POST("test")}
        id={"1"}
        offer={8}
        image={"/pr.webp"}
        category={"تلفزيونات"}
        name={"تلفزيون LG"}
        price={18000}
      />
      <ProductCard
        isInFavorites={true}
        link={routes?.Product?.POST("test")}
        id={"1"}
        offer={8}
        image={"/pr.webp"}
        category={"تلفزيونات"}
        name={"تلفزيون LG"}
        price={18000}
      />
      <ProductCard
        isInFavorites={true}
        link={routes?.Product?.POST("test")}
        id={"1"}
        offer={8}
        image={"/pr.webp"}
        category={"تلفزيونات"}
        name={"تلفزيون LG"}
        price={18000}
      />
    </div>
  );
};

export default Favorites;
