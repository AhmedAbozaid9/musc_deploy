import { axios } from "@/lib/axios";
import { UserTypes } from "@/store/useAuthStore";

interface SignUpTypes {
  age: number;
  username: string;
  phoneNumber: string;
  email: string;
  password: string;
}

export const signUp = async (data: SignUpTypes): Promise<UserTypes> => {
  const response = await axios.post("signUp", { ...data });
  return response.data.data;
};
