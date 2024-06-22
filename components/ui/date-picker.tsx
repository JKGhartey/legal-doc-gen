// components/DatePicker.tsx
"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "./button";

interface DatePickerProps {
  id?: string;
  name?: string;
  selectedDate?: Date;
  onDateChange?: (date: Date | undefined) => void;
}

export function DatePicker({
  id,
  name,
  selectedDate,
  onDateChange,
  ...props
}: DatePickerProps) {
  const [date, setDate] = React.useState<Date | undefined>(selectedDate);

  // Handler for date change to integrate with react-hook-form
  const handleDateChange = (selected: Date | undefined) => {
    setDate(selected);
    if (onDateChange) {
      onDateChange(selected);
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          id={id} // Include id
          name={name} // Include name for form integration
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
          type="button" // Ensure type is "button" for this usage
          {...props} // Spread additional props safely
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleDateChange} // Use the handler for date changes
          initialFocus
          className="bg-white"
        />
      </PopoverContent>
    </Popover>
  );
}
