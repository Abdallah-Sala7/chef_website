"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import type { ImageProps } from "next/image";

const CustomImage = ({
  src = "/placeholder.png",
  alt = "image",
  ...props
}: ImageProps & {
  src: string;
  alt: string;
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      loading="lazy"
      className={cn("object-cover", props.className)}
      onError={(e) => {
        e.currentTarget.src = "/placeholder.png";
        e.currentTarget.onerror = null;
      }}
      {...props}
    />
  );
};

export default CustomImage;
