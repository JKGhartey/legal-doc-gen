// components/CustomInput.tsx
import React from "react";
import { useFormContext } from "react-hook-form";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectTrigger, SelectContent, SelectItem } from "./ui/select"; // Import Select components from shadcn
import { cn } from "@/lib/utils";

interface CustomInputProps {
  label: string;
  id: string;
  name: string;
  options?: { value: string; label: string }[]; // Options for Select component
  placeholder?: string;
  required?: boolean;
  className?: string;
}

const CustomSelect: React.FC<CustomInputProps> = ({
  label,
  id,
  name,
  options,
  placeholder,
  required = false,
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

      {/* Conditionally render Select or Input based on options prop */}
      {options ? (
        <Select>
          <SelectTrigger
            id={id}
            className={cn(
              "flex h-10 w-full rounded-[5px] border bg-background px-3 py-2 text-sm placeholder:text-muted-foreground ring-offset-background transition-colors duration-150 ease-in-out border-gray-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-TealGreen focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-gray-100",
              className,
              errors[name]
                ? "border-red-500 focus-visible:ring-red-500"
                : "border-gray-300"
            )}
            {...register(name)} // Register the select field with react-hook-form
          >
            {placeholder || "Select an option"}
          </SelectTrigger>
          <SelectContent className="w-full bg-white">
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      ) : (
        <Input
          type="text"
          id={id}
          {...register(name)} // Register the input field with react-hook-form
          className={cn(
            "flex h-10 w-full rounded-[5px] border bg-background px-3 py-2 text-sm placeholder:text-muted-foreground ring-offset-background transition-colors duration-150 ease-in-out border-gray-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-TealGreen focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-gray-100",
            className,
            errors[name]
              ? "border-red-500 focus-visible:ring-red-500"
              : "border-gray-300"
          )}
          placeholder={placeholder}
          required={required}
        />
      )}
      {errors[name] && (
        <p className="mt-2 text-xs text-red-600">
          {errors[name]?.message?.toString()}
        </p>
      )}
    </div>
  );
};

export default CustomSelect;
