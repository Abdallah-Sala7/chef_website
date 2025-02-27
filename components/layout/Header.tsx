"use client";

import Image from "next/image";
import NavLink from "../common/NavLink";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import {
  MenuIcon,
  MessageCircleMoreIcon,
  UserCircle2Icon,
  XIcon,
} from "lucide-react";
import { Link } from "@/navigation";
import { usePathname } from "next/navigation";
import cookieClient from "js-cookie";
import { SESSION_NAME } from "@/constant";
import { logoutAction } from "@/server/logout";
import { NotificationButton } from "../notifications";

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isLoggedIn = cookieClient.get(SESSION_NAME);

  useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
    }
  }, [pathname]);

  return (
    <nav className="py-4 h-[75px] sticky top-0 bg-background z-50 border-b">
      <div className="container flex items-center">
        <div className="flex-1 md:max-w-40 flex justify-start">
          <Link href={"/"}>
            <Image
              src="/logo.svg"
              alt="Chef finder"
              width={200}
              height={55}
              className="w-28 h-10 md:w-32 object-contain"
              quality={100}
            />
          </Link>
        </div>

        <div
          className={cn(
            "fixed top-0 end-0 bottom-0 bg-background z-50 max-w-full w-72 translate-x-full duration-300",
            isOpen && "translate-x-0",
            "flex-1 md:flex-row md:static md:w-auto md:translate-x-0"
          )}
        >
          <div className="w-full h-20 border-b p-4 relative md:hidden">
            <Image
              src="/logo.svg"
              alt="Chef finder"
              width={150}
              height={55}
              className="w-28 h-10 object-contain mx-auto"
              quality={100}
            />

            <Button
              size={"icon"}
              variant={"secondary"}
              className="absolute top-2 start-2 rounded-full w-8 h-8 bg-gray-50 hover:bg-gray-100 [&_svg]:size-4"
              onClick={() => setIsOpen(false)}
            >
              <XIcon />
            </Button>
          </div>

          <ul className="p-4 flex flex-col md:items-center md:justify-center gap-4 md:flex-row md:p-0">
            <li>
              <NavLink href="/">Home</NavLink>
            </li>

            <li>
              <NavLink href="/services">Services</NavLink>
            </li>

            {isLoggedIn && (
              <li>
                <NavLink href="/orders">Orders</NavLink>
              </li>
            )}

            <li>
              <NavLink href="/contact-us">Contact us</NavLink>
            </li>
          </ul>
        </div>

        <div className="flex-1 md:max-w-40 flex justify-end gap-2">
          {!isLoggedIn ? (
            <Link href={"/login"} className="hidden md:block">
              <Button className="font-bold px-8">Log in</Button>
            </Link>
          ) : (
            <div className="flex items-center gap-1">
              <Link href={"/messages"}>
                <button
                  className="text-gray-500 w-12 h-10 flex justify-center items-center rounded-md hover:bg-gray-50"
                  type="button"
                >
                  <MessageCircleMoreIcon />
                </button>
              </Link>

              <NotificationButton />

              <Link href={"/profile"}>
                <button
                  className="text-gray-500 w-12 h-10 flex justify-center items-center rounded-md hover:bg-gray-50"
                  type="button"
                >
                  <UserCircle2Icon />
                </button>
              </Link>
            </div>
          )}

          <Button
            size={"icon"}
            variant={"secondary"}
            className="bg-gray-50 hover:bg-gray-100 md:hidden"
            onClick={() => setIsOpen(true)}
          >
            <MenuIcon className="text-primary" />
          </Button>
        </div>
      </div>

      <div
        className={cn(
          "fixed inset-0 opacity-0 bg-black/50 z-40 invisible transition-opacity duration-150 md:hidden",
          isOpen && "visible opacity-100"
        )}
        onClick={() => setIsOpen(false)}
      />
    </nav>
  );
};

export default Header;
