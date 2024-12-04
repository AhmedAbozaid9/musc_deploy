import Brudcambs from "@/components/pages/SingleProduct/Brudcambs";

export default function SingleProduct({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <>
      <Brudcambs />
    </>
  );
}
