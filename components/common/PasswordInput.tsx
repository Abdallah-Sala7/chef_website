"use client";
import Input from "./Input";
import { InputHTMLAttributes, useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";

const PasswordInput = ({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <Input
        type={showPassword ? "text" : "password"}
        required
        className="pe-11"
        {...props}
      />

      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute top-1/2 -translate-y-1/2 right-4"
      >
        {showPassword ? <EyeIcon size={20} /> : <EyeOffIcon size={20} />}
      </button>
    </div>
  );
};

export default PasswordInput;
