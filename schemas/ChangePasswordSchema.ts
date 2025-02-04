import { z } from "zod";

export const ChangePasswordSchema = z
  .object({
    oldPassword: z
      .string()
      .min(8, "يجب أن تكون كلمة المرور القديمة مكونة من 8 أحرف على الأقل."),
    newPassword: z
      .string()
      .min(8, "يجب أن تكون كلمة المرور الجديدة مكونة من 8 أحرف على الأقل.")
      .regex(
        /[A-Z]/,
        "يجب أن تحتوي كلمة المرور الجديدة على حرف كبير واحد على الأقل."
      )
      .regex(
        /[!@#$%^&*(),.?":{}|<>_]/,
        "يجب أن تحتوي كلمة المرور الجديدة على حرف خاص واحد على الأقل."
      ),
    repeatNewPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.repeatNewPassword, {
    message: "يجب أن تتطابق كلمة المرور الجديدة مع تأكيد كلمة المرور.",
    path: ["repeatNewPassword"], // Points the error to repeatNewPassword
  });

export default ChangePasswordSchema;

export type ChangePasswordFormTypes = z.infer<typeof ChangePasswordSchema>;
