import SignInForm from "@/components/pages/auth/SignInForm";
import SignupForm from "@/components/pages/auth/SignupForm";
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

interface MainAuthProps {
  showSignup: boolean;
  setShowSignup: React.Dispatch<React.SetStateAction<boolean>>;
}

const MainAuth = ({ showSignup, setShowSignup }: MainAuthProps) => {
  return (
    <Dialog open={showSignup} onOpenChange={setShowSignup}>
      <DialogTrigger>Open</DialogTrigger>
      <DialogContent className=" flex flex-col justify-center items-center">
        <DialogHeader></DialogHeader>
        <Tabs defaultValue="signin" className="w-[400px]">
          <TabsList className=" w-full flex justify-center rounded-full bg-black">
            <TabsTrigger value="signin" className="w-full rounded-full">
              اشتراك
            </TabsTrigger>
            <TabsTrigger value="signup" className="w-full rounded-full ">
              تسجيل الدخول
            </TabsTrigger>
          </TabsList>
          <TabsContent value="signin">
            <SignInForm />
          </TabsContent>
          <TabsContent value="signup">
            <SignupForm />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default MainAuth;
