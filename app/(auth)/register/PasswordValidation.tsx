"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { useEffect } from "react";

const PasswordValidation = ({
  values,
  setValues,
}: {
  values: any;
  setValues: any;
}) => {
  const hasMinCharacters = values.password && values.password?.length >= 8;
  const passwordEmpty = values.password && values.password !== "";
  const matchPassword =
    values.password === values.password_confirmation && passwordEmpty
      ? true
      : false;

  const hasLowercase = /[a-z]/.test(values.password);
  const hasUppercase = /[A-Z]/.test(values.password);
  const hasNumbers = /\d/.test(values.password);
  const hasSpecialCharacter = /[@$!%*?&]/.test(values.password);

  useEffect(() => {
    if (
      hasMinCharacters &&
      hasLowercase &&
      hasUppercase &&
      hasNumbers &&
      matchPassword &&
      hasSpecialCharacter &&
      passwordEmpty
    ) {
      setValues("isValid", 1);
    } else if (values.isValid === 1) {
      setValues("isValid", 0);
    }
  }, [
    hasMinCharacters,
    hasLowercase,
    hasUppercase,
    hasNumbers,
    matchPassword,
    hasSpecialCharacter,
    passwordEmpty,
  ]);

  return (
    <div className="space-y-1">
      <div className="flex items-center gap-2">
        <Checkbox
          disabled={!passwordEmpty}
          name="passwordEmpty"
          checked={passwordEmpty || false}
        />

        <label className="text-sm text-gray-600">Password is required</label>
      </div>

      <div className="flex items-center gap-2">
        <Checkbox
          disabled={!hasMinCharacters}
          checked={hasMinCharacters || false}
          name="hasMinCharacters"
        />

        <label className="text-sm text-gray-600">
          Password must contain min of 8 characters
        </label>
      </div>

      <div className="flex items-center gap-2">
        <Checkbox
          disabled={!hasUppercase}
          checked={hasUppercase}
          name="hasUppercase"
        />
        <label className="text-sm text-gray-600">
          Password must contain Uppercase
        </label>
      </div>

      <div className="flex items-center gap-2">
        <Checkbox
          disabled={!hasLowercase}
          checked={hasLowercase}
          name="hasLowercase"
        />
        <label className="text-sm text-gray-600">
          Password must contain LowerCase
        </label>
      </div>

      <div className="flex items-center gap-2">
        <Checkbox
          disabled={!hasNumbers}
          checked={hasNumbers}
          name="hasNumbers"
        />
        <label className="text-sm text-gray-600">
          Password must contain numbers
        </label>
      </div>

      <div className="flex items-center gap-2">
        <Checkbox
          disabled={!hasSpecialCharacter}
          checked={hasSpecialCharacter}
          name="hasSpecialCharacter"
        />
        <label className="text-sm text-gray-600">
          Password must contain special character
        </label>
      </div>

      <div className="flex items-center gap-2">
        <Checkbox
          disabled={!matchPassword}
          checked={matchPassword}
          name="matchPassword"
        />
        <label className="text-sm text-gray-600">
          Password and confirm password must be match
        </label>
      </div>
    </div>
  );
};

export default PasswordValidation;
