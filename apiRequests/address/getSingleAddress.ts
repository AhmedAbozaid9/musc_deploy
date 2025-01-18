import { axios } from "@/lib/axios";

interface AddressDetailsTypes {
  buildingDetails: {
    buildingNumber: string;
    floorNumber: string;
    apartmentNumber: string;
    landmark: string;
  };
  _id: string;
  user: string;
  fullName: string;
  phoneNumber: string;
  alternativePhoneNumber: string;
  countryCode: string;
  region: string;
  addressTitle: string;
  detailedAddress: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export const getSingleAddress = async (
  id: string,
): Promise<AddressDetailsTypes> => {
  const response = await axios.get(`getAddressById/${id}`);
  return response.data.address;
};
