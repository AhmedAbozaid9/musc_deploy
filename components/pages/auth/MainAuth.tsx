import { signIn } from "@/apiRequests/auth/signIn";
import SignInForm from "@/components/pages/auth/SignInForm";
import SignupForm from "@/components/pages/auth/SignupForm";
import { SigninFormTypes } from "@/schemas/SigninSchema";
import { SignupFormTypes } from "@/schemas/SignupSchema";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import toast from "react-hot-toast";

interface MainAuthProps {
  showSignup: boolean;
  setShowSignup: React.Dispatch<React.SetStateAction<boolean>>;
}

const MainAuth = ({ showSignup, setShowSignup }: MainAuthProps) => {
  const handleSignup = async (data: SignupFormTypes) => {
    console.log(data);
  };
  const handeSignin = async (data: SigninFormTypes) => {
    try {
      const response = await signIn(data);
      toast.success("تم تسحيل الدخول");
    } catch (err) {
      toast.error("حدث خطأ");
      console.log(err);
    }
  };

  return (
    <Dialog open={showSignup} onOpenChange={setShowSignup}>
      <DialogTrigger>Open</DialogTrigger>
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
