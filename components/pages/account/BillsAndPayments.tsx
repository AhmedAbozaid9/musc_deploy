import ArrowLeft from "@/components/Icons/account/ArrowLeft";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
interface BillsProps {
  slug?: string;
  setSlug?: React.Dispatch<React.SetStateAction<string>>;
}

const BillsAndPayments = ({ slug, setSlug }: BillsProps) => {
  return (
    <div className="w-full">
      {slug === "account" && setSlug && (
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold mb-4">الدفع و الفواتير</h3>
          <button
            onClick={() => setSlug("orders")}
            className="text-[#A9A9A9] flex items-center gap-2"
          >
            كل الفواتير
            <ArrowLeft />
          </button>
        </div>
      )}
      <Table>
        <TableHeader className="!rounded-3xl">
          <TableRow className=" border-b-0 ">
            <TableHead className="text-right text-[#A5A5A5]">
              رقم الطلب
            </TableHead>
            <TableHead className="text-right text-[#A5A5A5]">
              اجمالي الدفع
            </TableHead>
            <TableHead className="text-right text-[#A5A5A5]">العنوان</TableHead>
            <TableHead className="text-right text-[#A5A5A5]">
              المنتجات
            </TableHead>
            <TableHead className="text-right text-[#A5A5A5]">التاريخ</TableHead>
            <TableHead className="text-right text-[#A5A5A5]">الحالة</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="!rounded-3xl my-[18px]">
            <TableCell>10000001</TableCell>
            <TableCell>1600 EGP</TableCell>
            <TableCell>المنزل</TableCell>
            <TableCell>اسم المنتج</TableCell>
            <TableCell>12-2-2024 </TableCell>
            <TableCell className="text-[#0DA47A]">تم التوصيل </TableCell>
          </TableRow>
          <TableRow className="!rounded-3xl">
            <TableCell>10000001</TableCell>
            <TableCell>1600 EGP</TableCell>
            <TableCell>المنزل</TableCell>
            <TableCell>اسم المنتج</TableCell>
            <TableCell>12-2-2024 </TableCell>
            <TableCell className="text-[#0DA47A]">تم التوصيل </TableCell>
          </TableRow>
          <TableRow className="!rounded-3xl">
            <TableCell>10000001</TableCell>
            <TableCell>1600 EGP</TableCell>
            <TableCell>المنزل</TableCell>
            <TableCell>اسم المنتج</TableCell>
            <TableCell>12-2-2024 </TableCell>
            <TableCell className="text-[#0DA47A]">تم التوصيل </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default BillsAndPayments;
