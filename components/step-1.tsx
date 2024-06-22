"use client";

import { useFormContext } from "react-hook-form";
import { FormControl, FormItem } from "./ui/form";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import CustomInput from "./custom-input";
import InfoBox from "./info-box";
import { useState } from "react";
import { PhoneInput } from "./phone-number-input";
import { Country } from "react-phone-number-input";

const Step1: React.FC = () => {
  const { register } = useFormContext<FormData>(); // Specify FormData type
  const [country, setCountry] = useState<Country>();
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
      <PhoneInput
        value={phoneNumber}
        onChange={setPhoneNumber}
        defaultCountry="GH"
        placeholder="Enter a phone number"
      />
      <CustomInput
        label="Street Name"
        id="streetName"
        name="streetName"
        placeholder="Enter street name"
        required={true}
      />

      <div className="grid lg:grid-cols-2 gap-5">
        <CustomInput
          label="City"
          id="city"
          name="city"
          placeholder="Enter city"
          required={true}
        />
        <CustomInput
          label="Country"
          id="country"
          name="country"
          placeholder="Enter country"
          required={true}
        />
      </div>
      <InfoBox />
    </div>
  );
};

export default Step1;
