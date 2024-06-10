import { Book } from "lucide-react";

// components/InfoBox.js
const InfoBox = () => {
  return (
    <div className="bg-blue-100 border border-blue-300 text-blue-400 p-4 rounded mb-4 flex items-center justify-between">
      <Book size="24px" className="text-TealGreen fill-TealGreen/60 mr-5" />
      <p>These are the standard values for number of shares and par value.</p>
    </div>
  );
};

export default InfoBox;
