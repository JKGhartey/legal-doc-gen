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
import CardHeader from "./card-header";

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
          {step === 3 && <Step3 onBack={prevStep} />}

          <div className="flex justify-between mt-4">
            {step > 1 && (
              <Button
                type="button" // Type "button" to prevent form submission
                onClick={prevStep}
                variant="secondary"
                className="px-4 py-2"
              >
                Previous Step
              </Button>
            )}
            {step < 3 ? (
              <Button
                type="button" // Type "button" to prevent form submission
                onClick={nextStep}
                className="px-4 py-2"
                // disabled={!isValid} // Disable the button if the form is not valid
              >
                Next
              </Button>
            ) : (
              <Button type="submit" className="px-4 py-2" disabled={!isValid}>
                Submit
              </Button>
            )}
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default MultiStepForm;
