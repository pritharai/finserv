import { Link } from "react-router-dom";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-800 text-white py-5 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <h1 className="text-3xl font-bold tracking-wide">
          <Link to="/" className="hover:text-yellow-300 transition duration-200">
            VSP FinsServ
          </Link>
        </h1>

        {/* Nav Links */}
        <ul className="flex text-lg space-x-8 font-medium">
          <li>
            <Link to="/" className="hover:text-yellow-300 transition duration-200">Home</Link>
          </li>
          <li>
            <Link to="/Aboutus" className="hover:text-yellow-300 transition duration-200">About</Link>
          </li>
          <li>
            <Link to="/Contact" className="hover:text-yellow-300 transition duration-200">Contact</Link>
          </li>
          <li>
            <Link to="/SipCalc" className="hover:text-yellow-300 transition duration-200">SIP Calculator</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
