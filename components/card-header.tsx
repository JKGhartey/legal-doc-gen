interface CardHeaderProps {
  title: string;
  subtitle?: string;
}

const CardHeader: React.FC<CardHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      {subtitle && <p className="text-sm text-gray-500 mt-2">{subtitle}</p>}
    </div>
  );
};

export default CardHeader;
