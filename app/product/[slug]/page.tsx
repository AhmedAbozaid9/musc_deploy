import MainSingleProduct from "@/components/pages/SingleProduct/MainSingleProduct";

interface Params {
  slug: string;
}

export default function SingleProduct({ params }: any) {
  const productId = params.slug;

  return (
    <>
      <MainSingleProduct productId={productId} />
    </>
  );
}
