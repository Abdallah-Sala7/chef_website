import { cn } from "@/lib/utils";
import React, { InputHTMLAttributes } from "react";

const Input = ({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      type="text"
      className={cn(
        "w-full bg-background px-4 py-3 border h-12 !outline-none rounded-xl focus:ring-0 focus:border-gray-400",
        className
      )}
      {...props}
    />
  );
};

export default Input;
