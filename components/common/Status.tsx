type Status =
  | "created"
  | "new"
  | "open"
  | "completed"
  | "cancelled"
  | "closed"
  | "paid"
  | "not-paid"
  | "hold"
  | "pending"
  | "rejected"
  | "approved"
  | "reviewing"
  | "accepted"
  | "processing"
  | "partial_completed"
  | "delivered"
  | "arrived"
  | "blocked"
  | "active"
  | "not_accepted";

export default function Status({
  status,
  className,
}: {
  status: Status;
  className?: string;
}) {
  const classes: Record<Status, string> = {
    created: "bg-sky-500/10 text-sky-600",
    new: "bg-primary/10 text-primary",
    open: "bg-primary/10 text-primary",
    completed: "bg-green-500/10 text-green-600",
    cancelled: "bg-red-500/10 text-red-600",
    closed: "bg-red-500/10 text-red-600",
    paid: "bg-green-500/10 text-green-600",
    "not-paid": "bg-yellow-500/10 text-yellow-600",
    hold: "bg-gray-500/10 text-gray-600",
    pending: "bg-gray-500/10 text-gray-600",
    rejected: "bg-red-500/10 text-red-600",
    approved: "bg-blue-500/10 text-blue-600",
    reviewing: "bg-yellow-500/10 text-yellow-600",
    accepted: "bg-blue-500/10 text-blue-600",
    processing: "bg-yellow-500/10 text-yellow-600",
    partial_completed: "bg-orange-500/10 text-orange-600",
    delivered: "bg-red-500/10 text-red-600",
    arrived: "bg-blue-500/10 text-blue-600",
    blocked: "bg-orange-500/10 text-orange-600",
    active: "bg-green-500/10 text-green-600",
    not_accepted: "bg-yellow-500/10 text-yellow-600",
  };

  return (
    <p
      className={`py-2 px-6 rounded-md text-sm capitalize text-center w-fit  ${classes[status]} ${
        className || ""
      }`}
    >
      {status}
    </p>
  );
}
