"use client";
import { getSingleProduct } from "@/apiRequests/products/getSingleProduct";
import Brudcambs from "@/components/general/Brudcambs";
import Loading from "@/components/general/Loading";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import GalleryImage from "./GalleryImage";
import ProductDetails from "./ProductDetails";
import RelatedProducts from "./RelatedProducts";

interface MainSingleProductProps {
  productId: string;
}

const MainSingleProduct = ({ productId }: MainSingleProductProps) => {
  const { data: product, isLoading } = useQuery(["product", productId], () =>
    getSingleProduct(productId)
  );
  console.log(product);
  return (
    <>
      {isLoading || !product ? (
        <Loading />
      ) : (
        <div className="container">
          <Brudcambs name={product.title} />
          <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-[56px] gap-[0px]">
            <GalleryImage images={product.images} />
            <ProductDetails product={product} />
          </div>
          <RelatedProducts />
        </div>
      )}
    </>
  );
};

export default MainSingleProduct;
