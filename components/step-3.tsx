// components/Step3.tsx
"use client";

import { useFormContext } from "react-hook-form";
import CustomInput from "./custom-input";
import { DatePicker } from "./ui/date-picker";
import CardHeader from "./card-header";

const Step3: React.FC = () => {
  const { register } = useFormContext(); // Access form context

  return (
    <div className="space-y-4 lg:space-y-6">
      <CardHeader title="Specific Clauses" />
      {/* Specific Clauses */}
      <div>
        <label
          htmlFor="confidentialityClause"
          className="block text-[16px] font-semibold text-gray-700 mb-2"
        >
          Confidentiality Clause
        </label>
        <textarea
          id="confidentialityClause"
          {...register("confidentialityClause")}
          className="w-full h-32 p-2 border border-gray-300 rounded-md"
          placeholder="Enter confidentiality clause details..."
        ></textarea>
      </div>
      <div>
        <label
          htmlFor="terminationConditions"
          className="block text-[16px] font-semibold text-gray-700 mb-2"
        >
          Termination Conditions
        </label>
        <textarea
          id="terminationConditions"
          {...register("terminationConditions")}
          className="w-full h-32 p-2 border border-gray-300 rounded-md"
          placeholder="Enter termination conditions..."
        ></textarea>
      </div>
      <div>
        <label
          htmlFor="disputeResolutionMechanisms"
          className="block text-[16px] font-semibold text-gray-700 mb-2"
        >
          Dispute Resolution Mechanisms
        </label>
        <textarea
          id="disputeResolutionMechanisms"
          {...register("disputeResolutionMechanisms")}
          className="w-full h-32 p-2 border border-gray-300 rounded-md"
          placeholder="Enter dispute resolution mechanisms..."
        ></textarea>
      </div>

      {/* Signatories */}
      <CustomInput
        label="Names and Titles of the Signatories"
        id="signatories"
        placeholder="Enter names and titles of the signatories"
        required={true}
        {...register("signatories")} // Register with react-hook-form
      />
      <div>
        <label
          htmlFor="signingDate"
          className="block text-[16px] font-semibold text-gray-700 mb-2"
        >
          Date of Signing
        </label>
        <DatePicker
          id="signingDate"
          {...register("signingDate")} // Register with react-hook-form
        />
      </div>

      {/* Navigation Buttons */}
    </div>
  );
};

export default Step3;
