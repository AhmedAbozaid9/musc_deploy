import { signIn } from "@/apiRequests/auth/signIn";
import { signUp } from "@/apiRequests/auth/signUp";
import SignInForm from "@/components/pages/auth/SignInForm";
import SignupForm from "@/components/pages/auth/SignupForm";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SigninFormTypes } from "@/schemas/SigninSchema";
import { SignupFormTypes } from "@/schemas/SignupSchema";
import { useAuthStore } from "@/store/useAuthStore";
import React from "react";
import toast from "react-hot-toast";

interface MainAuthProps {
  showSignup: boolean;
  setShowSignup: React.Dispatch<React.SetStateAction<boolean>>;
}

const MainAuth = ({ showSignup, setShowSignup }: MainAuthProps) => {
  const setUser = useAuthStore((state) => state.setUser);
  const handleSignup = async (data: SignupFormTypes) => {
    try {
      const response = await signUp({ ...data, age: parseInt(data.age) });
      toast.success("تفقد بريدك الالكتروني  ");
      setShowSignup(false);
    } catch (err) {
      toast.error("حدث خطأ");
      console.log(err);
    }
  };
  const handeSignin = async (data: SigninFormTypes) => {
    try {
      const response = await signIn(data);
      toast.success("تم تسحيل الدخول");
      setUser(response);
      setShowSignup(false);
    } catch (err) {
      toast.error("حدث خطأ");
      console.log(err);
    }
  };

  return (
    <Dialog open={showSignup} onOpenChange={setShowSignup}>
      <DialogContent className=" flex flex-col justify-center items-center ">
        <Tabs defaultValue="signin" className="mt-3 w-full">
          <TabsList className=" w-full flex justify-center rounded-full bg-black">
            <TabsTrigger value="signup" className="w-full rounded-full">
              اشتراك
            </TabsTrigger>
            <TabsTrigger value="signin" className="w-full rounded-full ">
              تسجيل الدخول
            </TabsTrigger>
          </TabsList>
          <TabsContent value="signin">
            <SignInForm handleSignin={handeSignin} />
          </TabsContent>
          <TabsContent value="signup">
            <SignupForm handleSignup={handleSignup} />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default MainAuth;
