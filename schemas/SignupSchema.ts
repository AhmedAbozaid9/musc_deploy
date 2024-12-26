import { z } from "zod";

export const SignupSchema = z.object({
  username: z.string().nonempty("الاسم مطلوب"),
  phoneNumber: z.string().nonempty("رقم الهاتف مطلوب"),
  age: z.string().nonempty("العمر مطلوب"),
  email: z.string().email("البريد الإلكتروني غير صالح"),
  password: z
    .string()
    .min(8, "يجب أن تحتوي كلمة المرور على 8 أحرف على الأقل")
    .regex(/[A-Z]/, "يجب أن تحتوي كلمة المرور على حرف كبير واحد على الأقل")
    .regex(/[a-z]/, "يجب أن تحتوي كلمة المرور على حرف صغير واحد على الأقل")
    .regex(/[0-9]/, "يجب أن تحتوي كلمة المرور على رقم واحد على الأقل")
    .regex(
      /[@$!%*?&#_]/,
      "يجب أن تحتوي كلمة المرور على رمز خاص واحد على الأقل",
    ),
});
export type SignupFormTypes = z.infer<typeof SignupSchema>;
