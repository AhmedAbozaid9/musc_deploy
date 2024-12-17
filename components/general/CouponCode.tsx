import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function CouponCode() {
  return (
    <>
      <form>
        <div className="flex relative">
          <Input
            type="text"
            placeholder="ادخل الكود"
            className="bg-transparent text-primary p-[24px] rounded-[44px] font-[300] text-[16px] lg:min-w-[360px] "
          />
          <Button
            className="bg-primary text-secondary text-center px-[32px]"
            style={{ minWidth: "fit-content" }}
          >
            تطبيق
          </Button>
        </div>
      </form>
    </>
  );
}
