import { Link } from "react-router-dom";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-green-600 text-white p-8 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">
          <Link to ="/">VSP FinsServ</Link></h1>
        <ul className="flex text-xl space-x-10">
          <li>
            <Link to="/" className="hover:text-gray-300">Home</Link>
          </li>
          <li>
            <Link to="/Aboutus" className="hover:text-gray-300">About</Link>
          </li>
          <li>
            <Link to="/Contact" className="hover:text-gray-300">Contact</Link>
          </li>
          <li>
            <Link to="/SipCalc" className="hover:text-gray-300">SIP Calculator</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
