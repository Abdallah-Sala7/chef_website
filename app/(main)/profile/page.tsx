"use client";
import Card from "@/components/common/Card";
import Input from "@/components/common/Input";
import InputImage from "@/components/common/InputImage";

import { Button } from "@/components/ui/button";
import { addUserSession, getUserSession } from "@/utils/userSession";
import { useFormik } from "formik";
import { useState } from "react";
import { toast } from "react-toastify";
import { serialize } from "object-to-formdata";
import { usePostData } from "@/hooks/useFetch";
import { BASE_URL } from "@/constant";

const page = () => {
  const user = getUserSession();
  const [errors, setErrors] = useState<any>({});
  const { mutateAsync } = usePostData({
    endpoint: "/user/date_update",
  });

  const {
    values,
    isSubmitting,
    handleChange,
    handleSubmit,
    setFieldValue,
    resetForm,
  } = useFormik({
    initialValues: {
      img: `${BASE_URL}/${user?.img}`,
      name: user?.name,
      email: user?.email,
      phone: user?.phone,
      latitude: user?.latitude,
      longitude: user?.longitude,
      ...user,
    },

    onSubmit: async (values) => {
      const formData = serialize(values);

      const res = await mutateAsync(formData);

      if (res.status === "fail") {
        setErrors(res.data);
      } else if (res.status === "success") {
        toast.success("Account updated successfully");

        addUserSession(
          JSON.stringify({
            ...user,
            ...res?.data,
          })
        );
      }
    },
  });

  return (
    <section className="section-style">
      <div className="container">
        <Card className="max-w-3xl px-10 pb-12 pt-8 mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className="title font-bold text-primary">Edit Profile</h2>

            <div className="space-y-4">
              <div className="space-y-2 w-fit mx-auto">
                <InputImage
                  defValue={values.img}
                  onChange={(img) => {
                    setFieldValue("img", img);
                  }}
                  className="w-40 h-40 rounded-full"
                />

                {errors.img && <p className="form-error">{errors.img}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="name" className="form-label">
                  Name
                </label>

                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={values.name}
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
                  value={values.email}
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
                  value={values.phone}
                  onChange={handleChange}
                  required
                />
                {errors.phone && <p className="form-error">{errors.phone}</p>}
              </div>
            </div>

            <div className="flex gap-4">
              <Button
                type="reset"
                variant={"outline"}
                className="flex-1 rounded-xl font-semibold"
                onClick={() => resetForm()}
                size={"lg"}
              >
                Cancel
              </Button>

              <Button
                size={"lg"}
                type="submit"
                className="flex-1 rounded-xl font-semibold"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Loading..." : "Save"}
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default page;
