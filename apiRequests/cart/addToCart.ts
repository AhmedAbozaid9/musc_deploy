import { axios } from "@/lib/axios";

export const addToCart = async (
  productId: string,
  color: string,
  quantity: number
) => {
  const { data } = await axios.post("/createCart", {
    product: productId,
    selectedColor: color,
    quantity: quantity,
  });
  return data;
};
