"use client";

import Image from "next/image";
import React from "react";
import OrderTabs from "./OrderTabs";
import Form from "./Form";
import { ITabsContent } from "@/interfaces/order";

const tabsContent: ITabsContent = {
  "0": [
    {
      title: "Type of service",
      content: [
        {
          type: "radio",
          name: "service",
          value: "daily",
          label: "Daily Service",
        },
        {
          type: "radio",
          name: "service",
          value: "multi-day",
          label: "Multi-day Service",
        },
        {
          type: "radio",
          name: "service",
          value: "monthly",
          label: "Monthly Service",
        },
      ],
    },
    {
      title: "Age",
      content: [
        {
          type: "radio",
          name: "age",
          value: "children",
          label: "Children",
        },
        {
          type: "radio",
          name: "age",
          value: "adults",
          label: "Adults",
        },
        {
          type: "radio",
          name: "age",
          value: "teens",
          label: "Teens",
        },
      ],
    },
  ],
  "1": [
    {
      title: "Cuisines",
      desc: "Can't find the cuisine you like? No worries! Add a new dish, select it, and send it directly to the chef.",
      content: [
        {
          type: "radio",
          name: "cuisine",
          value: "international",
          label: "International",
        },
        {
          type: "radio",
          name: "cuisine",
          value: "french",
          label: "French",
        },
        {
          type: "radio",
          name: "cuisine",
          value: "italian",
          label: "Italian",
        },
        {
          type: "radio",
          name: "cuisine",
          value: "fusion",
          label: "Fusion",
        },
        {
          type: "radio",
          name: "cuisine",
          value: "mediterranean",
          label: "Mediterranean",
        },
        {
          type: "radio",
          name: "cuisine",
          value: "american",
          label: "American",
        },
        {
          type: "radio",
          name: "cuisine",
          value: "arabic",
          label: "Arabic",
        },
      ],
    },
  ],
  "2": [
    {
      title: "Meal",
      content: [
        {
          type: "radio",
          name: "meal",
          value: "breakfast",
          label: "Breakfast",
        },
        {
          type: "radio",
          name: "meal",
          value: "lunch",
          label: "Lunch",
        },
        {
          type: "radio",
          name: "meal",
          value: "dinner",
          label: "Dinner",
        },
      ],
    },
    {
      title: "Service Day",
      content: [
        {
          type: "date",
          name: "service-day",
          value: "",
          label: "",
        },
      ],
    },
  ],
  "3": [
    {
      title: "Chef Service Packages and Pricing",
      content: [
        {
          type: "radio",
          name: "packages",
          value: "average",
          label: "Average",
        },
        {
          type: "radio",
          name: "packages",
          value: "vip",
          label: "VIP",
        },
        {
          type: "radio",
          name: "packages",
          value: "top-notch",
          label: "Top Notch",
        },
      ],
    },
  ],
  "4": [
    {
      title:
        "Describe Your Event to Help Our Chefs Personalize Your Experience",
      desc: "Provide details about the occasion, atmosphere, preferred menu, and any other important information so they can tailor their service to your needs.",
      content: [
        {
          type: "input",
          name: "additional-service",
          label: "Additional service",
          value: "",
        },
        {
          type: "textarea",
          name: "preferred-service",
          label:
            "Add preferred services or additional options you would personally like to acquire (Optional)",
          value: "",
        },
      ],
    },
  ],
  "5": [
    {
      title: "Final Step!",
      desc: "You're done! Now, just enter your contact information, and we'll send you personalized menu suggestions in less than 20 minutes for free.",
      content: [
        {
          type: "input",
          name: "name",
          label: "Name",
          value: "",
        },
        {
          type: "email",
          name: "email",
          label: "Email",
          value: "",
        },
        {
          type: "password",
          name: "password",
          label: "Password",
          value: "",
        },
        {
          type: "phone",
          name: "phone",
          label: "Phone",
          value: "",
        },
      ],
    },
  ],
};

const OrderPage = () => {
  return (
    <section>
      <div className="w-full">
        <Image
          src="/order_bg.png"
          alt="order image"
          className="w-full max-h-80 min-h-40 object-cover"
          width={1500}
          height={320}
          quality={100}
        />
      </div>

      <div className="container section-style">
        <OrderTabs tabsLength={Object.keys(tabsContent).length} />

        <div className="">
          <Form tabsContent={tabsContent} />
        </div>
      </div>
    </section>
  );
};

export default OrderPage;
