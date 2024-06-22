// components/CustomInput.tsx
import React from "react";
import { useFormContext } from "react-hook-form";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { cn } from "@/lib/utils";

interface CustomInputProps {
  label: string;
  id: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  id,
  name,
  type = "text",
  placeholder,
  required = false,
  disabled = false,
  className,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext(); // Access form context and errors

  return (
    <div className="mb-6">
      <Label
        htmlFor={id}
        className="block text-[16px] font-semibold text-gray-700 mb-2"
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </Label>
      <Input
        type={type}
        id={id}
        {...register(name)} // Register the input field with react-hook-form
        className={cn(
          "flex h-14 md:h-16 lg:h-10 w-full rounded-[5px] border bg-background px-3 py-2 text-sm placeholder:text-muted-foreground ring-offset-background transition-colors duration-150 ease-in-out border-gray-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-TealGreen focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-gray-100",
          errors[name]
            ? "border-red-500 focus-visible:ring-red-500"
            : "border-gray-300"
        )}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
      />
      {errors[name] && (
        <p className="mt-2 text-xs text-red-600">
          {errors[name]?.message?.toString()}
        </p>
      )}
    </div>
  );
};

export default CustomInput;
