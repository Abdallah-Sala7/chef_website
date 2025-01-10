import Card from "./Card";
import {
  CalendarIcon,
  ChevronRightIcon,
  MapPinIcon,
  SaladIcon,
  UserIcon,
  UsersIcon,
} from "lucide-react";
import Status from "./Status";
import { Button } from "../ui/button";
import { IOrder } from "@/interfaces/order";
import { formatDate } from "@/lib/utils";

const OrderCard = ({ order }: { order: IOrder }) => {
  return (
    <Card className="py-0 px-0 flex flex-col">
      <div className="py-3 px-4 flex items-center border-b">
        <div className="flex-1 flex justify-start">
          <Status status={order?.state} />
        </div>

        {/* <div className="flex-1 flex justify-center text-center">
          <p className="font-semibold">#{order?.id}</p>
        </div> */}

        <div className="flex-1 flex justify-end">
          <p className="text-sm">{formatDate(order?.created_at)}</p>
        </div>
      </div>

      <div className="divide-y divide-gray-200 border-b">
        <div className="grid grid-cols-2 py-2 px-3">
          <div className="flex justify-start items-center text-start gap-2">
            <UserIcon className="shrink-0 size-5 text-primary" />

            <p>Chef</p>
          </div>

          <div className="text-end">
            <p className="text-gray-600 text-sm">{order?.chef?.name || "-"}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 py-2 px-3">
          <div className="flex justify-start items-center text-start gap-2">
            <CalendarIcon className="shrink-0 size-5 text-primary" />

            <p>Date</p>
          </div>

          <div className="text-end">
            <p className="text-gray-600 text-sm">{formatDate(order?.day)}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 py-2 px-3">
          <div className="flex justify-start items-center text-start gap-2">
            <SaladIcon className="shrink-0 size-5 text-primary" />

            <p>Meals</p>
          </div>

          <div className="text-end">
            <p className="text-gray-600 text-sm">
              {order?.breakfast_status && (
                <p>Breakfast {order?.breakfast_status}</p>
              )}
              {order?.lunch_status && <p>Lunch {order?.lunch_status}</p>}
              {order?.dinner_status && <p>Dinner {order?.dinner_status}</p>}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 py-2 px-3">
          <div className="flex justify-start items-center text-start gap-2">
            <MapPinIcon className="shrink-0 size-5 text-primary" />

            <p>Cuisine</p>
          </div>

          <div className="text-end">
            <p className="text-gray-600 text-sm">{order?.cuisine?.name}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 py-2 px-3">
          <div className="flex justify-start items-center text-start gap-2">
            <MapPinIcon className="shrink-0 size-5 text-primary" />

            <p>Addition Service</p>
          </div>

          <div className="text-end">
            <p className="text-gray-600 text-sm">{order?.addition_service}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 py-2 px-3">
          <div className="flex justify-start items-center text-start gap-2">
            <UsersIcon className="shrink-0 size-5 text-primary" />

            <p>People</p>
          </div>

          <div className="text-end capitalize">
            <p className="text-gray-600 text-sm">
              {order?.adult ? `adults ${order?.adult}` : ""}{" "}
              {order?.teen ? `teens ${order?.teen}` : ""}{" "}
              {order?.children ? `children ${order?.children}` : ""}
            </p>
          </div>
        </div>
      </div>

      {order.state === "open" ? (
        <div className="px-4 py-3 flex justify-between gap-4">
          <Button
            type="button"
            className="flex-1 bg-primary/20 text-primary hover:bg-primary/30"
          >
            <span>Edit Order</span>
          </Button>

          <Button type="button" className="flex-1">
            <span>View Requests</span>
          </Button>
        </div>
      ) : (
        <button className="mt-auto w-full flex justify-center items-center gap-1 p-3 font-semibold duration-300 text-primary bg-primary/20 hover:bg-primary/30">
          <span>More Info</span>

          <ChevronRightIcon className="w-5 h-5" />
        </button>
      )}
    </Card>
  );
};

export default OrderCard;
