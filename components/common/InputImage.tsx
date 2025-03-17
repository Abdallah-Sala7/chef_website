import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { CameraIcon } from "lucide-react";

const InputImage = ({
  defValue = "/placeholder.png",
  className,
  onChange,
  iconClass,
}: {
  defValue?: string;
  className?: string;
  onChange?: (img: File) => void;
  iconClass?: string;
}) => {
  const [img, setImg] = useState<File | null>(null);

  const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetFile = e.target.files?.[0];
    if (targetFile) {
      setImg(targetFile);
    }

    onChange && onChange(targetFile as File);
  };

  return (
    <label
      htmlFor="image"
      className={cn(
        "relative flex items-center justify-center w-24 h-24 bg-gray-200 rounded-lg cursor-pointer overflow-hidden",
        className
      )}
    >
      <input
        type="file"
        onChange={handelChange}
        accept="image/*"
        className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
        name="image"
      />

      <img
        alt="image"
        width={300}
        height={300}
        className="w-full h-full rounded-lg object-cover"
        src={img ? URL.createObjectURL(img) : defValue}
      />

      <div className="absolute pointer-events-none top-0 left-0 w-full h-full bg-black bg-opacity-20 rounded-lg flex items-center justify-center">
        <CameraIcon className={cn("w-12 h-12 text-white", iconClass)} />
      </div>
    </label>
  );
};

export default InputImage;
