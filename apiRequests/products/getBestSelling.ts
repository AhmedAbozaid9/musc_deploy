import { axios } from "@/lib/axios";

interface ProductType {
  title: string;
  price: number;
  priceAfterDiscount: number;
  imageCover: string;
  discountPercentage: number;
  id: string;
}

export const getBestSelling = async (): Promise<ProductType[]> => {
  const res = await axios.get("/bestSelling");
  return res.data.products;
};
