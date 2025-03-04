import { axios } from "@/lib/axios";

export const removeFromWishlist = async (productId: string) => {
  const { data } = await axios.delete(`/removeFromWishList`, {
    data: { productId },
  });
  return data;
};
