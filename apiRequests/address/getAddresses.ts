import { axios } from "@/lib/axios";

export interface AddressTypes {
  detailedAddress: string;
  fullName: string;
  phoneNumber: string;
  _id: string;
}

export const getAddresses = async (): Promise<AddressTypes[]> => {
  const response = await axios.get(`/getAllAddresses`);
  return response.data.data;
};
