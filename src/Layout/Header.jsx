import wowLogo from "../assets/wow-logo.png";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-gray-700">
      <div className="container flex items-center justify-between py-3 mx-auto">
        <Link to="/" className="w-24 h-auto">
          <img src={wowLogo} alt="World of Warcraft logo" />
        </Link>
        <div>
          <Link to="/community" className="text-white">
            Community
          </Link>
          <Link to="/about" className="ml-4 text-white">
            About
          </Link>
          <Link to="/contact" className="ml-4 text-white">
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
};
