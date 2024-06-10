"use client";

import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { formSchema } from "@/schemas/validation";
import FormCard from "@/components/form-card";
import CardHeader from "@/components/card-header";
import CustomInput from "@/components/custom-input";
import { Button } from "@/components/ui/button";
import MultiStepForm from "@/components/multi-step-form";

// // Define the type based on the schema
// type FormData = z.infer<typeof formSchema>;

const HomePage: React.FC = () => {
  // const form = useForm<z.infer<typeof formSchema>>({
  //   resolver: zodResolver(formSchema),
  //   defaultValues: {
  //     entityName: "",
  //   },
  // });

  // function onSubmit(values: z.infer<typeof formSchema>) {
  //   // Do something with the form values.
  //   // ✅ This will be type-safe and validated.
  //   console.log(values);
  // }

  return (
    <div className=" flex items-center justify-center bg-gradient-to-b from-gray-100 to-gray-200">
      <FormCard>
        <CardHeader title="What Kind of Document do you want?" />
        <MultiStepForm />
      </FormCard>
    </div>
  );
};

export default HomePage;
