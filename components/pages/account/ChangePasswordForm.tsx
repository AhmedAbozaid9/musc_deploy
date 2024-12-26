import WhiteArrow from "@/components/Icons/WhiteArrow";
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";

const ChangePasswordForm: React.FC = () => {
  return (
    <form className="flex flex-col py-6 sm:w-3/4 gap-6">
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col space-y-2 w-full">
          <Label htmlFor="oldPassword">كلمة المرور القديمة</Label>
          <Input
            id="oldPassword"
            type="password"
            placeholder="كلمة المرور القديمة"
            className="px-4 py-5"
          />
        </div>

        <div className="flex flex-col space-y-2 w-full">
          <Label htmlFor="newPassword">كلمة المرور الجديدة</Label>
          <Input
            className="px-4 py-5"
            id="newPassword"
            type="password"
            placeholder="كلمة المرور الجديدة"
          />
        </div>

        <div className="flex flex-col space-y-2 w-full">
          <Label htmlFor="newPassword">تأكيد كلمة المرور الجديدة</Label>
          <Input
            className="px-4 py-5"
            id="newPassword"
            type="password"
            placeholder="تأكيد كلمة المرور الجديدة"
          />
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
