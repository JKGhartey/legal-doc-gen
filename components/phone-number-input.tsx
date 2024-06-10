import { CountryCode, fetchCountryCodes } from "@/lib/fetchCountryCode";
import React, { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface PhoneNumberInputProps {
  value: string;
  onChange: (value: string) => void;
}

const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({
  value,
  onChange,
}) => {
  const [countryCodes, setCountryCodes] = useState<CountryCode[]>([]);
  const [selectedCode, setSelectedCode] = useState<string>("");

  useEffect(() => {
    // Fetch country codes when the component mounts
    fetchCountryCodes().then(setCountryCodes);
  }, []);

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCode(event.target.value);
  };

  const handlePhoneNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    onChange(event.target.value);
  };

  console.log(countryCodes);

  return (
    <div className="flex items-center space-x-2">
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent className="bg-white">
          <SelectGroup>
            <SelectLabel>Country Code</SelectLabel>
            {}
          </SelectGroup>
        </SelectContent>
      </Select>
      <input
        type="tel"
        value={value}
        onChange={handlePhoneNumberChange}
        className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter phone number"
      />
    </div>
  );
};

export default PhoneNumberInput;
