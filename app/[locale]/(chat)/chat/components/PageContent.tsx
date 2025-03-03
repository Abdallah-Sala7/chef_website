"use client";

import { useGetData } from "@/hooks/useFetch";
import { useEffect } from "react";
import { ChatMessage } from "./ChatMessage";
import ChatInput from "./ChatInput";
import Image from "next/image";

const page = () => {
  const endpoint =
    "/user/messages?sender_id=1&sender_type=user&receiver_id=1&receiver_type=admin";

  const { data, isLoading, refetch } = useGetData({
    endpoint,
  });

  const chatSession = data?.status === "success" ? (data?.data as any) : [];

  useEffect(() => {
    const timeout = setTimeout(() => {
      refetch();
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <section>
      <div className="container max-w-screen-md py-6 h-[calc(100vh-75px)]">
        <div className="h-full rounded-lg border border-gray-200 divide-y flex flex-col">
          <div className="px-4 py-3 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Image
                src={"/user.png"}
                alt="avatar"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full"
              />

              <p className="text-sm font-medium">Admin</p>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-5">
            {isLoading && (
              <div className="flex justify-center items-center pb-5">
                <div className="w-10 h-10 rounded-full border-4 border-gray-200 animate-spin border-y-gray-500" />
              </div>
            )}

            {chatSession?.map((message: any) => (
              <ChatMessage
                isUser={message?.sender_type === "user"}
                message={message.content}
                timestamp={message.created_at}
                key={message.id}
              />
            ))}
          </div>

          <ChatInput refetch={refetch} />
        </div>
      </div>
    </section>
  );
};

export default page;
