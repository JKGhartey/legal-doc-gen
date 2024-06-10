// components/MultiStepForm.js
import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "./ui/button";
import Step1 from "./step-1";

const formSchema = z.object({
  companyName: z.string().min(1, "Company Name is required"),
  email: z.string().email("Invalid email address"),
  countryCode: z.string().min(1, "Country Code is required"),
  country: z.string().min(1, "Country is required"),
});

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const methods = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: "",
      email: "",
      countryCode: "",
      country: "",
    },
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <FormProvider {...methods}>
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full space-y-6">
        <h2 className="text-2xl font-semibold">
          What Kind of Document do you want?
        </h2>
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
    </FormProvider>
  );
};

export default MultiStepForm;
