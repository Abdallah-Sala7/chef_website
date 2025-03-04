"use client";

import OrderCard from "@/components/common/OrderCard";
import LoadingPage from "@/components/loading/LoadingPage";
import { useGetData } from "@/hooks/useFetch";
import { IOrder } from "@/interfaces/order";
import { createHeaders } from "@/utils/createHeaders";

const OrdersContent = () => {
  const headers = createHeaders();

  const endpoint = "/user/orders";
  const { data, isLoading } = useGetData({
    endpoint,
    config: { headers },
  });

  const orders = data?.status === "success" ? (data?.data as IOrder[]) : [];
  
  if (isLoading) return <LoadingPage />
  

  return (
    <div className="container">
      <h2 className="title font-bold mb-10">Orders</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {orders?.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
};

export default OrdersContent;
