import { axios } from "@/lib/axios";

export type CartItemTypes = {
  productId: string;
  title: string;
  selectedColor: string;
  price: number;
  quantity: number;
  imageCover: string;
  description: string;
};

export type CartTypes = {
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
