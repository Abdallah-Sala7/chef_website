import { createHeaders } from "@/utils/createHeaders";
import { getData } from "@/utils/request-server";
import { cookies } from "next/headers";

const page = async () => {
  const cookieStore = await cookies();
  const headers = createHeaders(cookieStore);

  const data = await getData({
    endpoint: "/user/orders",
    config: {
      headers,
    },
  });

  console.log(data);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Requests</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4"></div>
    </div>
  );
};

export default page;
