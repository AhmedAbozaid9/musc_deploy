import { axios } from "@/lib/axios";

export const updateCartItem = async (product: string, quantity: number) => {
  const { data } = await axios.post(`/updateCart`, {
    product,
    quantity,
  });
  return data;
};
