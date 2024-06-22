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
    },
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="space-y-6">
          {step === 1 && <Step1 />}
          {step === 2 && <Step2 />}
          {step === 3 && <Step3 onBack={prevStep} />}

          <div className="flex justify-between mt-4">
            {step > 1 && (
              <Button
                onClick={prevStep}
                variant="secondary"
                className="px-4 py-2"
              >
                Previous Step
              </Button>
            )}
            {step < 3 ? (
              <Button onClick={nextStep} className="px-4 py-2">
                Next
              </Button>
            ) : (
              <Button type="submit" className="px-4 py-2">
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
