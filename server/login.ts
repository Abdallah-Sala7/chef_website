"use server";

import { cookies } from "next/headers";

import {
  DEFAULT_LOGIN_REDIRECT,
  EMAIL_ADDRESS,
  SESSION_NAME,
} from "@/constant";
import { decodeSession } from "@/utils/session";

export const loginAction = async (
  session: string,
  remeber: boolean = false,
  callbackUrl?: string | null
) => {
  const { exp } = decodeSession(session);

  const cookieSession = cookies();

  // if remember is false, set the session cookie to expire to session cookie
  (await cookieSession).set(SESSION_NAME, session, {
    path: "/",
    expires: remeber ? new Date(exp * 1000) : undefined,
    value: session,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
  });

  // Remove the email cookie if it exists
  if ((await cookies()).get(EMAIL_ADDRESS)) {
    (await cookies()).delete(EMAIL_ADDRESS);
  }

  // Redirect to the callback URL if provided, otherwise to the default redirect
  const redirectUrl = callbackUrl || DEFAULT_LOGIN_REDIRECT;
  window.location.href = redirectUrl;
  // redirect(redirectUrl);
};
