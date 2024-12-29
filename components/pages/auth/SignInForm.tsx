import WhiteArrow from "@/components/Icons/WhiteArrow";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SigninFormTypes, SigninSchema } from "@/schemas/SigninSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";

interface SigninFormProps {
  handleSignin: (data: SigninFormTypes) => Promise<void>;
}

const SigninForm = ({ handleSignin }: SigninFormProps) => {
  const [showPassword, setShowPassword] = React.useState(false);
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
        تسجيل الدخول <WhiteArrow />
      </Button>
    </form>
  );
};

export default SigninForm;
