import { z } from "zod";

export const AddressSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  phoneNumber: z
    .string()
    .min(10, "Phone number must be at least 10 characters")
    .regex(/^\d+$/, "Phone number must contain only digits"),
  alternativePhoneNumber: z.string().optional().nullable(),
  region: z.string().min(1, "Region is required"),
  addressTitle: z.string().min(1, "Address title is required"),
  detailedAddress: z.string().min(1, "Detailed address is required"),
  buildingNumber: z
    .string()
    .min(1, "Building number is required")
    .regex(/^\d+$/, "Building number must be numeric"),
  floorNumber: z
    .string()
    .min(1, "Floor number is required")
    .regex(/^\d+$/, "Floor number must be numeric"),
  apartmentNumber: z
    .string()
    .min(1, "Apartment number is required")
    .regex(/^\d+$/, "Apartment number must be numeric"),
  landmark: z.string().optional(),
  countryCode: z
    .string()
    .regex(
      /^\+\d+$/,
      "Country code must start with '+' and be followed by digits"
    ),
});

export type AddressFormTypes = z.infer<typeof AddressSchema>;
