import { cn } from "@/lib/utils";

export default function Card({
  children,
  className,
  ...props
}: { children: React.ReactNode } & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "w-full border p-4 shadow-2xl shadow-gray-800/5 rounded-2xl overflow-hidden bg-[#FDFEF0]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
