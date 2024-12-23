import WhiteArrow from "@/components/Icons/WhiteArrow";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SigninFormTypes, SigninSchema } from "@/schemas/SigninSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";

interface SigninFormProps {
  handleSignin: (data: SigninFormTypes) => Promise<void>;
}

const SigninForm = ({ handleSignin }: SigninFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninFormTypes>({
    resolver: zodResolver(SigninSchema),
  });
  return (
    <form
      onSubmit={handleSubmit(handleSignin)}
      dir="rtl"
      className="mt-6 flex flex-col gap-4"
    >
      <div>
        <Label>البريد الالكتروني </Label>
        <Input {...register("email")} type="email" className="mt-2" />
        {errors.email && (
          <p className="text-sm mt-2 text-red-400">{errors.email.message}</p>
        )}
      </div>

      <div>
        <Label>كلمة السر </Label>
        <Input {...register("password")} type="password" className="mt-2" />
        {errors.password && (
          <p className="text-sm mt-2 text-red-400">{errors.password.message}</p>
        )}
      </div>
      <Button className="bg-primary text-secondary w-full">
        تسجيل الدخول <WhiteArrow />
      </Button>
    </form>
  );
};

export default SigninForm;
