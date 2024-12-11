import Image from "next/image";

export default function OrderSummary() {
  return (
    <>
      <div className="flex items-center justify-between">
        <h4 className="text-black text-[20px]">ملخص الطلب</h4>
        <span className="text-[18px] text-[#787878]">2 عناصر</span>
      </div>
      <div className="bg-white lg:p-[32px] p-[16px] rounded-[32px] mt-[32px]">
        <div className="flex flex-col gap-[18px]">
          <div className="flex items-end justify-between">
            <div className="flex items-center gap-[16px]">
              <Image
                src="/pr.webp"
                alt="Product"
                width={90}
                height={90}
                className="w-[90px] h-[90px] rounded-[17px]"
              />
              <div className="flex flex-col gap-[8px]">
                <p className="text-[#787878] text-[12px]">ليدات زينه</p>
                <h4 className="text-black text-[18px]">ليدات زينه واضاءه</h4>
                <p className="text-black text-[14px] font-[400]">الكميه : 1</p>
              </div>
            </div>
            <h4 className="text-black">3000 جم</h4>
          </div>
          <div className="flex items-end justify-between">
            <div className="flex items-center gap-[16px]">
              <Image
                src="/pr.webp"
                alt="Product"
                width={90}
                height={90}
                className="w-[90px] h-[90px] rounded-[17px]"
              />
              <div className="flex flex-col gap-[8px]">
                <p className="text-[#787878] text-[12px]">ليدات زينه</p>
                <h4 className="text-black text-[18px]">ليدات زينه واضاءه</h4>
                <p className="text-black text-[14px] font-[400]">الكميه : 1</p>
              </div>
            </div>
            <h4 className="text-black">3000 جم</h4>
          </div>
        </div>
        <div className="my-[24px] bg-[#DFDFDF] h-[1px] w-full"></div>
        <div className="flex flex-col gap-[13px]">
          <div className="flex items-center justify-between gap-[8px]">
            <h3 className="text-black text-[16px] font-[400]">
              المجموع الفرعي
            </h3>
            <p className="text-black text-[16px] font-[400]">6000 جم</p>
          </div>
          <div className="flex items-center justify-between gap-[8px]">
            <h3 className="text-black text-[16px] font-[400]">خدمه التركيب</h3>
            <p className="text-black text-[16px] font-[400]">50 جم</p>
          </div>
          <div className="flex items-center justify-between gap-[8px]">
            <h3 className="text-black text-[16px] font-[400]">الشحن</h3>
            <p className="text-black text-[16px] font-[400]">50 جم</p>
          </div>
        </div>
      </div>
    </>
  );
}
