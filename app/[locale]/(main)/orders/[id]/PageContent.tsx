"use client";

import Card from "@/components/common/Card";
import OrderCard from "@/components/common/OrderCard";
import LoadingPage from "@/components/loading/LoadingPage";
import { Button } from "@/components/ui/button";
import { useGetData } from "@/hooks/useFetch";
import { IOrder } from "@/interfaces/order";
import { createHeaders } from "@/utils/createHeaders";
import Image from "next/image";
import { redirect, useParams } from "next/navigation";

const PageContent = () => {
  const params = useParams();
  const headers = createHeaders();

  const endpoint = `/user/orders/${params.id}`;
  const { data, isLoading } = useGetData({
    endpoint,
    config: { headers },
  });

  const order = data?.status === "success" ? (data?.data as IOrder) : null;

  if (isLoading) return <LoadingPage />;

  if (!order) {
    return redirect("/orders");
  }

  return (
    <div className="container">
      <h2 className="title font-bold mb-10">Order Offers</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="h-fit">
          <OrderCard order={order} />
        </div>
        <Card className="w-full py-6 space-y-6">
          <div className="space-y-2 max-w-md mx-auto text-center">
            <h3 className="title text-primary">Chef Offers on Your Requests</h3>
            <p className="desc">
              Review and compare offers from chefs who have accepted your
              request, and choose the perfect fit for your event.
            </p>
          </div>

          <div className="space-y-3">
            <div className="p-4 rounded-lg border flex items-center gap-4">
              <Image
                src={"/specialization/seafood.jpeg"}
                alt="chef"
                width={50}
                height={50}
                quality={100}
                className="w-12 h-12 rounded-full"
              />

              <div>
                <p className="font-semibold text-primary">Chef Name</p>
                <p className="text-sm text-gray-600">From 4 minutes</p>
              </div>

              <div className="flex-1 flex justify-end">
                <Button variant={"link"} className="text-base font-semibold">
                  Cheek Offer
                </Button>
              </div>
            </div>

            <div className="p-4 rounded-lg border flex items-center gap-4">
              <Image
                src={"/specialization/seafood.jpeg"}
                alt="chef"
                width={50}
                height={50}
                quality={100}
                className="w-12 h-12 rounded-full"
              />

              <div>
                <p className="font-semibold text-primary">Chef Name</p>
                <p className="text-sm text-gray-600">From 4 minutes</p>
              </div>

              <div className="flex-1 flex justify-end">
                <Button variant={"link"} className="text-base font-semibold">
                  Cheek Offer
                </Button>
              </div>
            </div>

            <div className="p-4 rounded-lg border flex items-center gap-4">
              <Image
                src={"/specialization/seafood.jpeg"}
                alt="chef"
                width={50}
                height={50}
                quality={100}
                className="w-12 h-12 rounded-full"
              />

              <div>
                <p className="font-semibold text-primary">Chef Name</p>
                <p className="text-sm text-gray-600">From 4 minutes</p>
              </div>

              <div className="flex-1 flex justify-end">
                <Button variant={"link"} className="text-base font-semibold">
                  Cheek Offer
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PageContent;
