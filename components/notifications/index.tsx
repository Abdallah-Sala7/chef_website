import { cn } from "@/lib/utils";
import { useState } from "react";
import { ScrollArea } from "../ui/scroll-area";
import { BellIcon, BellOffIcon, XIcon } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useGetData } from "@/hooks/useFetch";
import { createHeaders } from "@/utils/createHeaders";

export const NotificationButton = () => {
  const endpoint = "/user/notifications";
  const headers = createHeaders();

  const [open, setOpen] = useState(false);
  const { data } = useGetData({
    endpoint,
    config: { headers },
  });

  const notifications = data?.status === "success" ? (data?.data as any[]) : [];

  return (
    <DropdownMenu modal={false} dir={"ltr"} open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <button
          aria-label="Open notifications"
          className="relative text-gray-500 w-12 h-10 flex justify-center items-center rounded-md hover:bg-gray-50"
          type="button"
        >
          <BellIcon />

          {notifications?.length > 0 && (
            <div className="w-2 h-2 bg-primary rounded-full absolute start-1 top-1" />
          )}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="max-w-[80vw] w-96 p-0">
        <DropdownMenuLabel>
          <div className="flex items-center justify-between gap-4 my-1">
            <h2 className="font-semibold text-base">Notifications</h2>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close notifications"
            >
              <XIcon size={20} />
            </button>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator className="mb-0" />
        <ScrollArea className="max-h-[70vh]">
          <DropdownMenuGroup>
            {notifications?.length === 0 ? (
              <div className="p-6 flex flex-col items-center gap-2 justify-center text-muted-foreground">
                <BellOffIcon size={30} />
                <p className="text-sm">No notifications yet</p>
              </div>
            ) : (
              notifications?.map((notification: any) => (
                <NotificationCard
                  key={notification?.id}
                  notification={notification}
                  closeModal={() => setOpen(false)}
                />
              ))
            )}
          </DropdownMenuGroup>
        </ScrollArea>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const NotificationCard = ({
  notification,
  closeModal,
}: {
  notification: any;
  closeModal: () => void;
}) => {
  const handleReadMsg = async () => {
    closeModal();
  };

  return (
    <DropdownMenuItem
      className={cn("p-0 border-b rounded-none", {
        // "bg-accent": !notification?.is_read,
      })}
    >
      <div
        onClick={handleReadMsg}
        className="w-full py-1.5 px-2 flex items-start gap-3"
      >
        <div
          className={cn(
            "w-8 h-8 bg-muted/20 rounded-full shrink-0 flex justify-center items-center",
            {
              "bg-green-50": notification?.type === "new_order",
              "bg-primary/10": notification?.type === "update_order_status",
            }
          )}
        >
          <BellIcon
            size={20}
            className={cn("text-primary", {
              "text-green-600": notification?.type === "new_order",
              "text-primary": notification?.type === "update_order_status",
            })}
          />
        </div>

        <div className="flex flex-col items-start gap-1 w-full text-start">
          <div>
            <p className="text-sm text-gray-500">
              {notification?.data?.message}
            </p>
          </div>

          <span className="text-xs text-gray-400">
            {notification?.created_at}
          </span>
        </div>
      </div>
    </DropdownMenuItem>
  );
};
