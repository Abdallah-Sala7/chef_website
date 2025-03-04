import { createHeaders } from "@/utils/createHeaders";
import { FetchData } from "@/utils/request";
import { getData } from "@/utils/request-server";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { cookies } from "next/headers";
import OrdersContent from "./OrdersContent";

const page = async () => {
  const cookieStore = await cookies();
  const headers = createHeaders(cookieStore);

  const endpointOrders = "/user/orders";
  const propsOrders: FetchData = {
    endpoint: endpointOrders,
    config: { headers },
  };

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: [propsOrders],
    queryFn: () => getData(propsOrders),
  });

  return (
    <section className="section-style">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <OrdersContent />
      </HydrationBoundary>
    </section>
  );
};

export default page;
