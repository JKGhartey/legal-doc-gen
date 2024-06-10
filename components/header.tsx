import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/">
              <span className="flex items-center space-x-2">
                <img src="/images/logo.png" alt="Logo" className="h-8 w-8" />{" "}
                {/* Replace with your logo path */}
                <span className="font-bold text-lg text-gray-800">Trimba</span>
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <div className="text-gray-600">
              <span className="hidden sm:inline">Need Help? </span>
              <a href="tel:+93892384" className="text-gray-800 font-semibold">
                Call an Expert +93892384
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
