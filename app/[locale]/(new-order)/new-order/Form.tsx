"use client";

import Input from "@/components/common/Input";
import Textarea from "@/components/common/Textarea";
import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/ui/DatePicker";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
import cookieClient from "js-cookie";
import { SESSION_NAME } from "@/constant";
import { createHeaders } from "@/utils/createHeaders";
import { useGetData, usePostData } from "@/hooks/useFetch";
import { toast } from "react-toastify";
import { useFormik } from "formik";

const Form = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tabs = searchParams.get("tab") || "0";
  const params = new URLSearchParams(searchParams.toString());
  const isLoggedIn = cookieClient.get(SESSION_NAME);

  const [errors, setErrors] = useState<any>({});

  const { mutateAsync } = usePostData({ endpoint: "/user/orders" });

  const { values, isSubmitting, handleChange, handleSubmit, setFieldValue } =
    useFormik({
      initialValues: {
        service_id: "",
        package_id: "",
        addition_service: "",
        day: "",
        state: "open",
      },

      onSubmit: async (values) => {
        if (Number(tabs) < (isLoggedIn ? 4 : 5)) {
          params.set("tab", String(Number(tabs) + 1));
          router.push(`?${params.toString()}`, { scroll: false });
          return;
        }

        const res = await mutateAsync(values);

        if (res.status === "fail") {
          setErrors(res.data);
          toast.error(res.message || "An error occurred while creating order");
        } else if (res.status === "success") {
          toast.success("Order created successfully");
          router.push(`/orders`);
        }
      },
    });

  useEffect(() => {
    params.set("tab", "0");
    router.push(`?${params.toString()}`, { scroll: false });
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-6 max-w-5xl mx-auto" key={tabs}>
        {tabs === "0" ? (
          <StepOne defValues={values} handleChange={handleChange} />
        ) : tabs === "1" ? (
          <StepTow defValues={values} handleChange={handleChange} />
        ) : tabs === "2" ? (
          <StepTree
            defValues={values}
            handleChange={handleChange}
            setFieldValue={setFieldValue}
          />
        ) : tabs === "3" ? (
          <StepFour defValues={values} handleChange={handleChange} />
        ) : tabs === "4" ? (
          <StepFive defValues={values} handleChange={handleChange} />
        ) : tabs === "5" ? (
          "Create Account Form Content"
        ) : null}
        <div className="flex justify-between items-center pt-4">
          <Button
            type="button"
            variant={"outline"}
            onClick={() => {
              params.set("tab", String(Number(tabs) - 1));
              router.push(`?${params.toString()}`, { scroll: false });
            }}
            className={tabs === "0" ? "invisible" : "font-semibold"}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>BACK</span>
          </Button>

          <Button
            type="submit"
            className="font-semibold"
            disabled={isSubmitting}
          >
            <span>NEXT</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </form>
  );
};

export default Form;

const RadioInput = ({
  name,
  value,
  label,
  defaultChecked,
  onChange,
}: {
  name: string;
  value: string;
  label: string;
  defaultChecked: boolean;
  onChange: any;
}) => {
  return (
    <div className="group">
      <label
        className={cn(
          "flex items-center justify-center w-full h-full cursor-pointer py-3 px-4 text-sm rounded-xl border-[3px] border-gray-200 text-center font-semibold lg:px-6",
          "group-has-[input:checked]:border-primary"
        )}
      >
        <input
          type="radio"
          name={name}
          value={value}
          required
          className="hidden"
          defaultChecked={defaultChecked}
          onChange={onChange}
        />
        {label}
      </label>
    </div>
  );
};

const age = ["children", "adults", "teens"];
const meals = ["breakfast", "lunch", "dinner"];

const StepOne = ({
  defValues,
  handleChange,
}: {
  defValues: any;
  handleChange: any;
}) => {
  const headers = createHeaders();

  const { data, isLoading } = useGetData({
    endpoint: "/admin/services",
    config: {
      headers,
    },
  });

  const services = data?.status === "success" ? (data?.data as any) : [];

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <h2 className="title-md">Type of service</h2>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {isLoading && <p className="col-span-full">Loading...</p>}

          {services?.map((item: any) => (
            <RadioInput
              name={"service_id"}
              value={item.id}
              key={item?.id}
              label={item.name}
              onChange={handleChange}
              defaultChecked={defValues["service_id"] === item.id}
            />
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="title-md">Age</h2>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {age.map((item, index) => (
            <Fragment key={index}>
              <RadioInput
                name={"age"}
                value={item}
                label={item}
                onChange={handleChange}
                defaultChecked={defValues["age"] === item}
              />
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

const StepTow = ({
  defValues,
  handleChange,
}: {
  defValues: any;
  handleChange: any;
}) => {
  const headers = createHeaders();

  const { data, isLoading } = useGetData({
    endpoint: "/admin/cuisines",
    config: {
      headers,
    },
  });

  const cuisines = data?.status === "success" ? (data?.data as any) : [];

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <div className="space-y-1">
          <h2 className="title-md">Cuisines</h2>
          <p className="desc !text-inherit opacity-70">
            Can't find the cuisine you like? No worries! Add a new dish, select
            it, and send it directly to the chef.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {isLoading && <p className="col-span-full">Loading...</p>}
          {cuisines?.map((item: any) => (
            <RadioInput
              name={"cuisine_id"}
              value={item.id}
              key={item?.id}
              label={item.name}
              onChange={handleChange}
              defaultChecked={defValues["cuisine_id"] === item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const StepTree = ({
  defValues,
  handleChange,
  setFieldValue,
}: {
  defValues: any;
  handleChange: any;
  setFieldValue: any;
}) => {
  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <h2 className="title-md">Meal</h2>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {meals.map((item, index) => (
            <RadioInput
              key={index}
              name={"meal"}
              value={item}
              label={item}
              onChange={handleChange}
              defaultChecked={defValues["meal"] === item}
            />
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="title-md">Service Day</h2>

        <div className="col-span-full">
          <DatePicker
            value={defValues["day"]}
            onChange={(value) => setFieldValue("day", value)}
            name="date"
            className={
              "w-full h-auto py-3 font-semibold border-[3px] rounded-xl border-gray-200 text-sm"
            }
          />
        </div>
      </div>
    </div>
  );
};

const StepFour = ({
  defValues,
  handleChange,
}: {
  defValues: any;
  handleChange: any;
}) => {
  const headers = createHeaders();

  const { data, isLoading } = useGetData({
    endpoint: "/admin/packages",
    config: {
      headers,
    },
  });

  const packages = data?.status === "success" ? (data?.data as any) : [];

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <h2 className="title-md">Chef Service Packages and Pricing</h2>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {isLoading && <p className="col-span-full">Loading...</p>}

          {packages?.map((item: any) => (
            <RadioInput
              name={"package_id"}
              value={item.id}
              key={item?.id}
              label={item.name}
              onChange={handleChange}
              defaultChecked={defValues["package_id"] === item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const StepFive = ({
  defValues,
  handleChange,
}: {
  defValues: any;
  handleChange: any;
}) => {
  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h2 className="title-md text-pr">
          Describe Your Event to Help Our Chefs Personalize Your Experience
        </h2>
        <p className="desc !text-inherit opacity-70">
          Provide details about the occasion, atmosphere, preferred menu, and
          any other important information so they can tailor their service to
          your needs.
        </p>
      </div>

      <div className="space-y-3">
        <div className="space-y-2">
          <label className="title-sm mb-2 block">Additional service</label>

          <Input
            name={"addition_service"}
            required
            value={defValues["addition_service"]}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-2">
          <label className="title-sm mb-2 block">
            Add preferred services or additional options you would personally
            like to acquire (Optional)
          </label>

          <Textarea
            name={"preferred_services"}
            value={defValues["preferred_services"]}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};
