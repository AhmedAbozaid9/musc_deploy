import { axios } from "@/lib/axios";
import { ProductType } from "@/types/ProductType";

export async function getSingleProduct(id: string): Promise<ProductType> {
  const { data } = await axios.get(`/getProductById/${id}`);
  return data.getProductById;
}
