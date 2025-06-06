"use client";
import { addToCart } from "@/apiRequests/cart/addToCart";
import { getRelatedProducts } from "@/apiRequests/products/getRelatedProducts";
import { getSingleProduct } from "@/apiRequests/products/getSingleProduct";
import { addWishlist } from "@/apiRequests/wishlist/addWishlist";
import Brudcambs from "@/components/general/Brudcambs";
import Loading from "@/components/general/Loading";
import { useSignup } from "@/context/ShowSignupContext";
import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import React from "react";
import toast from "react-hot-toast";
import GalleryImage from "./GalleryImage";
import ProductDetails from "./ProductDetails";
import RelatedProducts from "./RelatedProducts";

interface MainSingleProductProps {
  productId: string;
}

const MainSingleProduct = ({ productId }: MainSingleProductProps) => {
  const { setShowSignup } = useSignup();

  const token = Cookies.get("musc-token");
  const [quantity, setQuantity] = React.useState(1);
  const [color, setColor] = React.useState("");
  const { data: product } = useQuery(["product", productId], () =>
    getSingleProduct(productId)
  );
  // const { data: relatedProducts } = useQuery(
  //   ["relatedProducts", productId],
  //   () => getRelatedProducts(productId),
  // );
  const handleAddToWishlist = async () => {
    if (!token) {
      return toast.error("يرجى تسجيل الدخول اولا");
    }
    if (!color) {
      return toast.error("يرجى اختيار لون");
    }
    try {
      const res = await addWishlist(productId);
      toast.success("تمت الاضافة الي المفضلة");
    } catch (error) {
      toast.error("حدث خطأ");
      console.log(error);
    }
  };
  const handleAddToCart = async () => {
    if (!token) {
      setShowSignup(true);
      return toast.error("يرجى تسجيل الدخول اولا");
    }
    try {
      const res = await addToCart(productId, color, 1);
      toast.success("تمت الاضافة الي السلة");
    } catch (error) {
      toast.error("حدث خطأ");
      console.log(error);
    }
  };

  return (
    <>
      {!product ? (
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
              quantity={quantity}
              setQuantity={setQuantity}
              color={color}
              setColor={setColor}
            />
          </div>
          {/*{relatedProducts.length > 0 && <RelatedProducts />}*/}
        </div>
      )}
    </>
  );
};

export default MainSingleProduct;
