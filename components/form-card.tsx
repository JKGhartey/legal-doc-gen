interface FormCardProps {
  children: React.ReactNode;
}

const FormCard: React.FC<FormCardProps> = ({ children }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-[20px] lg:p-[60px] w-[90%] max-w-[690px] ">
      {children}
    </div>
  );
};

export default FormCard;
