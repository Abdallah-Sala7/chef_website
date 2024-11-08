import { cn } from "@/lib/utils";
import { InputHTMLAttributes } from "react";

const Textarea = ({
  className,
  ...props
}: InputHTMLAttributes<HTMLTextAreaElement>) => {
  return (
    <textarea
      className={cn(
        "w-full !ring-0 !outline-none px-4 py-3 min-h-24 text-sm rounded-xl border bg-background/70 text-foreground focus:border-gray-400 focus:bg-background/100 focus:dark:border-gray-500",
        className
      )}
      autoComplete="off"
      {...props}
    ></textarea>
  );
};

export default Textarea;
