import {
    FieldError,
    FieldValues,
    Path,
    UseFormRegister,
} from "react-hook-form";

interface InputProps<T extends FieldValues> {
    label: string;
    type: string;
    name: Path<T>;
    register: UseFormRegister<T>;
    validation: object;
    error?: FieldError;
}

const Input = <T extends FieldValues>({
    label,
    type,
    name,
    register,
    validation,
    error,
}: InputProps<T>) => (
    <div className="mb-4">
        <label htmlFor={name} className="mb-1 block text-sm font-medium">
            {label}
        </label>
        <input
            id={name}
            type={type}
            className="w-full border p-2"
            {...register(name, validation)}
        />
        {error && <p className="mt-1 text-sm text-red-500">{error.message}</p>}
    </div>
);

export default Input;
