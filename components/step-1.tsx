"use client";

import { useFormContext } from "react-hook-form";
import { FormControl, FormItem } from "./ui/form";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import CustomInput from "./custom-input";
import InfoBox from "./info-box";
import PhoneNumberInput from "./phone-number-input";
import { useState } from "react";

const Step1: React.FC = () => {
  const { register } = useFormContext<FormData>(); // Specify FormData type
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneNumberChange = (value: string) => {
    setPhoneNumber(value);
  };
  return (
    <div className="space-y-6">
      <CustomInput
        label="Full Name of Entity/Individual"
        id="entityName"
        name="entityName"
        placeholder="Enter full name"
        type="text"
        required={true}
      />
      <CustomInput
        label="Email Address"
        id="entityName"
        name="entityName"
        placeholder="Enter full name"
        type="email"
        required={true}
      />
      <CustomInput
        label="Email Address"
        id="entityName"
        name="entityName"
        placeholder="Enter full name"
        type="email"
        required={true}
      />
      <CustomInput
        label="Email Address"
        id="entityName"
        name="entityName"
        placeholder="Enter full name"
        type="email"
        required={true}
      />
      <CustomInput
        label="Email Address"
        id="entityName"
        name="entityName"
        placeholder="Enter full name"
        type="email"
        required={true}
      />
      {/* <PhoneNumberInput
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
      /> */}
      <InfoBox />
    </div>
  );
};

export default Step1;
