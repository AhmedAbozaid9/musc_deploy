import { axios } from "@/lib/axios";

export type CartItemTypes = {
  productId: string;
  name: string; // needed
  selectedColor: string;
  price: number;
  quantity: number;
};

type CartTypes = {
  appliedCoupon: string | null;
  cartItems: CartItemTypes[];
  discount: number;
  installationPrice: number;
  shippingPrice: number;
  totalPrice: number;
  totalPriceAfterDiscount: number;
};

export const getCart = async (): Promise<CartTypes> => {
  const { data } = await axios.get("/getCart");
  return data.data;
};
