import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Providers from "@/lib/providers";
import type { Metadata } from "next";
import { Alexandria } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
const alexandria = Alexandria({ subsets: ["arabic"] });
export const metadata: Metadata = {
  title: {
    template: "%s | Musc ",
    default: "Musc",
  },
  description: "كل احتياجاتك من اللالكترونيات بأقوى الخصومات",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${alexandria.className} antialiased`}>
        <Providers>
          <Header />
          {children}
          <Footer />
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
