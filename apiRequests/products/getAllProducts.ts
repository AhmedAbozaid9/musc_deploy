import { axios } from "@/lib/axios";

export const getAllProducts = async (id: string) => {
  const response = await axios.get(`getAllProduct/${id}`);
  return response.data.result;
};
