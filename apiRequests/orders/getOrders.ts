import { axios } from "@/lib/axios";

interface AddressTypes {
  _id: string;
  addressTitle: string;
  detailedAddress: string;
}

interface ProductTypes {
  quantity: number;
}

export interface OrderTypes {
  orderId: string;
  orderNumber: string;
  totalOrderPrice: number;
  address: AddressTypes;
  products: ProductTypes[];
  createdAt: string;
  orderStatus: string;
}

export const getOrders = async (): Promise<OrderTypes[]> => {
  const { data } = await axios.get("/getAllOrders");
  return data.orders;
};
