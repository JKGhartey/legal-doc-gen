import { ScrollArea } from "./ui/scroll-area";

interface FormCardProps {
  children: React.ReactNode;
  footer: React.ReactNode;
}

const FormCard: React.FC<FormCardProps> = ({ children, footer }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl w-[94vw] md:w-[85vw] lg:w-[800px] h-[85vh] flex flex-col">
      <ScrollArea className="flex-1 p-[20px] lg:p-[60px]">
        {children}
      </ScrollArea>
      <div className="flex-shrink-0 border-t border-gray-200 p-6">
        {footer}
      </div>
    </div>
  );
};

export default FormCard;
