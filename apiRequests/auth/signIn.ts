import { axios } from "@/lib/axios";
import { UserTypes } from "@/store/useAuthStore";

interface SignInTypes {
  email: string;
  password: string;
}

export const signIn = async (data: SignInTypes): Promise<UserTypes> => {
  const response = await axios.post("signIn", { ...data });
  return response.data.data;
};
