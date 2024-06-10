// components/Step2.js
import { useFormContext } from "react-hook-form";
import { FormControl, FormItem } from "./ui/form";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

const Step2 = () => {
  const { register } = useFormContext();
  return (
    <div className="space-y-6">
      <FormItem>
        <Label
          htmlFor="services"
          className="block text-sm font-medium text-gray-700"
        >
          Services Provided
        </Label>
        <FormControl>
          <Textarea
            id="services"
            {...register("services", { required: true })}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </FormControl>
      </FormItem>

      <FormItem>
        <Label
          htmlFor="paymentTerms"
          className="block text-sm font-medium text-gray-700"
        >
          Payment Terms
        </Label>
        <FormControl>
          <Textarea
            id="paymentTerms"
            {...register("paymentTerms", { required: true })}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </FormControl>
      </FormItem>

      <FormItem>
        <Label
          htmlFor="terminationConditions"
          className="block text-sm font-medium text-gray-700"
        >
          Termination Conditions
        </Label>
        <FormControl>
          <Textarea
            id="terminationConditions"
            {...register("terminationConditions", { required: true })}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </FormControl>
      </FormItem>
    </div>
  );
};

export default Step2;
