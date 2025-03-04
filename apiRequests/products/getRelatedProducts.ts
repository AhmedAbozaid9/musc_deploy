import { axios } from "@/lib/axios";

export const getRelatedProducts = async (productId: string) => {
  const { data } = await axios.get(`/relatedProduct/${productId}`);
  return data;
};
