"use client";
import { getRelatedProducts } from "@/apiRequests/products/getRelatedProducts";
import { getSingleProduct } from "@/apiRequests/products/getSingleProduct";
import { addWishlist } from "@/apiRequests/wishlist/addWishlist";
import Brudcambs from "@/components/general/Brudcambs";
import Loading from "@/components/general/Loading";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import GalleryImage from "./GalleryImage";
import ProductDetails from "./ProductDetails";
import RelatedProducts from "./RelatedProducts";

interface MainSingleProductProps {
  productId: string;
}

const MainSingleProduct = ({ productId }: MainSingleProductProps) => {
  const { data: product } = useQuery(["product", productId], () =>
    getSingleProduct(productId)
  );
  const { data: relatedProducts } = useQuery(
    ["relatedProducts", productId],
    () => getRelatedProducts(productId)
  );
  const handleAddToWishlist = async () => {
    try {
      const res = await addWishlist(productId);
      toast.success("تمت الاضافة الي المفضلة");
    } catch (error) {
      toast.error("حدث خطأ");
      console.log(error);
    }
  };
  const handleAddToCart = async () => {
    console.log("Added to cart");
  };

  return (
    <>
      {!relatedProducts || !product ? (
        <Loading />
      ) : (
        <div className="container">
          <Brudcambs name={product.title} />
          <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-[56px] gap-[0px]">
            <GalleryImage images={product.images} />
            <ProductDetails
              handleAddToCart={handleAddToCart}
              handleAddToWishlist={handleAddToWishlist}
              product={product}
            />
          </div>
          {relatedProducts.length > 0 && <RelatedProducts />}
        </div>
      )}
    </>
  );
};

export default MainSingleProduct;
