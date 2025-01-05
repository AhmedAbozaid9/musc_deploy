"use client";
import { addAddress } from "@/apiRequests/address/addAddress";
import { updateAddress } from "@/apiRequests/address/updateAddress";
import { AddressFormTypes, AddressSchema } from "@/schemas/AddressSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import WhiteArrow from "../Icons/WhiteArrow";
import { Button } from "../ui/button";
import { Dialog, DialogContent } from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface AddAddressFormProps {
  showForm: boolean;
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
  refetch: () => void;
  id?: string;
  fullName?: string;
  phoneNumber?: string;
  detailedAddress?: string;
}

const AddAddressForm = ({
  showForm,
  setShowForm,
  refetch,
  fullName,
  phoneNumber,
  detailedAddress,
  id,
}: AddAddressFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddressFormTypes>({
    resolver: zodResolver(AddressSchema),
  });

  const handleAddAddress = async (data: AddressFormTypes) => {
    try {
      await addAddress(data);
      setShowForm(false);
      toast.success("تمت الاضافة بنجاح");
      refetch();
    } catch (error) {
      toast.error("حدث خطأ");
    }
  };
  const handleUpdateAddress = async (data: AddressFormTypes) => {
    try {
      await updateAddress(data, id as string);
      setShowForm(false);
      toast.success("تم التعديل بنجاح");
      refetch();
    } catch (error) {
      toast.error("حدث خطأ");
    }
  };

  const onSubmit = (data: AddressFormTypes) => {
    if (fullName && phoneNumber && detailedAddress) {
      handleUpdateAddress(data);
    } else {
      handleAddAddress(data);
    }
  };

  return (
    <Dialog open={showForm} onOpenChange={setShowForm}>
      <DialogContent
        className="flex flex-col justify-center items-center text-right"
        dir="rtl"
      >
        <h2 className="text-xl sm:text-2xl font-semibold">
          {fullName ? "تعديل العنوان" : "إضافة عنوان جديد"}
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/** Row 1: Full Name & Phone Number */}
          <div className="flex flex-wrap gap-4">
            <div className="flex-1">
              <Label htmlFor="fullName">الاسم الكامل</Label>
              <Input
                defaultValue={fullName}
                className="mt-2"
                id="fullName"
                {...register("fullName")}
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm">
                  {errors.fullName.message}
                </p>
              )}
            </div>
            <div className="flex-1">
              <Label htmlFor="phoneNumber">رقم الهاتف</Label>
              <Input
                defaultValue={phoneNumber}
                type="numberp"
                className="mt-2"
                id="phoneNumber"
                {...register("phoneNumber")}
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-sm">
                  {errors.phoneNumber.message}
                </p>
              )}
            </div>
          </div>

          {/** Row 2: Alternative Phone Number & Region */}
          <div className="flex flex-wrap gap-4">
            <div className="flex-1">
              <Label htmlFor="alternativePhoneNumber">رقم هاتف بديل</Label>
              <Input
                type="number"
                id="alternativePhoneNumber"
                {...register("alternativePhoneNumber")}
              />
              {errors.alternativePhoneNumber && (
                <p className="text-red-500 text-sm">
                  {errors.alternativePhoneNumber.message}
                </p>
              )}
            </div>
            <div className="flex-1">
              <Label htmlFor="region">المنطقة</Label>
              <Input className="mt-2" id="region" {...register("region")} />
              {errors.region && (
                <p className="text-red-500 text-sm">{errors.region.message}</p>
              )}
            </div>
          </div>

          {/** Row 3: Address Title & Detailed Address */}
          <div className="flex flex-wrap gap-4">
            <div className="flex-1">
              <Label htmlFor="addressTitle">اسم العنوان</Label>
              <Input
                className="mt-2"
                id="addressTitle"
                {...register("addressTitle")}
              />
              {errors.addressTitle && (
                <p className="text-red-500 text-sm">
                  {errors.addressTitle.message}
                </p>
              )}
            </div>
            <div className="flex-1">
              <Label htmlFor="detailedAddress">العنوان التفصيلي</Label>
              <Input
                defaultValue={detailedAddress}
                className="mt-2"
                id="detailedAddress"
                {...register("detailedAddress")}
              />
              {errors.detailedAddress && (
                <p className="text-red-500 text-sm">
                  {errors.detailedAddress.message}
                </p>
              )}
            </div>
          </div>

          {/** Row 4: Building Number & Floor Number */}
          <div className="flex flex-wrap gap-4">
            <div className="flex-1">
              <Label htmlFor="buildingNumber">رقم المبنى</Label>
              <Input
                type="number"
                className="mt-2"
                id="buildingNumber"
                {...register("buildingNumber")}
              />
              {errors.buildingNumber && (
                <p className="text-red-500 text-sm">
                  {errors.buildingNumber.message}
                </p>
              )}
            </div>
            <div className="flex-1">
              <Label htmlFor="floorNumber">رقم الطابق</Label>
              <Input
                type="number"
                className="mt-2"
                id="floorNumber"
                {...register("floorNumber")}
              />
              {errors.floorNumber && (
                <p className="text-red-500 text-sm">
                  {errors.floorNumber.message}
                </p>
              )}
            </div>
          </div>

          {/** Row 5: Apartment Number & Landmark */}
          <div className="flex flex-wrap gap-4">
            <div className="flex-1">
              <Label htmlFor="apartmentNumber">رقم الشقة</Label>
              <Input
                type="number"
                className="mt-2"
                id="apartmentNumber"
                {...register("apartmentNumber")}
              />
              {errors.apartmentNumber && (
                <p className="text-red-500 text-sm">
                  {errors.apartmentNumber.message}
                </p>
              )}
            </div>
            <div className="flex-1">
              <Label htmlFor="landmark">علامة مميزة</Label>
              <Input className="mt-2" id="landmark" {...register("landmark")} />
              {errors.landmark && (
                <p className="text-red-500 text-sm">
                  {errors.landmark.message}
                </p>
              )}
            </div>
          </div>

          {/** Row 6: Country Code */}
          <div className="flex flex-wrap gap-4">
            <div className="flex-1">
              <Label htmlFor="countryCode">كود الدولة</Label>
              <Input
                className="mt-2"
                id="countryCode"
                {...register("countryCode")}
              />
              {errors.countryCode && (
                <p className="text-red-500 text-sm">
                  {errors.countryCode.message}
                </p>
              )}
            </div>
          </div>

          {/** Submit Button */}
          <Button dir="ltr" className="bg-primary text-secondary w-full">
            <WhiteArrow /> حفظ
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddAddressForm;
