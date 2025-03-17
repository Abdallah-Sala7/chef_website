"use client";

import OrderCard from "@/components/common/OrderCard";
import LoadingPage from "@/components/loading/LoadingPage";
import { Button } from "@/components/ui/button";
import { useGetData } from "@/hooks/useFetch";
import { IOrder } from "@/interfaces/order";
import { createHeaders } from "@/utils/createHeaders";
import { ShoppingBasketIcon } from "lucide-react";
import Link from "next/link";

const OrdersContent = () => {
  const headers = createHeaders();

  const endpoint = "/user/orders";
  const { data, isLoading } = useGetData({
    endpoint,
    config: { headers },
  });

  const orders = data?.status === "success" ? (data?.data as IOrder[]) : [];

  if (isLoading) return <LoadingPage />;

  return (
    <div className="container">
      <h2 className="title font-bold mb-10">Orders</h2>

      {orders?.length === 0 && (
        <div className="max-w-md aspect-[16/9] mx-auto bg-muted p-4 rounded-xl flex flex-col items-center justify-center gap-2">
          <ShoppingBasketIcon className="text-muted-foreground" size={50} />
          <p className="text-lg font-semibold">No orders found</p>

          <div className="pt-2">
            <Link href={"/new-order"}>
              <Button size={"sm"} className="px-6">
                Book Now
              </Button>
            </Link>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {orders?.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
};

export default OrdersContent;
