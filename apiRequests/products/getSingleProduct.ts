import { axios } from "@/lib/axios";

interface InstallationService {
  name: string;
  selected: boolean;
  price: number;
}

export interface SingleProductTypes {
  installationService: InstallationService;
  _id: string;
  title: string;
  slug: string;
  description: string;
  price: number;
  priceAfterDiscount: number;
  imageCover: string;
  images: string[];
  sold: number;
  quantity: number;
  colors: string[];
  availability: boolean;
  category: string;
  subCategory: string;
  discountPercentage: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
  id: string;
}

export async function getSingleProduct(
  id: string
): Promise<SingleProductTypes> {
  const { data } = await axios.get(`/getProductById/${id}`);
  return data.getProductById;
}
