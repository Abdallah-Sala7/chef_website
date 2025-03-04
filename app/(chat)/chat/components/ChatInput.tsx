"use client";

import { Button } from "@/components/ui/button";
import { usePostData } from "@/hooks/useFetch";
import { Send } from "lucide-react";
import { useState } from "react";

export function ChatInput({ refetch }: { refetch: () => void }) {
  const [message, setMessage] = useState("");
  const { mutateAsync, status } = usePostData({
    endpoint: `/user/message`,
  });

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await mutateAsync({
      sender_id: 1,
      receiver_id: 1,
      sender_type: "user",
      receiver_type: "admin",
      content: message,
    });

    await refetch();
    setMessage("");
  };

  return (
    <form onSubmit={handleFormSubmit} className="flex gap-2 p-4">
      <Button
        type="submit"
        size={"icon"}
        variant={"outline"}
        disabled={status === "pending"}
        className="shrink-0 rounded-full border-primary !text-primary hover:bg-primary/10"
      >
        <Send className="w-5 h-5" />
      </Button>

      <div className="relative flex-1">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          disabled={status === "pending"}
          className="w-full rounded-full px-4 py-2 bg-gray-100 pe-10 focus:outline-none border focus:border-primary"
        />
      </div>
    </form>
  );
}

export default ChatInput;
