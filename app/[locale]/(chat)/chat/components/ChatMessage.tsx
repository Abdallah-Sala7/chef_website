import TimeDateFormate from "./TimeDateFormaed";

interface ChatMessageProps {
  message: string;
  isUser: boolean;
  timestamp?: string;
}

export function ChatMessage({ message, isUser, timestamp }: ChatMessageProps) {
  return (
    <div className={`flex ${isUser ? "justify-start" : "justify-end"} mb-2`}>
      <div
        className={`max-w-[70%] rounded-xl px-4 py-2 ${
          isUser
            ? "bg-primary text-white rounded-es-none"
            : "bg-gray-100 text-gray-800 rounded-ee-none"
        }`}
      >
        <p className="text-sm break-all">{message}</p>
        {timestamp && (
          <span className="text-xs opacity-90 mt-1 block">
            <TimeDateFormate timestamp={timestamp} />
          </span>
        )}
      </div>
    </div>
  );
}
