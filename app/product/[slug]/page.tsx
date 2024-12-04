import Brudcambs from "@/components/pages/SingleProduct/Brudcambs";
import GalleryImage from "@/components/pages/SingleProduct/GalleryImage";

export default function SingleProduct() {
  return (
    <>
      <div className="container">
        <Brudcambs />
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-[56px]">
          <GalleryImage />
        </div>
      </div>
    </>
  );
}
