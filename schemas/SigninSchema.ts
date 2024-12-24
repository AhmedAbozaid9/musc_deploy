import { z } from "zod";

export const SigninSchema = z.object({
  email: z.string().email("البريد الإلكتروني غير صالح"),
  password: z.string().nonempty("كلمة المرور مطلوبة"),
});
export type SigninFormTypes = z.infer<typeof SigninSchema>;
