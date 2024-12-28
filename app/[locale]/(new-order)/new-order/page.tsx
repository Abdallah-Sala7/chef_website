"use client";

import Image from "next/image";
import React from "react";
import OrderTabs from "./OrderTabs";
import Form from "./Form";
import cookieClient from "js-cookie";
import { SESSION_NAME } from "@/constant";

const OrderPage = () => {
  const isLoggedIn = cookieClient.get(SESSION_NAME);

  return (
    <section>
      <div className="w-full bg-gray-50">
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
        <Form />
      </div>
    </section>
  );
};

export default OrderPage;
