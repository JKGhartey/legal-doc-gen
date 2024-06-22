// components/Step2.tsx
"use client";

import { useFormContext } from "react-hook-form";
import CustomInput from "./custom-input";
import { DatePicker } from "./ui/date-picker";
import CustomSelect from "./custom-select";

const Step2: React.FC = () => {
  const { register } = useFormContext(); // Access form context

  // Define options for the duration select
  const durationOptions = [
    { value: "1-month", label: "1 Month" },
    { value: "3-months", label: "3 Months" },
    { value: "6-months", label: "6 Months" },
    { value: "1-year", label: "1 Year" },
  ];

  // Define options for the payment terms select
  const paymentTermsOptions = [
    { value: "monthly", label: "Monthly" },
    { value: "quarterly", label: "Quarterly" },
    { value: "yearly", label: "Yearly" },
    { value: "upon-completion", label: "Upon Completion" },
  ];

  return (
    <div className="space-y-4 lg:space-y-6">
      <CustomInput
        label="Type of Contract"
        id="contractType"
        placeholder="e.g., Service Agreement, Sales Contract"
        required={true}
        {...register("contractType")} // Register with react-hook-form
      />
      <div>
        <label
          htmlFor="effectiveDate"
          className="block text-[16px] font-semibold text-gray-700 mb-2"
        >
          Effective Date of the Contract
        </label>
        <DatePicker
          id="effectiveDate"
          {...register("effectiveDate")} // Register with react-hook-form
        />
      </div>
      <CustomSelect
        label="Duration or Term of the Contract"
        id="duration"
        name="duration"
        options={durationOptions} // Pass options for Select
        required={true}
        placeholder="Select the duration"
      />
      <CustomSelect
        label="Payment Terms"
        id="paymentTerms"
        name="paymentTerms"
        options={paymentTermsOptions} // Pass options for Select
        required={true}
        placeholder="Select the payment terms"
      />
      <div>
        <label
          htmlFor="description"
          className="block text-[16px] font-semibold text-gray-700 mb-2"
        >
          Detailed Description of Services or Goods
        </label>
        <textarea
          id="description"
          {...register("description")} // Register with react-hook-form
          className="w-full h-32 p-2 border border-gray-300 rounded-md"
          placeholder="Provide a detailed description..."
        ></textarea>
      </div>
    </div>
  );
};

export default Step2;
