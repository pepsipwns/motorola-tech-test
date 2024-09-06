import { FC } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";

interface InputProps {
  label: string;
  type: string;
  name: string;
  register: UseFormRegister<any>;
  validation: object;
  error?: FieldError;
}

const Input: FC<InputProps> = ({
  label,
  type,
  name,
  register,
  validation,
  error,
}) => (
  <div className="mb-4">
    <label className="block text-sm font-medium mb-1">{label}</label>
    <input
      type={type}
      className="border p-2 w-full"
      {...register(name, validation)}
    />
    {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
  </div>
);

export default Input;
