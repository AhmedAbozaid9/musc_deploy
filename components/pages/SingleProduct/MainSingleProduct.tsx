import Brudcambs from "@/components/general/Brudcambs";
import React from "react";
import GalleryImage from "./GalleryImage";
import ProductDetails from "./ProductDetails";
import RelatedProducts from "./RelatedProducts";

interface MainSingleProductProps {
  productId: string;
}

const MainSingleProduct = ({ productId }: MainSingleProductProps) => {
  return (
    <div className="container">
      <Brudcambs name={productId} />
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-[56px] gap-[0px]">
        <GalleryImage />
        <ProductDetails />
      </div>
      <RelatedProducts />
    </div>
  );
};

export default MainSingleProduct;
