import React from "react";
import PasswordValidation from "./PasswordValidation";
import PasswordInput from "@/components/common/PasswordInput";
import Input from "@/components/common/Input";

const RegisterForm = ({
  errors,
  values,
  handleChange,
  setFieldValue,
}: {
  errors: any;
  values: any;
  handleChange: any;
  setFieldValue: any;
}) => {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="name" className="form-label">
          Full name
        </label>

        <Input
          type="text"
          id="name"
          name="name"
          value={values.name}
          onChange={handleChange}
          required
        />

        {errors.name && <p className="form-error">{errors.name}</p>}
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="form-label">
          Email address
        </label>

        <Input
          type="email"
          id="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          required
        />
        {errors.email && <p className="form-error">{errors.email}</p>}
      </div>

      <div className="space-y-2">
        <label htmlFor="phone" className="form-label">
          Mobile number
        </label>

        <Input
          type="tel"
          id="phone"
          name="phone"
          value={values.phone}
          onChange={handleChange}
          required
        />
        {errors.phone && <p className="form-error">{errors.phone}</p>}
      </div>

      <div className="space-y-2">
        <label htmlFor="password" className="form-label">
          Password
        </label>

        <PasswordInput
          name="password"
          value={values.password}
          onChange={handleChange}
          required
        />
        {errors.password && <p className="form-error">{errors.password}</p>}
      </div>

      <div className="space-y-2">
        <label htmlFor="password_confirmation" className="form-label">
          Confirm password
        </label>

        <PasswordInput
          name="password_confirmation"
          value={values.password_confirmation}
          onChange={handleChange}
          required
        />
      </div>

      <PasswordValidation values={values} setValues={setFieldValue} />
    </div>
  );
};

export default RegisterForm;
