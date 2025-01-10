import OrderCard from "@/components/common/OrderCard";
import { IOrder } from "@/interfaces/order";
import { createHeaders } from "@/utils/createHeaders";
import { getData } from "@/utils/request-server";
import { cookies } from "next/headers";

const page = async () => {
  const cookieStore = await cookies();
  const headers = createHeaders(cookieStore);

  const data = await getData({
    endpoint: "/user/orders",
    config: {
      headers,
    },
  });

  const orders = data?.status === "success" ? (data?.data as IOrder[]) : [];

  return (
    <section className="section-style">
      <div className="container">
        <h2 className="title font-bold mb-10">Orders</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {orders?.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;
