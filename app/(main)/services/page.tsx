import ServiceCard from "@/components/common/ServiceCard";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const services = [
  {
    name: "Chef for an occasion (meal or day)",
    image: "/services/service_icon_1.png",
  },
  {
    name: "Chef for a week (for a trip)",
    image: "/services/service_icon_2.png",
  },
  {
    name: "Chef for a month (regular basis)",
    image: "/services/service_icon_3.png",
  },
  {
    name: "Large event with full staff",
    image: "/services/service_icon_4.png",
  },
  {
    name: "Waiter",
    image: "/services/service_icon_5.png",
  },
  {
    name: "Bartender",
    image: "/services/service_icon_5.png",
  },
];

const ServicesPage = () => {
  return (
    <div>
      <section>
        <div className="relative">
          <div className="absolute inset-0 z-[-1]">
            <Image
              src="/about_cover.jpeg"
              alt="order image"
              className="w-full h-full object-cover brightness-50"
              width={1500}
              height={400}
              quality={100}
              loading="lazy"
            />
          </div>

          <div className="container pt-20 pb-40 flex flex-col justify-center items-center">
            <div className="max-w-2xl mb-4">
              <h2 className="title text-center text-white">
                Book the right chef for you in easy and simple steps through our
                website.
              </h2>
            </div>

            <Link href={"/new-order"}>
              <Button className="px-8 font-semibold">Book Now</Button>
            </Link>
          </div>
        </div>

        <div className="container">
          <div className="max-w-5xl mx-auto pb-10 -mt-20 grid grid-cols-1 gap-y-6 gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              title={
                "We are here to provide you with a private chef for your special occasion, whether small or large."
              }
              img={"/services/service_1.png"}
            />

            <ServiceCard
              title={
                "Excellent service for a week or a month, where we provide you with a chef and daily cooking."
              }
              img={"/services/service_2.png"}
            />

            <ServiceCard
              title={
                "Enjoy a wonderful party with a professional hosting team that provides you with everything you need."
              }
              img={"/services/service_3.png"}
            />
          </div>
        </div>
      </section>

      <section className="section-style shadow-[0_0_4px_0_rgba(0,0,0,0.15)]">
        <div className="container">
          <h2 className="title text-center text-primary !font-bold mb-10">
            Our services
          </h2>

          <div className="flex justify-between flex-col gap-10 md:flex-row">
            <div className="flex-1 max-w-xl">
              <h3 className="title-base mb-6">
                Join the ultimate culinary journey with our distinguished chefs
                to transform every occasion into an unforgettable experience.
              </h3>

              <div className="space-y-4">
                {services.map((service, index) => (
                  <div className="flex items-center gap-3" key={index}>
                    <Image
                      src={service.image}
                      alt={service.name}
                      className="w-10 h-10 md:w-12 md:h-12 object-contain"
                      width={54}
                      height={54}
                      quality={100}
                      loading="lazy"
                    />

                    <p className="title-sm">{service.name}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 max-w-sm rounded-3xl overflow-hidden mx-auto md:mx-0">
              <Image
                src="/service_menu.png"
                alt="order image"
                className="w-full h-full object-cover"
                width={1500}
                height={400}
                quality={100}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
