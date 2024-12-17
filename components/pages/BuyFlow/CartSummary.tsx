import CouponCode from "@/components/general/CouponCode";

export default function CartSummary() {
  return (
    <>
      <div className="px-[16px] py-[32px] border border-[#DEDEDE] bg-[#FAFAFA] rounded-[32px]">
        <h2 className="text-black font-[500] text-[24px] mb-[24px]">
          ملخص الطلبيه
        </h2>
        <CouponCode />
        <div className="my-[48px]">
          <div className="flex justify-between items-center mb-[24px]">
            <p className="text-[#787878] text-[20px] font-[300]">
              المجموع الفرعي
            </p>
            <p className="text-[#1E1E1E] text-[24px] font-[500]">6000 جم</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-[#787878] text-[20px] font-[300]">رسوم الشحن</p>
            <p className="text-[#1E1E1E] text-[24px] font-[500]">200 جم</p>
          </div>
        </div>
      </div>
    </>
  );
}
