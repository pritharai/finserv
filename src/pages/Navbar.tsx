import { Link } from "react-router-dom";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar: React.FC = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-blue-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide">
          <Link to="/" className="hover:text-yellow-300 transition duration-200">VSP FinsServ</Link>
        </h1>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setNavOpen(!navOpen)}>
            {navOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium items-center">
          <li><Link to="/" className="hover:text-yellow-300">Home</Link></li>
          <li><Link to="/Aboutus" className="hover:text-yellow-300">About</Link></li>
          <li><Link to="/Contact" className="hover:text-yellow-300">Contact</Link></li>

          {/* Services Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="hover:text-yellow-300">Services ▾</button>
            {dropdownOpen && (
              <ul className="absolute top-10 left-0 bg-white text-gray-800 rounded-md shadow-md py-2 w-48 z-50">
                <li><Link to="/financial-planning" className="block px-4 py-2 hover:bg-gray-100">Financial Planning</Link></li>
                <li><Link to="/tax-planning" className="block px-4 py-2 hover:bg-gray-100">Tax Planning</Link></li>
                <li><Link to="/risk-management" className="block px-4 py-2 hover:bg-gray-100">Risk Management</Link></li>
                <li><Link to="/nri-services" className="block px-4 py-2 hover:bg-gray-100">NRI Services</Link></li>
              </ul>
            )}
          </li>

          <li><Link to="/SipCalc" className="hover:text-yellow-300">SIP Calculator</Link></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3 bg-blue-800 text-white text-lg">
          <Link to="/" className="block hover:text-yellow-300">Home</Link>
          <Link to="/Aboutus" className="block hover:text-yellow-300">About</Link>
          <Link to="/Contact" className="block hover:text-yellow-300">Contact</Link>

          {/* Mobile Services Dropdown (always expanded on mobile) */}
          <div>
            <p className="font-semibold mt-2">Services</p>
            <ul className="ml-4 space-y-2">
              <li><Link to="/financial-planning" className="block hover:text-yellow-300">Financial Planning</Link></li>
              <li><Link to="/tax-planning" className="block hover:text-yellow-300">Tax Planning</Link></li>
              <li><Link to="/risk-management" className="block hover:text-yellow-300">Risk Management</Link></li>
              <li><Link to="/nri-services" className="block hover:text-yellow-300">NRI Services</Link></li>
            </ul>
          </div>

          <Link to="/SipCalc" className="block hover:text-yellow-300">SIP Calculator</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
