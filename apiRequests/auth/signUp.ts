import { axios } from "@/lib/axios";

interface SignUpTypes {
  age: number;
  username: string;
  phoneNumbers: string;
  email: string;
  password: string;
}

export const signUp = async (data: SignUpTypes): Promise<void> => {
  const response = await axios.post("signUp", { ...data });
  return response.data;
};
