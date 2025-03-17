import { LogOutIcon, User2Icon, UserCircle2Icon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { logoutAction } from "@/server/logout";
import Link from "next/link";

const AccountOptions = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          aria-label="Open options"
          className="text-gray-500 w-12 h-10 flex justify-center items-center rounded-md hover:bg-gray-50"
          type="button"
        >
          <UserCircle2Icon />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-52 me-2 mt-2 bg-background space-y-2">
        <DropdownMenuItem className="px-0 py-0">
          <Link href={"/profile"} className="flex w-full">
            <Button
              type="button"
              variant={"ghost"}
              className="rounded-md gap-2 justify-start w-full"
            >
              <User2Icon />

              <p className="truncate font-bold">Profile</p>
            </Button>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem className="cursor-pointer px-0 py-0 hover:!bg-muted/60">
          <Button
            type="button"
            variant={"destructive"}
            onClick={logoutAction}
            className="rounded-md gap-2 justify-start text-destructive bg-transparent w-full hover:text-destructive-foreground"
          >
            <LogOutIcon />

            <p className="truncate font-bold">Logout</p>
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AccountOptions;
