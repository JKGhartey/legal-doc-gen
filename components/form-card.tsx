interface FormCardProps {
  children: React.ReactNode;
}

const FormCard: React.FC<FormCardProps> = ({ children }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-[20px] lg:p-[60px] w-[90%] min-w-[590px] ">
      {children}
    </div>
  );
};

export default FormCard;
