"use client";

import { useRouter, useSearchParams } from "next/navigation";

const OrderTabs = ({ tabsLength }: { tabsLength: number }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  const tab = searchParams.get("tab");

  const handleTabClick = (index: string) => {
    if (index === tab) return;
    params.set("tab", index);
    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex items-center gap-4 mb-6">
      {Array.from({ length: tabsLength }).map((_, index) => (
        <button
          key={index}
          className={`flex-1 h-1 rounded-full ${
            index <= Number(tab) ? "bg-primary" : "bg-gray-200"
          }`}
          onClick={() => handleTabClick(String(index))}
          aria-current={index === Number(tab) ? "page" : undefined}
          disabled={index > Number(tab)}
        />
      ))}
    </div>
  );
};

export default OrderTabs;
