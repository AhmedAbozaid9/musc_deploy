import Whishlist from "../Icons/Whishlist";

export default function ProductCard() {
  return (
    <>
      <div
        className="rounded-[32px] h-[430px] px-[32px] py-[20px]"
        style={{ background: `url(/pr.webp)`, backgroundSize: "cover" }}
      >
        <div className="flex justify-between items-center">
          <div className="p-[18px] bg-secondary text-primary rounded-[77px]">
            وفر 20%
          </div>
          <button className="bg-[#ffffff4c] rounded-full p-2">
            <Whishlist />
          </button>
        </div>
      </div>
    </>
  );
}
