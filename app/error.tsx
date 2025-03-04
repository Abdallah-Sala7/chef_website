"use client";

import Image from "next/image";
import Link from "next/link";

export default function Error() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-white">
      <figure className="shrink-0 w-full max-w-screen-sm">
        <blockquote>
          <Link href="/" className="table mb-8 mx-auto">
            <Image
              src="/images/error.webp"
              alt="error image"
              className="w-full max-w-md"
              width={500}
              height={500}
            />
          </Link>

          <p className="text-6xl text-gray-800 font-bold text-center">500</p>

          <p className="text-lg text-gray-500 font-medium mb-8 mt-2 text-center">
            We are sorry, but something went wrong. Please try again later.
          </p>
        </blockquote>
      </figure>
    </div>
  );
}
