"use client";

import Input from "@/components/common/Input";
import PasswordInput from "@/components/common/PasswordInput";
import Textarea from "@/components/common/Textarea";
import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/ui/DatePicker";
import { ITabsContent } from "@/interfaces/order";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { Fragment, useEffect, useState } from "react";

const Form = ({ tabsContent }: { tabsContent: ITabsContent }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tabs = searchParams.get("tab") || "0";
  const params = new URLSearchParams(searchParams.toString());

  const [defValues, setDefValues] = useState<any>({});

  const formAction = async (formData: FormData) => {
    setDefValues((prev: any) => {
      return {
        ...prev,
        ...Object.fromEntries(formData),
      };
    });

    if (Number(tabs) < Object.keys(tabsContent).length - 1) {
      params.set("tab", String(Number(tabs) + 1));
      router.push(`?${params.toString()}`, { scroll: false });
      return;
    }
  };

  const content = tabsContent?.[tabs];

  useEffect(() => {
    params.set("tab", "0");
    router.push(`?${params.toString()}`, { scroll: false });
  }, []);

  console.log(defValues);

  return (
    <form action={formAction}>
      <div className="space-y-6 max-w-5xl mx-auto" key={tabs}>
        {content.map((item) => (
          <div className="space-y-3" key={JSON.stringify(item)}>
            <div className="space-y-1">
              <h2 className="title-sm">{item.title}</h2>

              {item.desc && <p className="desc">{item.desc}</p>}
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {item.content.map((item, index) => (
                <Fragment key={index}>
                  {item.type === "radio" ? (
                    <RadioInput
                      name={item.name}
                      value={item.value}
                      label={item.label}
                      defaultChecked={defValues[item.name] === item.value}
                    />
                  ) : item.type === "date" ? (
                    <div className="col-span-full">
                      <DatePicker
                        value={defValues[item.name]}
                        name={item.name}
                        className={
                          "w-full h-auto py-3 font-semibold border-[3px] rounded-xl border-gray-200 text-sm"
                        }
                      />
                    </div>
                  ) : item.type === "textarea" ? (
                    <div className="col-span-full">
                      <label className="title-xs mb-2 block">
                        {item.label}
                      </label>

                      <Textarea
                        name={item.name}
                        defaultValue={defValues[item.name]}
                      />
                    </div>
                  ) : item.type === "input" ? (
                    <div className="col-span-full">
                      <label className="title-xs mb-2 block">
                        {item.label}
                      </label>

                      <Input
                        name={item.name}
                        defaultValue={defValues[item.name]}
                      />
                    </div>
                  ) : item.type === "email" ? (
                    <div className="col-span-full">
                      <label className="title-xs mb-2 block">
                        {item.label}
                      </label>

                      <Input
                        type="email"
                        name={item.name}
                        defaultValue={defValues[item.name]}
                      />
                    </div>
                  ) : item.type === "password" ? (
                    <div className="col-span-full">
                      <label className="title-xs mb-2 block">
                        {item.label}
                      </label>

                      <PasswordInput
                        name={item.name}
                        defaultValue={defValues[item.name]}
                      />
                    </div>
                  ) : item.type === "phone" ? (
                    <div className="col-span-full">
                      <label className="title-xs mb-2 block">
                        {item.label}
                      </label>
                      <Input
                        type="tel"
                        name={item.name}
                        defaultValue={defValues[item.name]}
                      />
                    </div>
                  ) : item.type === "location" ? (
                    <div className="col-span-full">
                      <label className="title-xs mb-2 block">
                        {item.label}
                      </label>
                      <Input
                        type="text"
                        name={item.name}
                        defaultValue={defValues[item.name]}
                      />
                    </div>
                  ) : (
                    <> </>
                  )}
                </Fragment>
              ))}
            </div>
          </div>
        ))}

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

          <Button type="submit" className="font-semibold">
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
}: {
  name: string;
  value: string;
  label: string;
  defaultChecked: boolean;
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
          className="hidden"
          defaultChecked={defaultChecked}
        />
        {label}
      </label>
    </div>
  );
};
