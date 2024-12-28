import Card from "./Card";
import {
  CalendarIcon,
  ChevronRightIcon,
  MapPinIcon,
  SaladIcon,
  UserIcon,
  UsersIcon,
  XIcon,
} from "lucide-react";
import Status from "./Status";
import { Button } from "../ui/button";

const OrderCard = ({
  status,
  cuisine,
  name,
  date,
  meal,
  location,
}: {
  status: "new" | "processing" | "paid" | "cancelled";
  cuisine: string;
  name: string;
  date: string;
  meal: string;
  location: string;
}) => {
  return (
    <Card className="py-0 px-0 flex flex-col">
      <div className="p-4 flex items-center border-b">
        <div className="flex-1 max-w-28 flex justify-start">
          <Status status={status} />
        </div>

        <div className="flex-1 flex justify-center text-center">
          <p className="font-semibold">{cuisine}</p>
        </div>

        <div className="flex-1 max-w-28 flex justify-end">
          <button
            className="text-gray-600 w-10 h-10 flex justify-center items-center rounded-md hover:bg-gray-200/20"
            type="button"
          >
            <XIcon size={24} />
          </button>
        </div>
      </div>

      <div className="divide-y divide-gray-200">
        <div className="grid grid-cols-2 p-3">
          <div className="flex justify-start items-center text-start gap-2">
            <UserIcon className="shrink-0 w-5 h-5 text-primary" />

            <p>Name</p>
          </div>

          <div className="text-end">
            <p className="text-gray-600">{name}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 p-3">
          <div className="flex justify-start items-center text-start gap-2">
            <CalendarIcon className="shrink-0 w-5 h-5 text-primary" />

            <p>Date</p>
          </div>

          <div className="text-end">
            <p className="text-gray-600">{date}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 p-3">
          <div className="flex justify-start items-center text-start gap-2">
            <SaladIcon className="shrink-0 w-5 h-5 text-primary" />

            <p>Meal</p>
          </div>

          <div className="text-end">
            <p className="text-gray-600">{meal}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 p-3">
          <div className="flex justify-start items-center text-start gap-2">
            <MapPinIcon className="shrink-0 w-5 h-5 text-primary" />

            <p>Location</p>
          </div>

          <div className="text-end">
            <p className="text-gray-600">{location}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 p-3">
          <div className="flex justify-start items-center text-start gap-2">
            <UsersIcon className="shrink-0 w-5 h-5 text-primary" />

            <p>People</p>
          </div>

          <div className="text-end">
            <p className="text-gray-600">4 Adults 2 teens 1 children</p>
          </div>
        </div>
      </div>

      {status === "new" ? (
        <div className="px-4 pb-3 pt-1 flex justify-between gap-6">
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
