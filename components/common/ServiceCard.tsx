import Image from "next/image";
import React from "react";

const ServiceCard = ({ title, img }: { title: string; img: string }) => {
  return (
    <div className="rounded-2xl shadow-md group">
      <div className="w-full aspect-[5/3] max-h-64 overflow-hidden rounded-t-2xl">
        <Image
          src={img}
          alt={title}
          width={400}
          height={400}
          className="w-full h-full object-cover brightness-75 group-hover:brightness-100 group-hover:scale-110 transition-all duration-300"
        />
      </div>

      <div className="px-4 py-6">
        <p className="desc text-foreground">{title}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
