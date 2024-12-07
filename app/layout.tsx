import type { Metadata } from "next";
import "./globals.css";
import { Alexandria } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Toaster } from "react-hot-toast";
const alexandria = Alexandria({ subsets: ["arabic"] });
export const metadata: Metadata = {
  title: {
    template: "%s | متجري ",
    default: "متجري",
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
        <Header />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
