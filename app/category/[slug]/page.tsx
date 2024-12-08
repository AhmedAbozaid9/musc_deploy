import Brudcambs from "@/components/general/Brudcambs";
import MainSingleCategory from "@/components/pages/SingleCategory/MainSingleCategory";
import Image from "next/image";

export default function SingleCategory() {
  return (
    <>
      <div className="container">
        <Image src="/cat.webp" alt="Category" width={1360} height={459} />
        <Brudcambs name="اسم التصنيف" />
        <MainSingleCategory />
      </div>
    </>
  );
}
