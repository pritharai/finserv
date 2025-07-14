import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { BsGooglePlay, BsApple } from "react-icons/bs";
import amfi_logo from "../assets/amfi-logo.jpg";
import mutualfunds from "../assets/mutualfunds.webp";
import logo from "../assets/logo1.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 px-10 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo and Description */}
        <div>
          <img src={logo} alt="VSP Finserv" className="w-32 mb-4" />
          <p className="text-sm">
            We are an AMFI registered Mutual Fund Distribution company. We
            specialise in Mutual Fund Distribution
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-bold text-green-600 mb-2">
            Useful Links
          </h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link to="/" className="hover:text-yellow-30">
                Home
              </Link>
            </li>
            <li>
              <Link to="/aboutus" className="hover:text-yellow-30">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/calculator" className="hover:text-yellow-30">
                Calculators
              </Link>
            </li>
            {/* <li><Link to="/" className="hover:text-yellow-30">Privacy Policy</Link></li> */}
            <li>
              <Link to="/contact" className="hover:text-yellow-30">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-bold text-green-600 mb-2">Services</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link to="/financial-planning" className="hover:text-yellow-30 ">
                Financial Planning
              </Link>
            </li>
            {/* <li><Link to="/calculator?case=Retirement%20Planning" className="hover:text-yellow-30">Early Retirement</Link></li> */}
            <li>
              <Link to="/risk-management" className="hover:text-yellow-30">
                Risk Management
              </Link>
            </li>
            {/* <li>INS Planning</li> */}
            <li>
              <Link to="/taxplan" className="hover:text-yellow-30">
                Tax Planning
              </Link>
            </li>
            <li>
              <Link to="/insurance" className="hover:text-yellow-30">
                Insurance Policies
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-bold text-green-600 mb-2">
            Get In Touch
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center">
              <FaPhoneAlt className="mr-2 text-green-500" />
              9463984957
            </li>
            <li className="flex items-center">
              <FaEnvelope className="mr-2 text-green-500" />
              vspfinsserv@gmail.com
            </li>
            <li className="flex items-start">
              <FaMapMarkerAlt className="mr-2 mt-1 text-green-500" />
              Dhandhra road, Ludhiana. Pin 141113, Punjab
            </li>
          </ul>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="mt-10 items-center justify-center text-xs text-gray-600 max-w-7xl mx-auto space-y-2 ">
        <p>
          <strong>
            A comprehensive solution for all your investment needs, our
            organization was founded with the mission to empower a million lives
            on their journey to financial abundance.
          </strong>{" "}
          <br></br>
          <strong>Disclaimer:</strong> Mutual fund investments are subject to
          market risks. Please read the scheme information and other related
          documents carefully before investing. Past performance is not
          indicative of future returns. Please consider your specific investment
          requirements before choosing a fund, or designing a portfolio that
          suits your needs.
        </p>
        <p>
          <strong>VSP Finserv</strong> makes no warranties or representations...
          (etc.)
        </p>

        {/* Logos */}
        <div className="flex items-center justify-center mt-4 space-x-6">
          <img src={amfi_logo} alt="AMFI" className="h-20" />
          <div>
            <p>AMFI Registered</p>
            <p className="font-bold"></p>
          </div>
          <img src={mutualfunds} alt="Mutual Funds Sahi Hai" className="h-20" />
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-gray-500 mt-6 border-t pt-4">
        Copyright © 2025 VSP FinsServ. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
