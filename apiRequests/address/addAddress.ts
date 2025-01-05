import { axios } from "@/lib/axios";
import { AddressFormTypes } from "@/schemas/AddressSchema";

export const addAddress = async (data: AddressFormTypes) => {
  const response = await axios.post("/addAddress", data);
  return response.data.data;
};
