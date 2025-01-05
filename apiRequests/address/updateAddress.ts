import { axios } from "@/lib/axios";
import { AddressFormTypes } from "@/schemas/AddressSchema";

export const updateAddress = async (data: AddressFormTypes, id: string) => {
  const response = await axios.post(`/updateAddress/${id}`, data);
  return response.data.data;
};
