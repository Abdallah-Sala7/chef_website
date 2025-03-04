"use client";

import Image from "next/image";
import Link from "next/link";
import { XIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const AppBar = () => {
  const router = useRouter();
  return (
    <nav className="h-[75px] sticky top-0 bg-background z-50 flex items-center border-b">
      <div className="container flex justify-between items-center">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Chef finder"
            width={150}
            height={55}
            className="w-28 h-10 md:w-32 object-contain"
            quality={100}
          />
        </Link>

        <button
          className="w-9 h-9 rounded-full bg-gray-50 hover:bg-gray-100 flex justify-center items-center"
          onClick={() => router.back()}
        >
          <XIcon className="w-5 h-5 text-primary" />
        </button>
      </div>
    </nav>
  );
};

export default AppBar;
