"use client";

import Link from "next/link";
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

  const isActive = pathname === `/${href}` || pathname === `${href}`;

  return (
    <Link
      href={href}
      className={`flex justify-center text-center text-lg py-0.5 transition-colors duration-150 relative 
        after:absolute after:h-0.5 after:left-1/2 after:-translate-x-1/2 after:bg-primary/70 
        after:transition-all after:duration-300 after:top-full after:hidden md:after:block
        ${
          isActive
            ? "bg-primary w-full text-white rounded-md md:bg-transparent md:text-primary md:after:w-full"
            : "text-accent-foreground after:w-0 hover:after:w-full hover:text-primary"
        }
      `}
      {...props}
    >
      {children}
    </Link>
  );
};

export default NavLink;
