import { Link } from "react-router-dom";
import React, { useState,useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [timeoutId, setTimeoutId] = useState(null);

    const handleMouseEnter = () => {
        clearTimeout(timeoutId);
        setDropdownOpen(true);
    };


    const handleMouseLeave = () => {
        const id = setTimeout(() => {
            setDropdownOpen(false);
        }, 200);
        setTimeoutId(id);
    };

    useEffect(() => {
    return () => clearTimeout(timeoutId);
  }, [timeoutId]);

    return (
        <nav className="bg-blue-800 text-white shadow-lg fixed top-0 z-50 left-0 right-0 mb-500">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <h1 className="text-2xl font-bold tracking-wide">
                    <Link to="/" className="hover:text-yellow-300 transition duration-200">
                        VSP FinsServ
                    </Link>
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
                    <li><Link to="/aboutus" className="hover:text-yellow-300">About</Link></li>
                    <li><Link to="/contact" className="hover:text-yellow-300">Contact</Link></li>

                    {/* Services Dropdown - Wrapped in a div */}
                    <li className="relative">
                        <div
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <button className="hover:text-yellow-300 hover:cursor-pointer">
                                Services ▾
                            </button>
                            {dropdownOpen && (
                                <ul className="absolute top-10 left-0 bg-white text-gray-800 rounded-md shadow-md py-2 w-48 z-50">
                                    <li><Link to="/financial-planning" className="block px-4 py-2 hover:bg-gray-100">Financial Planning</Link></li>
                                    <li><Link to="/tax-planning" className="block px-4 py-2 hover:bg-gray-100">Tax Planning</Link></li>
                                    <li><Link to="/risk-management" className="block px-4 py-2 hover:bg-gray-100">Risk Management</Link></li>
                                    <li><Link to="/nri-services" className="block px-4 py-2 hover:bg-gray-100">NRI Services</Link></li>
                                    <li><Link to="/premium" className="block px-4 py-2 hover:bg-gray-100">Pay Premium Online</Link></li>
                                </ul>
                            )}
                        </div>
                    </li>

                    <li><Link to="/calculator" className="hover:text-yellow-300">Calculators</Link></li>
                    <li><Link to="/mfforms" className="hover:text-yellow-300">MF Forms</Link></li>
                </ul>
            </div>

            {/* Mobile Menu */}
            {navOpen && (
                <div className="md:hidden px-4 pb-4 space-y-3 bg-blue-800 text-white text-lg">
                    <Link to="/" className="block hover:text-yellow-300">Home</Link>
                    <Link to="/aboutus" className="block hover:text-yellow-300">About</Link>
                    <Link to="/contact" className="block hover:text-yellow-300">Contact</Link>

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

                    <Link to="/calculator" className="block hover:text-yellow-300">Calculator</Link>
                    <Link to="/mfforms" className="hover:text-yellow-300">MF Forms</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;