import { axios } from "@/lib/axios";

interface SignInTypes {
  email: string;
  password: string;
}

export const signIn = async (data: SignInTypes): Promise<any> => {
  const response = await axios.post("signIn", { ...data });
  return response.data.data;
};
