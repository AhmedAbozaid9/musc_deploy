import { axios } from "@/lib/axios";
import { ProductType } from "@/types/ProductType";

export const getWishlist = async (): Promise<ProductType[]> => {
  const { data } = await axios.get(`/getAllWishList`);
  return data.wishList;
};
