import { axios } from "@/lib/axios";

interface CategoryType {
  id: string;
  title: string;
  image: string;
}

export const getCategories = async (): Promise<CategoryType[]> => {
  const res = await axios.get("/getAllCategories");
  return res.data.result;
};
