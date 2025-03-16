import { axios } from "@/lib/axios";

export const updateCartInstalling = async (
  product: string,
  installationServiceSelected: boolean
) => {
  const { data } = await axios.post(`/updateCart`, {
    product,
    installationServiceSelected,
  });
  return data;
};
