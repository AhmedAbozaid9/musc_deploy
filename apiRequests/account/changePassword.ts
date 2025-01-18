import { axios } from "@/lib/axios";

export const changePassword = async (
  userId: string,
  oldPassword: string,
  newPassword: string
) => {
  const { data } = await axios.post(`/changePassword/${userId}`, {
    oldPassword,
    newPassword,
  });
  return data;
};
