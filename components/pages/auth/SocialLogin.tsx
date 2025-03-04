import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const SocialLogin = () => {
  return (
    <section className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <hr className="border-gray-200 w-full" />
        <p className="text-center ">او</p>
        <hr className="border-gray-200 w-full" />
      </div>
      <Link
        className="w-full"
        target="_blank"
        href="https://matgary-tzmd.vercel.app/api/v1/google"
      >
        <Button type="button" className="bg-secondary text-primary w-full px-4">
          تسجيل الدخول بواسطة جوجل
          <Image src="/googleLogo.svg" alt="google" width={32} height={32} />
        </Button>
      </Link>
      <Link
        target="_blank"
        href="https://matgary-tzmd.vercel.app/api/v1/facebook"
      >
        <Button type="button" className="bg-secondary text-primary w-full px-4">
          تسجيل الدخول بواسطة فيسبوك
          <Image
            src="/facebooklogo.svg"
            alt="facebook"
            width={32}
            height={32}
          />
        </Button>
      </Link>
    </section>
  );
};

export default SocialLogin;
