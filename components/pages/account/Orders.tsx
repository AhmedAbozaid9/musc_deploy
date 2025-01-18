import { OrderTypes } from "@/apiRequests/orders/getOrders";
import ArrowLeft from "@/components/Icons/account/ArrowLeft";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";
interface OrdersProps {
  orders?: OrderTypes[];
  slug?: string;
  setSlug?: React.Dispatch<React.SetStateAction<string>>;
}

const Orders = ({ orders, slug, setSlug }: OrdersProps) => {
  return (
    <div>
      {slug === "account" && setSlug && (
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold mb-4">الطلبات</h3>
          <button
            onClick={() => setSlug("orders")}
            className="text-[#A9A9A9] flex items-center gap-2"
          >
            كل الطلبات
            <ArrowLeft />
          </button>
        </div>
      )}
      {orders ? (
        <Table>
          <TableHeader className="!rounded-3xl">
            <TableRow className=" border-b-0 ">
              <TableHead className="text-right text-[#A5A5A5]">
                رقم الطلب
              </TableHead>
              <TableHead className="text-right text-[#A5A5A5]">
                اجمالي الدفع
              </TableHead>
              <TableHead className="text-right text-[#A5A5A5]">
                العنوان
              </TableHead>
              <TableHead className="text-right text-[#A5A5A5]">
                المنتجات
              </TableHead>
              <TableHead className="text-right text-[#A5A5A5]">
                التاريخ
              </TableHead>
              <TableHead className="text-right text-[#A5A5A5]">
                الحالة
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow
                key={order.orderNumber}
                className="!rounded-3xl my-[18px]"
              >
                <TableCell>{order.orderNumber}</TableCell>
                <TableCell>{order.totalOrderPrice} EGP</TableCell>
                <TableCell>{order.address.addressTitle}</TableCell>
                <TableCell>{order.products.length}</TableCell>
                <TableCell>
                  {new Date(order.createdAt).toLocaleString()}
                </TableCell>
                <TableCell className="text-[#0DA47A]">
                  {order.orderStatus}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <p>لا توجد طلبات</p>
      )}
    </div>
  );
};

export default Orders;
