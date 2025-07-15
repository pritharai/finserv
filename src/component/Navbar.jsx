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
        <nav className="bg-green-400 text-white shadow-lg fixed top-0 z-50 left-0 right-0">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <h1 className="text-3xl font-bold tracking-wide">
                    <Link to="/" className="hover:text-blue-500 transition duration-200">
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
                    <li><Link to="/" className="font-bold hover:text-yellow-300">Home</Link></li>
                    <li><Link to="/aboutus" className="font-bold hover:text-yellow-300">About</Link></li>
                    <li><Link to="/contact" className="font-bold hover:text-yellow-300">Contact</Link></li>

                    {/* Services Dropdown - Wrapped in a div */}
                    <li className="relative">
                        <div
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <button className="font-bold hover:text-yellow-300 hover:cursor-pointer">
                                Services ▾
                            </button>
                            {dropdownOpen && (
                                <ul className="absolute top-10 left-0 bg-white text-gray-800 rounded-md shadow-md py-2 w-48 z-50">
                                    <li><Link to="/mutual-funds" className="block px-4 py-2 hover:bg-gray-100">Mutual Funds</Link></li>
                                    <li><Link to="/insurance" className="block px-4 py-2 hover:bg-gray-100">Insurance</Link></li>
                                    <li><Link to="/financial-planning" className="block px-4 py-2 hover:bg-gray-100">Financial Planning</Link></li>
                                    <li><Link to="/taxplan" className="block px-4 py-2 hover:bg-gray-100">Tax Planning</Link></li>
                                    <li><Link to="/risk-management" className="block px-4 py-2 hover:bg-gray-100">Risk Management</Link></li>
                                    {/* <li><Link to="/nri-services" className="block px-4 py-2 hover:bg-gray-100">NRI Services</Link></li> */}
                                    <li><Link to="/premium" className="block px-4 py-2 hover:bg-gray-100">Pay Premium Online</Link></li>
                                </ul>
                            )}
                        </div>
                    </li>

                    <li><Link to="/calculator" className="font-bold hover:text-yellow-300">Calculators</Link></li>
                    <li><Link to="/mutual-fund-forms" className="font-bold hover:text-yellow-300">Common Application Forms</Link></li>
                    <Link to="/faqs" className=" font-bold hover:text-yellow-300">FAQs</Link>
                </ul>
            </div>

            {/* Mobile Menu */}
            {navOpen && (
    <div className="md:hidden px-4 pb-4 space-y-3 bg-green-400 text-white text-lg">
        <Link to="/" onClick={() => setNavOpen(false)} className="font-semibold block hover:text-yellow-300">Home</Link>
        <Link to="/aboutus" onClick={() => setNavOpen(false)} className="font-semibold block hover:text-yellow-300">About</Link>
        <Link to="/contact" onClick={() => setNavOpen(false)} className="font-semibold block hover:text-yellow-300">Contact</Link>

        {/* Mobile Services Dropdown */}
        <div>
            <p className="font-semibold mt-2">Services</p>
            <ul className="ml-4 space-y-2 py-1.5">
                <li><Link to="/mutual-funds" onClick={() => setNavOpen(false)} className="block hover:text-yellow-300">Mutual Funds</Link></li>
                <li><Link to="/insurance" onClick={() => setNavOpen(false)} className="block hover:text-yellow-300">Insurance</Link></li>
                <li><Link to="/financial-planning" onClick={() => setNavOpen(false)} className="block hover:text-yellow-300">Financial Planning</Link></li>
                <li><Link to="/taxplan" onClick={() => setNavOpen(false)} className="block hover:text-yellow-300">Tax Planning</Link></li>
                <li><Link to="/risk-management" onClick={() => setNavOpen(false)} className="block hover:text-yellow-300">Risk Management</Link></li>
                <li><Link to="/premium" onClick={() => setNavOpen(false)} className="block hover:text-yellow-300">Pay Premium Online</Link></li>
            </ul>
        </div>

        <Link to="/calculator" onClick={() => setNavOpen(false)} className="font-semibold block hover:text-yellow-300">Calculator</Link>
        <Link to="/mutual-fund-forms" onClick={() => setNavOpen(false)} className="font-semibold block hover:text-yellow-300">Common Application Forms</Link>
        <Link to="/faqs" onClick={() => setNavOpen(false)} className="font-semibold block hover:text-yellow-300">FAQs</Link>
    </div>
)}

        </nav>
    );
};

export default Navbar;