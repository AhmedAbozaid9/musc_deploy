import { axios } from "@/lib/axios";

interface CouponData {
  appliedCoupon: string;
  discount: number;
  totalPrice: number;
  totalPriceAfterDiscount: number;
  installationPrice: number;
}

export const applyPromoCode = async (code: string): Promise<CouponData> => {
  const response = await axios.post("/applyCoupon", { code });
  return response.data.data;
};
