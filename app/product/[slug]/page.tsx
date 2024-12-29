import MainSingleProduct from "@/components/pages/SingleProduct/MainSingleProduct";

export default function SingleProduct({
  params,
}: {
  params: { slug: string };
}) {
  const productId = params.slug;
  return (
    <>
      <MainSingleProduct productId={productId} />
    </>
  );
}
