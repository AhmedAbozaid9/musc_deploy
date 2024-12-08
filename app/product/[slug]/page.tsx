import Brudcambs from "@/components/general/Brudcambs";
import GalleryImage from "@/components/pages/SingleProduct/GalleryImage";
import ProductDetails from "@/components/pages/SingleProduct/ProductDetails";
import RelatedProducts from "@/components/pages/SingleProduct/RelatedProducts";

export default function SingleProduct() {
  return (
    <>
      <div className="container">
        <Brudcambs name="اسم المنتج" />
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-[56px] gap-[0px]">
          <GalleryImage />
          <ProductDetails />
        </div>
        <RelatedProducts />
      </div>
    </>
  );
}
