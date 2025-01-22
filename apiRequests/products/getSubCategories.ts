import { axios } from "@/lib/axios";
export interface SubCategoryRespone {
  status: string;
  message: string;
  result: SubCategoryType[];
}
export interface SubCategoryType {
  _id: string;
  title: string;
  slug: string;
  category: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export const getSubCategories = async (
  id: string
): Promise<SubCategoryRespone> => {
  const res = await axios.get(`/getAllSubCategories/${id}`);
  return res.data;
};
