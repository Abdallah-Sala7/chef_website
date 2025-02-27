"use client";

import Card from "@/components/common/Card";
import Input from "@/components/common/Input";
import Textarea from "@/components/common/Textarea";
import { Button } from "@/components/ui/button";
import { postData } from "@/utils/request";
import { useFormik } from "formik";
import { toast } from "react-toastify";

const ContactForm = () => {
  const { values, isSubmitting, handleChange, handleSubmit, resetForm } =
    useFormik({
      initialValues: {
        frist_name: "",
        last_name: "",
        email: "",
        phone: "",
        message: "",
      },

      onSubmit: async (body) => {
        const res = (await postData({
          endpoint: "/user/feedback",
          config: {
            body,
          },
        })) as any;

        if (res.status === "fail") {
          toast.error(res.message || "An error occurred while sending message");
        } else if (res.status === "success") {
          toast.success("Message sent successfully");
          resetForm();
        }
      },
    });

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <Card className="space-y-4 px-4 py-8 md:px-8 md:py-12">
        <div className="flex-col flex gap-4 md:flex-row">
          <Input
            type="text"
            placeholder="First Name*"
            value={values.frist_name}
            name="frist_name"
            onChange={handleChange}
            className="flex-1"
            required
          />
          <Input
            type="text"
            placeholder="Last Name*"
            value={values.last_name}
            name="last_name"
            onChange={handleChange}
            className="flex-1"
            required
          />
        </div>

        <Input
          type="email"
          placeholder="Email*"
          name="email"
          value={values.email}
          onChange={handleChange}
          required
        />

        <Input
          type="tel"
          placeholder="Phone Number*"
          value={values.phone}
          name="phone"
          onChange={handleChange}
          required
        />

        <Textarea
          placeholder="Your message..."
          value={values.message}
          name="message"
          onChange={handleChange}
          required
        />

        <div className="pt-2">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-xl"
            size={"lg"}
          >
            Send Message
          </Button>
        </div>
      </Card>
    </form>
  );
};

export default ContactForm;
