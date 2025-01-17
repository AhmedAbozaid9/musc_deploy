import { changePassword } from "@/apiRequests/account/changePassword";
import WhiteArrow from "@/components/Icons/WhiteArrow";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ChangePasswordSchema, {
  ChangePasswordFormTypes,
} from "@/schemas/ChangePasswordSchema";
import { useAuthStore } from "@/store/useAuthStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const ChangePasswordForm: React.FC = () => {
  const user = useAuthStore((state) => state.user);
  const router = useRouter();
  console.log(user?._id);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ChangePasswordFormTypes>({
    resolver: zodResolver(ChangePasswordSchema),
  });
  const onSubmit = async (data: ChangePasswordFormTypes) => {
    try {
      await changePassword(
        user?._id as string,
        data.oldPassword,
        data.newPassword
      );
      toast.success("تم تغيير كلمة المرور");
      router.push("/");
    } catch (err) {
      toast.error("حدث خطاء");
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col py-6 sm:w-3/4 gap-6"
    >
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col space-y-2 w-full">
          <Label htmlFor="oldPassword">كلمة المرور القديمة</Label>
          <Input
            {...register("oldPassword")}
            id="oldPassword"
            type="password"
            placeholder="كلمة المرور القديمة"
            className="px-4 py-5"
          />
          <p className="text-sm text-red-400">{errors.oldPassword?.message}</p>
        </div>

        <div className="flex flex-col space-y-2 w-full">
          <Label htmlFor="newPassword"> كلمة المرور الجديدة</Label>
          <Input
            {...register("newPassword")}
            className="px-4 py-5"
            id="newPassword"
            type="password"
            placeholder="كلمة المرور الجديدة"
          />
          <p className="text-sm text-red-400">{errors.newPassword?.message}</p>
        </div>

        <div className="flex flex-col space-y-2 w-full">
          <Label htmlFor="repeatNewPassword">تأكيد كلمة المرور الجديدة</Label>
          <Input
            {...register("repeatNewPassword")}
            className="px-4 py-5"
            id="repeatNewPassword"
            type="password"
            placeholder="تأكيد كلمة المرور الجديدة"
          />
          <p className="text-sm text-red-400">
            {errors.repeatNewPassword?.message}
          </p>
        </div>
      </div>
      <Button className="bg-primary text-secondary w-1/2 max-lg:w-full">
        حفظ التغيرات
        <WhiteArrow />
      </Button>
    </form>
  );
};

export default ChangePasswordForm;
