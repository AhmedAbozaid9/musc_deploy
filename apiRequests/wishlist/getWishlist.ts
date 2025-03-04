import { axios } from "@/lib/axios";
import { ProductType } from "@/types/ProductType";

export const getWishlist = async (): Promise<ProductType[]> => {
  const { data } = await axios.get(`/getAllWishList`);
  if (data?.status === 404) {
    return [];
  }
  return data.wishList;
};
