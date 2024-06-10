// components/Step3.js
import { useFormContext } from "react-hook-form";

const Step3 = ({ onBack }) => {
  const { getValues, handleSubmit } = useFormContext();

  const onSubmit = (data) => {
    console.log("Submitted Data:", data);
    // Here you can send the data to your backend or generate the document
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Review Your Information</h3>
        <pre className="bg-gray-100 p-4 rounded">
          {JSON.stringify(getValues(), null, 2)}
        </pre>
      </div>

      <div className="flex justify-between mt-4">
        <Button type="button" onClick={onBack} variant="secondary">
          Previous Step
        </Button>
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
};

export default Step3;
