import { axios } from "@/lib/axios";

export const addToCart = async (productId: string, quantity: number) => {
  const { data } = await axios.post("/addToCart", {
    productId,
    quantity,
  });
  return data;
};
