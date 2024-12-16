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
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ScrollArea } from "./ui/scroll-area";
import Link from "next/link";
import FormCard from "./form-card";

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
    mode: "onChange",
  });

  const { handleSubmit, formState, trigger } = form;
  const { isValid, errors } = formState;

  const nextStep = async () => {
    const fields = getFieldsForStep(step);
    const isStepValid = await trigger(fields);
    if (isStepValid) {
      setStep((prev) => prev + 1);
    }
  };

  const prevStep = () => setStep((prev) => prev - 1);

  const getFieldsForStep = (step: number): (keyof typeof formSchema._type)[] => {
    switch (step) {
      case 1:
        return ['entityName', 'email', 'phoneNumber', 'streetName', 'city', 'country'];
      case 2:
        return ['contractType', 'effectiveDate', 'duration', 'paymentTerms'];
      case 3:
        return ['description', 'confidentialityClause', 'terminationConditions', 'disputeResolutionMechanisms'];
      case 4:
        return ['signatories', 'signingDate'];
      default:
        return [];
    }
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Form Values:", values);
    // Handle form submission
  }

  const steps = [
    { number: 1, title: "Basic Information" },
    { number: 2, title: "Contract Details" },
    { number: 3, title: "Specific Clauses" },
    { number: 4, title: "Review" },
  ];

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="h-full">
        <FormCard
          footer={
            <>
              {/* Error Summary */}
              {Object.keys(errors).length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-4 rounded-lg bg-red-50 p-4"
                >
                  <p className="text-sm font-medium text-red-800">
                    Please fill in all required fields correctly before proceeding.
                  </p>
                </motion.div>
              )}

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Link href="/dashboard">
                    <Button
                      type="button"
                      variant="outline"
                      className="flex items-center justify-center gap-2"
                    >
                      Cancel
                    </Button>
                  </Link>
                  {step > 1 && (
                    <Button
                      type="button"
                      onClick={prevStep}
                      variant="outline"
                      className="flex items-center justify-center gap-2"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Previous
                    </Button>
                  )}
                </div>
                
                {step < 4 ? (
                  <Button
                    type="button"
                    onClick={nextStep}
                    className="flex items-center justify-center gap-2 bg-TealGreen hover:bg-TealGreen/90"
                  >
                    Next
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    className="bg-TealGreen hover:bg-TealGreen/90"
                    disabled={!isValid}
                  >
                    Submit Application
                  </Button>
                )}
              </div>
            </>
          }
        >
          {/* Progress Steps */}
          <div className="mb-8">
            <div className="relative flex justify-between">
              {steps.map((s, i) => (
                <div key={s.number} className="relative flex flex-col items-center flex-1">
                  <div
                    className={cn(
                      "flex h-8 w-8 items-center justify-center rounded-full border-2 bg-white transition-colors duration-200 z-10",
                      step > s.number
                        ? "border-TealGreen bg-TealGreen text-white"
                        : step === s.number
                        ? "border-TealGreen text-TealGreen"
                        : "border-gray-300 text-gray-300"
                    )}
                  >
                    {step > s.number ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <span>{s.number}</span>
                    )}
                  </div>
                  <span
                    className={cn(
                      "mt-2 text-xs font-medium text-center",
                      step >= s.number ? "text-TealGreen" : "text-gray-500"
                    )}
                  >
                    {s.title}
                  </span>
                  {i < steps.length - 1 && (
                    <div
                      className={cn(
                        "absolute left-[50%] right-0 top-4 h-[2px] -translate-y-1/2",
                        step > s.number ? "bg-TealGreen" : "bg-gray-300"
                      )}
                      style={{ width: "100%" }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form Steps */}
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            >
              {step === 1 && <Step1 />}
              {step === 2 && <Step2 />}
              {step === 3 && <Step3 />}
              {step === 4 && (
                <Review
                  onBack={() => setStep(3)}
                  onSubmit={handleSubmit(onSubmit)}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </FormCard>
      </form>
    </FormProvider>
  );
};

export default MultiStepForm;
