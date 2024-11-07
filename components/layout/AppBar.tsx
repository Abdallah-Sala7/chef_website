"use client";

import Image from "next/image";
import { Link } from "@/navigation";
import { XIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const AppBar = () => {
  const router = useRouter();
  return (
    <nav className="h-20 flex items-center border-b">
      <div className="container flex justify-between items-center">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Chef finder"
            width={150}
            height={55}
            className="w-28 h-10 md:w-32 md:h-12 object-contain"
            quality={100}
          />
        </Link>

        <button
          className="w-10 h-10 rounded-full bg-muted flex justify-center items-center"
          onClick={() => router.back()}
        >
          <XIcon className="w-6 h-6 text-primary" />
        </button>
      </div>
    </nav>
  );
};

export default AppBar;
