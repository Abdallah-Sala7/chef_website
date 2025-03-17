import cookieClient from "js-cookie";

import { USER_SESSION } from "@/constant";

export function getUserSession() {
  const userSession = cookieClient.get(USER_SESSION) || "";

  return JSON.parse(userSession);
}

export function addUserSession(userSession: string) {
  cookieClient.set(USER_SESSION, userSession);
}
