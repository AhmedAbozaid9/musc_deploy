import routes from "@/lib/routes";
import Link from "next/link";

function Brudcambs({ name }: { name: string }) {
  return (
    <>
      <div className="py-[44px]">
        <h4 className="flex items-center gap-[7px] text-[16px] text-[#787878]">
          <Link href={routes?.HOME}>الرئيسية</Link>
          {">"} {name}
        </h4>
      </div>
    </>
  );
}

export default Brudcambs;
