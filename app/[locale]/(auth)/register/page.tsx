"use client";

import Card from "@/components/common/Card";
import Input from "@/components/common/Input";
import PasswordInput from "@/components/common/PasswordInput";
import { Button } from "@/components/ui/button";
import { Link } from "@/navigation";
import PasswordValidation from "./PasswordValidation";
import { useFormik } from "formik";
import { postData } from "@/utils/request";
import { Loader2Icon } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";
import { loginAction } from "@/server/login";

const RegisterPage = () => {
  const [errors, setErrors] = useState<any>({});

  const { values, isSubmitting, handleChange, handleSubmit, setFieldValue } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        password: "",
        phone: "",
        latitude: "1.0",
        longitude: "1.0",
        isValid: 0,
        password_confirmation: "",
      },

      onSubmit: async (values) => {
        const res = (await postData({
          endpoint: "/user/auth/register",
          config: {
            body: values,
          },
        })) as any;

        if (res.status === "fail") {
          setErrors(res.data);
        } else if (res.status === "success") {
          const token = res?.data?.token || "";
          toast.success("Account created successfully");
          loginAction(token);
        }
      },
    });

  return (
    <Card className="space-y-6 px-8 py-12">
      <div className="mx-auto w-fit text-center">
        <h1 className="text-xl md:text-2xl font-bold mb-1 text-primary">
          Chef finder
        </h1>
        <h2 className="md:text-xl">Create an account</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="form-label">
                Full name
              </label>

              <Input
                type="text"
                id="name"
                name="name"
                onChange={handleChange}
                required
              />

              {errors.name && <p className="form-error">{errors.name}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="form-label">
                Email address
              </label>

              <Input
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
                required
              />
              {errors.email && <p className="form-error">{errors.email}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="form-label">
                Mobile number
              </label>

              <Input
                type="tel"
                id="phone"
                name="phone"
                onChange={handleChange}
                required
              />
              {errors.phone && <p className="form-error">{errors.phone}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="form-label">
                Password
              </label>

              <PasswordInput name="password" onChange={handleChange} required />
              {errors.password && (
                <p className="form-error">{errors.password}</p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="password_confirmation" className="form-label">
                Confirm password
              </label>

              <PasswordInput
                name="password_confirmation"
                onChange={handleChange}
                required
              />
            </div>

            <PasswordValidation values={values} setValues={setFieldValue} />
          </div>

          <Button
            type="submit"
            className="w-full rounded-xl font-semibold"
            size={"lg"}
            disabled={isSubmitting || values.isValid !== 1}
          >
            {isSubmitting ? (
              <Loader2Icon size={24} className="animate-spin" />
            ) : (
              "Register"
            )}
          </Button>
        </div>
      </form>

      <p className="text-center text-sm">
        Already have an account?{" "}
        <Link
          href={"/login"}
          className="text-primary font-semibold hover:text-primary/80"
        >
          Log in
        </Link>
      </p>
    </Card>
  );
};

export default RegisterPage;
