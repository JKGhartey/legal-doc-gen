// components/CustomCheckbox.tsx
"use client";

import { Checkbox } from "@/components/ui/checkbox"; // Import the Checkbox from your UI library
import { cn } from "@/lib/utils"; // Assuming you have a utility for class names
import { Label } from "./ui/label";

interface CustomCheckboxProps {
  id: string; // Unique identifier for the checkbox
  label: string; // Label to be displayed next to the checkbox
  checked: boolean; // Checked state of the checkbox
  onChange: (checked: boolean) => void; // Handler for change events
  description?: string; // Optional description below the label
  className?: string; // Optional className for custom styling
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  id,
  label,
  checked,
  onChange,
  description,
  className,
}) => {
  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <Checkbox
        id={id}
        checked={checked}
        onCheckedChange={onChange} // Call onChange with the new checked state
        className="rounded-[4px]"
      />
      <div className="flex flex-col">
        <Label
          htmlFor={id}
          className="text-sm font-medium leading-none cursor-pointer"
        >
          {label}
        </Label>
        {description && (
          <p className="text-[10px] text-zinc-400 mt-1">{description}</p>
        )}
      </div>
    </div>
  );
};

export default CustomCheckbox;
