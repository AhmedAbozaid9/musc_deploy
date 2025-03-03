import { axios } from "@/lib/axios";
import { UserTypes } from "@/store/useAuthStore";

interface SignUpTypes {
  age: number;
  username: string;
  phoneNumber: string;
  email: string;
  password: string;
}

export const getUser = async (): Promise<UserTypes> => {
  const response = await axios.post("getUserProfile");
  return response.data.data;
};
