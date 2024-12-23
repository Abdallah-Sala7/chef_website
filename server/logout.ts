"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { DEFAULT_LOGOUT_REDIRECT, SESSION_NAME } from "@/constant";

export const logoutAction = async () => {
  (await cookies()).delete(SESSION_NAME);
  redirect(DEFAULT_LOGOUT_REDIRECT);
};
