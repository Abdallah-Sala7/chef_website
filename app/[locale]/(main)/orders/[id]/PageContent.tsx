"use client";

import Card from "@/components/common/Card";
import OrderCard from "@/components/common/OrderCard";
import Status from "@/components/common/Status";
import LoadingPage from "@/components/loading/LoadingPage";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useGetData, usePostData } from "@/hooks/useFetch";
import { IOrder } from "@/interfaces/order";
import { createHeaders } from "@/utils/createHeaders";
import Image from "next/image";
import { redirect, useParams } from "next/navigation";
import { toast } from "react-toastify";

const PageContent = () => {
  const params = useParams();
  const headers = createHeaders();

  const endpoint = `/user/orders/${params.id}`;
  const offerEndpoint = `/user/offers`;

  const { data, isLoading } = useGetData({
    endpoint,
    config: { headers },
  });

  const { data: offersData } = useGetData({
    endpoint: offerEndpoint,
    config: { headers },
  });

  const order = data?.status === "success" ? (data?.data as IOrder) : null;

  console.log(offersData);
  

  if (isLoading) return <LoadingPage />;

  if (!order) {
    return redirect("/orders");
  }

  const offers = [
    {
      id: 1,
      order_id: 6,
      state: "pending",
      menu_id: 5,
      price: "250.00",
      menu: {
        id: 5,
        name: "20",
        min: 20,
        max: 20,
        average_price_two_guests: "20.00",
        average_price_six_guests: "20.00",
        average_price_twenty_guests: "20.00",
        plates: [
          { id: 1, name: "koshary", category: "Appetizer" },
          { id: 2, name: "abdallah", category: "Appetizer" },
        ],
        name_cuisine: "French",
      },
    },
    {
      id: 2,
      order_id: 6,
      state: "pending",
      menu_id: 5,
      price: "250.00",
      menu: {
        id: 5,
        name: "20",
        min: 20,
        max: 20,
        average_price_two_guests: "20.00",
        average_price_six_guests: "20.00",
        average_price_twenty_guests: "20.00",
        plates: [
          { id: 1, name: "koshary", category: "Appetizer" },
          { id: 2, name: "abdallah", category: "Appetizer" },
        ],
        name_cuisine: "French",
      },
    },
  ];

  return (
    <div className="container">
      <h2 className="title font-bold mb-10">Order Offers</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="h-fit">
          <OrderCard order={order} hasFooter={false} />
        </div>

        <Card className="w-full py-6 space-y-6 h-fit">
          <div className="space-y-2 max-w-md mx-auto text-center">
            <h3 className="title text-primary">Chef Offers on Your Requests</h3>
            <p className="desc">
              Review and compare offers from chefs who have accepted your
              request, and choose the perfect fit for your event.
            </p>
          </div>

          <div>
            <Accordion type="single" collapsible className="w-full space-y-3">
              {offers?.map((offer, i) => (
                <AccordionItem
                  className="border-b-0 "
                  value={"item-" + i}
                  key={i}
                >
                  <AccordionTrigger className="rounded-lg border flex items-center gap-4 w-full px-4 [&[data-state=open]]:border-b-0 [&[data-state=open]]:bg-gray-100/50 [&[data-state=open]]:rounded-b-none hover:no-underline [&_>svg]:hidden">
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
                      <Status status={offer?.state as keyof typeof Status} />
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="p-4 border border-t-0 bg-gray-50/50">
                    <div className="space-y-3">
                      <p className="title-base">
                        Price :{" "}
                        <span className="text-gray-500">
                          {offer?.price} ADE
                        </span>
                      </p>

                      <p className="title-sm">
                        Menu :{" "}
                        <span className="text-gray-500">
                          {offer?.menu?.name}
                        </span>
                      </p>

                      <p className="title-sm">
                        Cuisine :{" "}
                        <span className="text-gray-500">
                          {offer?.menu?.name_cuisine}
                        </span>
                      </p>

                      <p className="title-sm">
                        Plates :{" "}
                        <span className="text-gray-500">
                          {offer?.menu?.plates?.map((p) => p?.name).join(", ")}
                        </span>
                      </p>

                      {order?.state === "open" && (
                        <div className="flex justify-between gap-4">
                          <RejectBtn offerId={offer?.id} />

                          <AcceptBtn offerId={offer?.id} />
                        </div>
                      )}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PageContent;

const AcceptBtn = ({ offerId }: { offerId: number }) => {
  const { mutateAsync, status } = usePostData({
    endpoint: `/user/offers/accept/${offerId}`,
  });

  const handleAccept = async () => {
    const res = (await mutateAsync({})) as any;

    if (res.status === "fail") {
      toast.error(res.message || "An error occurred Accepting offer");
    } else if (res.status === "success") {
      toast.success("Offer accepted successfully");
    }
  };

  return (
    <Button
      type="button"
      className="flex-1"
      onClick={handleAccept}
      disabled={status === "pending"}
    >
      <span>Accept Offer</span>
    </Button>
  );
};

const RejectBtn = ({ offerId }: { offerId: number }) => {
  const { mutateAsync, status } = usePostData({
    endpoint: `/user/offers-cancel/${offerId}`,
  });

  const handleReject = async () => {
    const res = (await mutateAsync({})) as any;

    if (res.status === "fail") {
      toast.error(res.message || "An error occurred Rejecting offer");
    } else if (res.status === "success") {
      toast.success("Offer rejected successfully");
    }
  };

  return (
    <Button
      type="button"
      disabled={status === "pending"}
      onClick={handleReject}
      className="flex-1 bg-primary/20 text-primary hover:bg-primary/30"
    >
      <span>Reject Offer</span>
    </Button>
  );
};
