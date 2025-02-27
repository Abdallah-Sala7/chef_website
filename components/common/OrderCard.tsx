import Card from "./Card";
import moment from "moment";
import Link from "next/link";
import Status from "./Status";

import {
  CalendarIcon,
  ChevronRightIcon,
  CookingPotIcon,
  HandPlatterIcon,
  PackageIcon,
  SaladIcon,
  UsersIcon,
} from "lucide-react";

import { Button } from "../ui/button";
import { IOrder } from "@/interfaces/order";

const OrderCard = ({
  order,
  hasFooter = true,
}: {
  order: IOrder;
  hasFooter?: boolean;
}) => {
  return (
    <Card className="py-0 px-0 flex flex-col">
      <div className="py-3 px-4 flex items-center border-b">
        <div className="flex-1 max-w-28 flex justify-start">
          <Status status={order?.state} />
        </div>

        <div className="flex-1 flex justify-center text-center">
          <p className="font-semibold">{order?.service_name}</p>
        </div>

        <div className="flex-1 max-w-28 flex justify-end">
          <p className="text-gray-600 text-sm">{order?.created_at}</p>
        </div>
      </div>

      <div className="divide-y divide-gray-200">
        <div className="grid grid-cols-2 py-2 px-3">
          <div className="flex justify-start items-center text-start gap-2">
            <UsersIcon className="shrink-0 size-5 text-primary" />

            <p>People</p>
          </div>

          <div className="text-end text-gray-600 text-sm">
            <p>Children: {order?.children}</p>
            <p>Adult: {order?.adult}</p>
            <p>Teen: {order?.teen}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 py-2 px-3">
          <div className="flex justify-start items-center text-start gap-2">
            <CalendarIcon className="shrink-0 w-5 h-5 text-primary" />

            <p>Date</p>
          </div>

          <div className="text-end text-sm">
            <p className="text-gray-600">{order?.day}</p>
            <p className="text-gray-600" dir="ltr">
              {moment(order?.from_time, "HH:mm:ss").format("hh:mm A")} -{" "}
              {moment(order?.to_time, "HH:mm:ss").format("hh:mm A")}
            </p>
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
            <CookingPotIcon className="shrink-0 w-5 h-5 text-primary" />

            <p>Cuisine</p>
          </div>

          <div className="text-end">
            <p className="text-gray-600">{order?.cuisine_name}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 py-2 px-3">
          <div className="flex justify-start items-center text-start gap-2">
            <PackageIcon className="shrink-0 w-5 h-5 text-primary" />

            <p>Package</p>
          </div>

          <div className="text-end">
            <p className="text-gray-600">{order?.package_name}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 py-2 px-3">
          <div className="flex justify-start items-center text-start gap-2">
            <HandPlatterIcon className="shrink-0 size-5 text-primary" />

            <p>Addition Service</p>
          </div>

          <div className="text-end">
            <p className="text-gray-600 text-sm">{order?.addition_service}</p>
          </div>
        </div>
      </div>

      {hasFooter &&
        (order.state === "open" ? (
          <div className="px-4 py-3 flex justify-between gap-4">
            <Button
              type="button"
              className="flex-1 bg-primary/20 text-primary hover:bg-primary/30"
            >
              <span>Cancel Order</span>
            </Button>

            <Link href={`/orders/${order?.id}`} className="flex-1">
              <Button type="button" className="w-full">
                <span>View Requests</span>
              </Button>
            </Link>
          </div>
        ) : (
          <button className="mt-auto w-full flex justify-center items-center gap-1 p-3 font-semibold duration-300 text-primary bg-primary/20 hover:bg-primary/30">
            <span>More Info</span>

            <ChevronRightIcon className="w-5 h-5" />
          </button>
        ))}
    </Card>
  );
};

export default OrderCard;
