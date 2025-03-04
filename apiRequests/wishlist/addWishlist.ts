import { axios } from "@/lib/axios";

export const addWishlist = async (productId: string) => {
  const { data } = await axios.post(`/addToWishList`, {
    productId: productId,
  });
  return data;
};
