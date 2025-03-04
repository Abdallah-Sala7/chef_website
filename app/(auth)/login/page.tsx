"use client";

import Card from "@/components/common/Card";
import Input from "@/components/common/Input";
import PasswordInput from "@/components/common/PasswordInput";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { loginAction } from "@/server/login";
import { postData } from "@/utils/request";
import { useFormik } from "formik";
import { Loader2Icon } from "lucide-react";
import { toast } from "react-toastify";

const LoginPage = () => {
  const { values, isSubmitting, handleChange, handleSubmit } = useFormik({
    initialValues: {
      login: "",
      password: "",
      guard_name: "user",
    },

    onSubmit: async (values) => {
      const res = (await postData({
        endpoint: "/user/auth/login",
        config: {
          body: values,
        },
      })) as any;

      if (res.status === "fail") {
        toast.error(res.message || "Invalid credentials");
      } else if (res.status === "success") {
        const token = res?.data?.token || "";
        toast.success("Logged in successfully");
        await loginAction(token);
        window.location.href = "/";
      }
    },
  });

  return (
    <Card className="space-y-6 px-8 py-12">
      <div className="mx-auto w-fit text-center">
        <h1 className="text-xl md:text-2xl font-bold mb-1">Log in</h1>
        <h2 className="text-xl">Chef finder</h2>
      </div>

      <div className="flex">
        <Link
          href={"/login"}
          className={cn(
            "flex-1 text-center px-4 py-3 font-semibold rounded-s-xl",
            "bg-primary text-white hover:bg-primary/80"
          )}
        >
          Log in as a customer
        </Link>

        <Link
          href={"/login"}
          className={cn(
            "flex-1 text-center px-4 py-3 font-semibold rounded-e-xl",
            "bg-primary/10 hover:bg-primary/15"
          )}
        >
          Log in as a chef
        </Link>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="login" className="block text-sm font-medium">
                Email or mobile phone number
              </label>

              <Input
                type="text"
                id="login"
                name="login"
                required
                value={values.login}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium">
                Your password
              </label>

              <PasswordInput
                id="password"
                name="password"
                required
                value={values.password}
                onChange={handleChange}
              />

              <Link
                href="/forgot-password"
                className="block text-sm text-primary hover:text-primary/80"
              >
                Forgot password?
              </Link>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full rounded-xl font-semibold"
            size={"lg"}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <Loader2Icon size={24} className="animate-spin" />
            ) : (
              "Log in"
            )}
          </Button>
        </div>
      </form>

      <p className="text-center text-sm">
        Don't have an account?{" "}
        <Link
          href={"/register"}
          className="text-primary font-semibold hover:text-primary/80"
        >
          Sign up
        </Link>
      </p>
    </Card>
  );
};

export default LoginPage;
