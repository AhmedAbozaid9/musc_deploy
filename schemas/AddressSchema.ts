import { z } from "zod";

export const AddressSchema = z.object({
  fullName: z.string().min(1, "الاسم الكامل مطلوب"),
  phoneNumber: z
    .string()
    .min(10, "يجب أن يكون رقم الهاتف 10 أحرف على الأقل")
    .regex(/^\d+$/, "يجب أن يحتوي رقم الهاتف على أرقام فقط"),
  alternativePhoneNumber: z.string().optional().nullable(),
  region: z.string().min(1, "المنطقة مطلوبة"),
  addressTitle: z.string().min(1, "عنوان العنوان مطلوب"),
  detailedAddress: z.string().min(1, "العنوان التفصيلي مطلوب"),
  buildingNumber: z
    .string()
    .min(1, "رقم المبنى مطلوب")
    .regex(/^\d+$/, "يجب أن يكون رقم المبنى رقمياً"),
  floorNumber: z
    .string()
    .min(1, "رقم الطابق مطلوب")
    .regex(/^\d+$/, "يجب أن يكون رقم الطابق رقمياً"),
  apartmentNumber: z
    .string()
    .min(1, "رقم الشقة مطلوب")
    .regex(/^\d+$/, "يجب أن يكون رقم الشقة رقمياً"),
  landmark: z.string().optional(),
  countryCode: z
    .string()
    .regex(/^\+\d+$/, "يجب أن يبدأ رمز البلد بعلامة '+' ويليه أرقام"),
});

export type AddressFormTypes = z.infer<typeof AddressSchema>;
