import { axios } from "@/lib/axios";

export const deleteCartItem = async (productId: string) => {
  const { data } = await axios.delete(`/deleteCartItem`, {
    data: { productId },
  });
  return data;
};
