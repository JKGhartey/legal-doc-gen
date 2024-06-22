"use client";

import { useFormContext } from "react-hook-form";
import CustomInput from "./custom-input";
import InfoBox from "./info-box";
import { useState } from "react";
import { PhoneInput } from "./phone-number-input";
import { Country } from "react-phone-number-input";

const Step1: React.FC = () => {
  const { register } = useFormContext(); // Access form context
  const [country, setCountry] = useState<Country>();
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <div className="space-y-6">
      <CustomInput
        label="Full Name of Entity/Individual"
        id="entityName"
        placeholder="Enter full name"
        type="text"
        required={true}
        {...register("entityName")} // Register with react-hook-form
      />
      <CustomInput
        label="Email Address"
        id="email"
        placeholder="Enter email address"
        type="email"
        required={true}
        {...register("email")} // Register with react-hook-form
      />
      <PhoneInput
        value={phoneNumber}
        onChange={setPhoneNumber}
        defaultCountry="GH"
        placeholder="Enter a phone number"
        // Register manually since PhoneInput might not be a standard HTML input
      />
      <CustomInput
        label="Street Name"
        id="streetName"
        placeholder="Enter street name"
        required={true}
        {...register("streetName")} // Register with react-hook-form
      />

      <div className="grid lg:grid-cols-2 gap-5">
        <CustomInput
          label="City"
          id="city"
          placeholder="Enter city"
          required={true}
          {...register("city")} // Register with react-hook-form
        />
        <CustomInput
          label="Country"
          id="country"
          placeholder="Enter country"
          required={true}
          {...register("country")} // Register with react-hook-form
        />
      </div>
      <InfoBox />
    </div>
  );
};

export default Step1;
