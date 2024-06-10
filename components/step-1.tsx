// components/Step1.js
import { useFormContext } from "react-hook-form";
import { FormControl, FormItem } from "./ui/form";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

const Step1: React.FC = () => {
  const { register } = useFormContext<FormData>(); // Specify FormData type
  return (
    <div className="space-y-6">
      <FormItem>
        <Label
          htmlFor="companyName"
          className="block text-sm font-medium text-gray-700"
        >
          Full Name of Entity/Individual
        </Label>
        <FormControl>
          <Input
            id="companyName"
            {...register("companyName", { required: true })}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </FormControl>
      </FormItem>

      <FormItem>
        <Label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email Address
        </Label>
        <FormControl>
          <Input
            id="email"
            type="email"
            {...register("email", { required: true })}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </FormControl>
      </FormItem>

      <div className="flex space-x-4">
        <FormItem className="w-1/2">
          <Label
            htmlFor="countryCode"
            className="block text-sm font-medium text-gray-700"
          >
            Country Code
          </Label>
          <FormControl>
            <Input
              id="countryCode"
              {...register("countryCode", { required: true })}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </FormControl>
        </FormItem>

        <FormItem className="w-1/2">
          <Label
            htmlFor="country"
            className="block text-sm font-medium text-gray-700"
          >
            Country
          </Label>
          <FormControl>
            <Input
              id="country"
              {...register("country", { required: true })}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </FormControl>
        </FormItem>
      </div>
    </div>
  );
};

export default Step1;
