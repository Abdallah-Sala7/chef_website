"use client";

import Input from "@/components/common/Input";
import Textarea from "@/components/common/Textarea";
import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/ui/DatePicker";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import cookieClient from "js-cookie";
import { SESSION_NAME } from "@/constant";
import { createHeaders } from "@/utils/createHeaders";
import { useGetData, usePostData } from "@/hooks/useFetch";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import RegisterForm from "../../(auth)/register/Form";
import { loginAction } from "@/server/login";

const age = ["children", "adults", "teens"];
const meals = ["breakfast", "lunch", "dinner"];
const addition_services = [
  { value: 1, label: "waiter" },
  { value: 2, label: "bartender" },
  { value: 3, label: "other" },
];

const Form = () => {
  const router = useRouter();

  const isLoggedIn = cookieClient.get(SESSION_NAME);
  const { mutateAsync } = usePostData({ endpoint: "/user/orders" });

  const maxTabs = isLoggedIn ? 5 : 6;
  const [tabs, setTabs] = useState(0);
  const [errors, setErrors] = useState<any>({});

  const { values, isSubmitting, handleChange, handleSubmit, setFieldValue } =
    useFormik({
      initialValues: {
        service_id: "",
        package_id: "",
        day: "",
        state: "1",
      },

      onSubmit: async (values) => {
        if (tabs < maxTabs - 1) {
          setTabs(tabs + 1);
          return;
        }

        const res = (await mutateAsync(values)) as any;

        if (res.status === "fail") {
          setErrors(res?.message);
          toast.error(res.message || "An error occurred while creating order");
        } else if (res.status === "success") {
          if (res?.data?.token) {
            loginAction(res?.data?.token);
          } else {
            toast.success("Order created successfully");
            router.push(`/orders`);
          }
        }
      },
    });

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        {Array.from({ length: maxTabs }).map((_, index) => (
          <button
            key={index}
            className={`flex-1 h-1 rounded-full ${
              index <= tabs ? "bg-primary" : "bg-gray-200"
            }`}
            onClick={() => setTabs(index)}
            disabled={index > tabs}
          />
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <div className="space-y-6 max-w-5xl mx-auto" key={tabs}>
          {tabs === 0 ? (
            <StepOne
              defValues={values}
              handleChange={handleChange}
              setFieldValue={setFieldValue}
            />
          ) : tabs === 1 ? (
            <StepTow defValues={values} handleChange={handleChange} />
          ) : tabs === 2 ? (
            <StepTree
              defValues={values}
              handleChange={handleChange}
              setFieldValue={setFieldValue}
            />
          ) : tabs === 3 ? (
            <StepFour defValues={values} handleChange={handleChange} />
          ) : tabs === 4 ? (
            <StepFive defValues={values} handleChange={handleChange} />
          ) : tabs === 5 ? (
            <RegisterForm
              errors={errors}
              values={values}
              handleChange={handleChange}
              setFieldValue={setFieldValue}
            />
          ) : null}

          <div className="flex justify-between items-center pt-4">
            <Button
              type="button"
              variant={"outline"}
              onClick={() => setTabs(tabs - 1)}
              className={tabs === 0 ? "invisible" : "font-semibold"}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>BACK</span>
            </Button>

            <Button
              type="submit"
              className="font-semibold"
              disabled={isSubmitting}
            >
              {tabs === maxTabs - 1 ? (
                "CREATE ORDER"
              ) : (
                <>
                  <span>NEXT</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;

const RadioInput = ({
  name,
  value,
  label,
  defaultChecked,
  onChange,
  checked,
  type = "radio",
  required = true,
}: {
  name: string;
  value: string | number;
  label: string;
  defaultChecked?: boolean;
  onChange: any;
  checked?: boolean;
  type?: string;
  required?: boolean;
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
          type={type}
          name={name}
          value={value}
          required={required}
          className="hidden"
          defaultChecked={defaultChecked}
          checked={checked}
          onChange={onChange}
        />
        {label}
      </label>
    </div>
  );
};

const StepOne = ({
  defValues,
  handleChange,
  setFieldValue,
}: {
  defValues: any;
  handleChange: any;
  setFieldValue: any;
}) => {
  const headers = createHeaders();

  const { data, isLoading } = useGetData({
    endpoint: "/services",
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
              checked={defValues["service_id"] == item.id}
            />
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="title-md">Age</h2>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {age.map((item, index) => (
            <div key={index} className="space-y-4">
              <RadioInput
                value={"1"}
                label={item}
                type="checkbox"
                required={false}
                name={"is_" + item}
                onChange={() => {
                  if (defValues["is_" + item] === "1") {
                    setFieldValue("is_" + item, "0");
                    setFieldValue(item, "0");
                  } else {
                    setFieldValue("is_" + item, "1");
                  }
                }}
                checked={defValues["is_" + item] === "1"}
              />

              {defValues["is_" + item] === "1" && (
                <Input
                  step={1}
                  name={item}
                  lang="en"
                  type="number"
                  value={defValues[item]}
                  onChange={handleChange}
                  placeholder={"Number of " + item}
                  required
                />
              )}
            </div>
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
    endpoint: "/cuisines",
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
              checked={defValues["cuisine_id"] == item.id}
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
            <div className="space-y-4" key={index}>
              <RadioInput
                type="checkbox"
                name={`is_${item}`}
                value={"1"}
                label={item}
                required={false}
                checked={defValues[`is_${item}`] === "1"}
                onChange={() => {
                  if (defValues[`is_${item}`] === "1") {
                    setFieldValue(`is_${item}`, "0");
                    setFieldValue(item, null);
                  } else {
                    setFieldValue(`is_${item}`, "1");
                  }
                }}
              />

              {defValues[`is_${item}`] === "1" && (
                <div className="space-y-2 px-4">
                  <RadioInput
                    name={item}
                    value={"1"}
                    label={"Ready to eat"}
                    required={false}
                    checked={defValues[item] === "1"}
                    onChange={handleChange}
                  />

                  <RadioInput
                    name={item}
                    value={"0"}
                    label={"Dining experience"}
                    required={false}
                    checked={defValues[item] === "0"}
                    onChange={handleChange}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="title-md">Service Date</h2>

        <div className="space-y-2 flex-1">
          <label
            className="title-sm text-muted-foreground block"
            htmlFor="date"
          >
            Day
          </label>

          <DatePicker
            value={defValues["day"]}
            onChange={(value) => setFieldValue("day", value)}
            name="date"
            className={
              "w-full h-auto py-3 font-semibold border-[3px] rounded-xl border-gray-200 text-sm"
            }
          />
        </div>

        <div className="flex gap-4 items-center flex-wrap">
          <div className="space-y-2 flex-1 max-w-56">
            <label
              className="title-sm text-muted-foreground block"
              htmlFor="from_time"
            >
              From
            </label>

            <Input
              type="time"
              id={"from_time"}
              name={"from_time"}
              required
              value={defValues["from_time"]}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2 flex-1 max-w-56">
            <label
              className="title-sm text-muted-foreground block"
              htmlFor="to_time"
            >
              To
            </label>

            <Input
              type="time"
              id={"to_time"}
              name={"to_time"}
              required
              value={defValues["to_time"]}
              onChange={handleChange}
            />
          </div>
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
    endpoint: "/packages",
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
              checked={defValues["package_id"] == item.id}
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

      <div className="space-y-2">
        <label className="title-sm mb-2 block">Additional service</label>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {addition_services?.map((item) => (
            <RadioInput
              name={"addition_service"}
              value={item.value}
              key={item?.value}
              label={item.label}
              onChange={handleChange}
              checked={defValues["addition_service"] == item.value}
            />
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <label className="title-sm mb-2 block">
          Add preferred services or additional options you would personally like
          to acquire (Optional)
        </label>

        <Textarea
          name={"details"}
          value={defValues["details"]}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
