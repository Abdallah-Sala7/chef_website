"use client";

import { Link } from "@/navigation";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";

const NavLink = ({
  href,
  children,
  ...props
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const pathname = usePathname();
  const locale = useLocale();
  const isActive =
    pathname === `/${locale}${href}` || pathname === `${href}${locale}`;

  return (
    <Link
      href={href}
      className={`flex justify-center text-center text-lg py-0.5 transition-colors duration-150 hover:text-primary relative 
        after:absolute after:h-0.5 after:left-1/2 after:-translate-x-1/2 after:bg-primary/70 
        after:transition-all after:duration-300 after:top-full after:hidden md:after:block
        ${
          isActive
            ? "bg-primary !text-white w-full rounded-md md:bg-transparent md:text-primary md:after:w-full"
            : "text-accent-foreground after:w-0 hover:after:w-full"
        }
      `}
      {...props}
    >
      {children}
    </Link>
  );
};

export default NavLink;
