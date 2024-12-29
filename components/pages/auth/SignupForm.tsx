import WhiteArrow from "@/components/Icons/WhiteArrow";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SignupFormTypes, SignupSchema } from "@/schemas/SignupSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";

interface SignupFormProps {
  handleSignup: (data: SignupFormTypes) => Promise<void>;
}

const SignupForm = ({ handleSignup }: SignupFormProps) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormTypes>({
    resolver: zodResolver(SignupSchema),
  });
  return (
    <form
      onSubmit={handleSubmit(handleSignup)}
      dir="rtl"
      className="mt-6 flex flex-col gap-4"
    >
      <div>
        <Label>أسم المستخدم</Label>
        <Input {...register("username")} className="mt-2" />
        {errors.username && (
          <p className="text-sm mt-2 text-red-400">{errors.username.message}</p>
        )}
      </div>
      <div>
        <Label>البريد الالكتروني </Label>
        <Input {...register("email")} type="email" className="mt-2" />
        {errors.email && (
          <p className="text-sm mt-2 text-red-400">{errors.email.message}</p>
        )}
      </div>
      <div>
        <Label>رقم الهاتف </Label>
        <Input {...register("phoneNumber")} type="tel" className="mt-2" />
        {errors.phoneNumber && (
          <p className="text-sm mt-2 text-red-400">
            {errors.phoneNumber.message}
          </p>
        )}
      </div>
      <div>
        <Label>السن </Label>
        <Input
          {...register("age")}
          type="number"
          min={14}
          max={100}
          className="mt-2"
        />
        {errors.age && (
          <p className="text-sm mt-2 text-red-400">{errors.age.message}</p>
        )}
      </div>
      <div>
        <Label>كلمة السر </Label>
        <div className="relative">
          <Input
            {...register("password")}
            type={showPassword ? "text" : "password"}
            className="mt-2"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-3 left-2"
          >
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>
        {errors.password && (
          <p className="text-sm mt-2 text-red-400">{errors.password.message}</p>
        )}
      </div>
      <Button className="bg-primary text-secondary w-full">
        اشتراك <WhiteArrow />
      </Button>
    </form>
  );
};

export default SignupForm;
