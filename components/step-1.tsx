"use client";

import { useFormContext } from "react-hook-form";
import CustomInput from "./custom-input";
import InfoBox from "./info-box";
import { useState, useEffect } from "react";
import { PhoneInput } from "./phone-number-input";
import { Country } from "react-phone-number-input";

const Step1: React.FC = () => {
  const {
    register,
    setValue,
    trigger,
    watch,
    formState: { errors },
  } = useFormContext(); // Access form context
  const [phoneNumber, setPhoneNumber] = useState("");

  // Watch for phone number changes to trigger validation
  const currentPhoneNumber = watch("phoneNumber");

  useEffect(() => {
    if (currentPhoneNumber !== phoneNumber) {
      setValue("phoneNumber", phoneNumber);
      trigger("phoneNumber");
    }
  }, [phoneNumber, setValue, trigger, currentPhoneNumber]);

  return (
    <div className="space-y-6">
      <CustomInput
        label="Full Name of Entity/Individual"
        id="entityName"
        placeholder="Enter full name"
        type="text"
        required={true}
        {...register("entityName")}
      />
      <CustomInput
        label="Email Address"
        id="email"
        placeholder="Enter email address"
        type="email"
        required={true}
        {...register("email")}
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
        placeholder="Enter street name"
        required={true}
        {...register("streetName")}
      />

      <div className="grid lg:grid-cols-2 gap-5">
        <CustomInput
          label="City"
          id="city"
          placeholder="Enter city"
          required={true}
          {...register("city")}
        />
        <CustomInput
          label="Country"
          id="country"
          placeholder="Enter country"
          required={true}
          {...register("country")}
        />
      </div>
      <InfoBox />
    </div>
  );
};

export default Step1;
