// components/Review.tsx
"use client";

import { useFormContext } from "react-hook-form";
import { useState } from "react";
import CustomCheckbox from "./custom-checkbox";

interface ReviewProps {
  onBack: () => void; // Prop for navigating back to the previous step
  onSubmit: () => void; // Prop for submitting the form
}

const Review: React.FC<ReviewProps> = ({ onBack, onSubmit }) => {
  const { getValues } = useFormContext(); // Access form values
  const values = getValues(); // Get all form values

  const [agreeTerms, setAgreeTerms] = useState(false);
  const [confirmInfo, setConfirmInfo] = useState(false);
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [validInformation, setValidInformation] = useState(false);

  const isSubmitDisabled = !agreeTerms || !confirmInfo;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Review Your Information
      </h2>

      {/* Display collected data */}
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Entity Information</h3>
          <p>Full Name: {values.entityName}</p>
          <p>Email: {values.email}</p>
          <p>Phone Number: {values.phoneNumber}</p>
          <p>Street Name: {values.streetName}</p>
          <p>City: {values.city}</p>
          <p>Country: {values.country}</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Contract Details</h3>
          <p>Type of Contract: {values.contractType}</p>
          <p>Effective Date: {values.effectiveDate}</p>
          <p>Duration: {values.duration}</p>
          <p>Payment Terms: {values.paymentTerms}</p>
          <p>Detailed Description: {values.description}</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Clauses</h3>
          <p>Confidentiality Clause: {values.confidentialityClause}</p>
          <p>Termination Conditions: {values.terminationConditions}</p>
          <p>
            Dispute Resolution Mechanisms: {values.disputeResolutionMechanisms}
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Signatories</h3>
          <p>Names and Titles of the Signatories: {values.signatories}</p>
          <p>Date of Signing: {values.signingDate}</p>
        </div>
      </div>

      {/* Agreement Checkboxes */}
      <div className="space-y-2">
        <CustomCheckbox
          id="terms"
          label="Accept Terms and Conditions"
          description=" You agree to our Terms of Service and Privacy Policy."
          checked={termsAgreed}
          onChange={setTermsAgreed}
        />
        <CustomCheckbox
          id="correctinfo"
          label="All information provided is true."
          checked={validInformation}
          onChange={setValidInformation}
        />
      </div>
    </div>
  );
};

export default Review;
