// components/MultiStepForm.tsx
"use client";

import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "./ui/button";
import Step1 from "./step-1";
import Step2 from "./step-2";
import Step3 from "./step-3";
import Review from "./review";
import { ArrowLeft, ArrowRight } from "lucide-react";

// Define the schema with all required fields
const formSchema = z.object({
  entityName: z.string().min(1, "Full Name of Entity/Individual is required"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z
    .string()
    .nonempty("Phone number is required")
    .regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number"),
  streetName: z.string().min(1, "Street Name is required"),
  city: z.string().min(1, "City is required"),
  country: z.string().min(1, "Country is required"),
  contractType: z.string().min(1, "Type of Contract is required"),
  effectiveDate: z.string().min(1, "Effective Date is required"),
  duration: z.string().min(1, "Duration is required"),
  paymentTerms: z.string().min(1, "Payment Terms are required"),
  description: z.string().min(1, "Detailed Description is required"),
  confidentialityClause: z
    .string()
    .min(1, "Confidentiality Clause is required"),
  terminationConditions: z
    .string()
    .min(1, "Termination Conditions are required"),
  disputeResolutionMechanisms: z
    .string()
    .min(1, "Dispute Resolution Mechanisms are required"),
  signatories: z
    .string()
    .min(1, "Names and Titles of the Signatories are required"),
  signingDate: z.string().min(1, "Date of Signing is required"),
});

const MultiStepForm = () => {
  const [step, setStep] = useState(1);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      entityName: "",
      email: "",
      phoneNumber: "",
      streetName: "",
      city: "",
      country: "",
      contractType: "",
      effectiveDate: "",
      duration: "",
      paymentTerms: "",
      description: "",
      confidentialityClause: "",
      terminationConditions: "",
      disputeResolutionMechanisms: "",
      signatories: "",
      signingDate: "",
    },
    mode: "onChange", // Validate on change for real-time feedback
  });

  const { handleSubmit, formState } = form;
  const { isValid } = formState; // Get validation status from formState

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Form Values:", values);
    // Handle form submission
  }

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-6">
          {step === 1 && <Step1 />}
          {step === 2 && <Step2 />}
          {step === 3 && <Step3 />}
          {step === 4 && (
            <Review
              onBack={() => setStep(3)} // Navigate back to Step 3
              onSubmit={handleSubmit(onSubmit)} // Submit the form from the review step
            />
          )}

          <div className="flex flex-col md:flex-row justify-between mt-4 gap-4">
            {step > 1 && step < 4 && (
              <Button
                type="button" // Type "button" to prevent form submission
                onClick={prevStep}
                variant="secondary"
                className="py-[25px] px-[22px] bg-Ash hover:bg-Ash/90 text-black font-semibold uppercase"
              >
                <ArrowLeft size="16px" className="mr-[10px] font-bold" />
                Previous Step
              </Button>
            )}
            {step < 3 ? (
              <Button
                type="button" // Type "button" to prevent form submission
                onClick={nextStep}
                className="py-[25px] px-[22px] font-semibold uppercase"
                // disabled={!isValid} // Disable the button if the form is not valid
              >
                Next
                <ArrowRight size="16px" className="ml-[10px] font-bold" />
              </Button>
            ) : step === 3 ? (
              <Button
                type="button"
                onClick={() => setStep(4)} // Navigate to Review step
                className="py-[25px] px-[22px] font-semibold uppercase"
                // disabled={!isValid} // Disable the button if the form is not valid
              >
                Review
              </Button>
            ) : (
              <div className="flex flex-col md:flex-row gap-4">
                <Button
                  type="button" // Type "button" to prevent form submission
                  onClick={prevStep}
                  variant="secondary"
                  className="py-[25px] px-[22px] bg-Ash hover:bg-Ash/90 text-black font-semibold uppercase"
                >
                  <ArrowLeft size="16px" className="mr-[10px] font-bold" />
                  Go Back
                </Button>

                <Button
                  type="submit"
                  className="py-[25px] px-[22px] uppercase"
                  disabled={!isValid} // Submission also requires form to be valid
                >
                  Submit
                </Button>
              </div>
            )}
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default MultiStepForm;
