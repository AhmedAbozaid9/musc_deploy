import { axios } from "@/lib/axios";

export const checkout = async (addressId: string) => {
  const response = await axios.post("/createCashOrder", { addressId });
  return response.data;
};
