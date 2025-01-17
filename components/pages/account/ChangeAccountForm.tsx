import WhiteArrow from "@/components/Icons/WhiteArrow";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import React from "react";

const ChangeAccountForm: React.FC = () => {
  return (
    <form className="flex flex-col py-6 w-full gap-4">
      <div className="flex gap-4 w-full">
        <div className="flex flex-col space-y-2 w-full">
          <Label htmlFor="oldPassword">رقم الهاتف</Label>
          <Input
            id="oldPassword"
            type="password"
            placeholder="رقم الهاتف"
            className="px-4 py-5"
          />
        </div>

        <div className="flex flex-col space-y-2 w-full">
          <Label htmlFor="newPassword">الاسم بالكامل</Label>
          <Input
            className="px-4 py-5"
            id="newPassword"
            type="password"
            placeholder="الاسم بالكامل"
          />
        </div>
      </div>

      <div className="flex flex-col max-lg:gap-2 w-full">
        <Label htmlFor="confirmPassword">البريد الالكتروني</Label>
        <div className="flex max-lg:flex-col justify-center lg:items-center gap-4 w-full">
          <Input
            id="confirmPassword"
            type="password"
            placeholder="البريد الالكتروني"
            className="px-4 py-5 lg:w-1/2"
          />
          <div className="flex lg:w-1/2">
            <Button className="bg-primary text-secondary w-1/2 ">
              حفظ التغيرات
              <WhiteArrow />
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ChangeAccountForm;
