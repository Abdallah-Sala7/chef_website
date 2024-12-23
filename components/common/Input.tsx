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
        "w-full bg-background/70 px-4 py-3 border h-12 text-sm !outline-none rounded-xl focus:ring-0 focus:border-gray-400 focus:bg-background/100",
        className
      )}
      placeholder="..."
      {...props}
    />
  );
};

export default Input;
