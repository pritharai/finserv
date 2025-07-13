import React from "react";
import { Link } from "react-router-dom";
import itiLogo from "../assets/logos/iti.png";
import licLogo from "../assets/logos/lic.jpg";
import helios from "../assets/logos/helios.png";
import bandhan from "../assets/logos/bandhan.jpg";
import motilal from "../assets/logos/motilal.png"
import invesco from "../assets/logos/invesco.jpg";
import canara from "../assets/logos/canara.png";
import mahindra from "../assets/logos/mahindra.png"
import hdfc from "../assets/logos/hdfc.png";
import tata from "../assets/logos/tata.png";
import union from "../assets/logos/union.png";
import sbi from "../assets/logos/sbi.jpeg";
import axis from "../assets/logos/axis.png";

// Sample placeholder logos (replace with actual paths)
const partners = [
  { name: "ITI Mutual Fund", logo: itiLogo, link: "https://mfs.kfintech.com/ITIConfirmation/investorservices/onlinepurchase/mobilepurchaseconfirmation1.aspx?Mob=TkZP&qparam=NzA1Nzgz&InvDistflag=VwAA&Trtype=U0lO" },
  { name: "LIC Mutual Fund", logo: licLogo, link: "https://online.licmf.com/QuickInvest?QWdlbnQ9QVJOLTE1MzE1NSZFdWluPUUyNzE4OTQmU3R5cGU9UmVndWxhciZmcm9tPW1hcmtldGluZw==" },
  { name: "Helios Mutual Fund", logo: helios, link: "https://cams.co.in/3h31dZGB5e5" },
  { name: "Bandhan Mutual Fund", logo: bandhan, link: "#" },
  { name: "Motilal Oswal", logo: motilal, link: "#" },
  { name: "Invesco Mutual Fund", logo: invesco, link: "#" },
  { name: "Mahindra Manulife", logo: mahindra, link: "#" },
  { name: "Canara Robeco", logo: canara, link: "#" },
  { name: "TATA Mutual Fund", logo: tata, link: "https://cams.co.in/72FhrtpEgpk" },
  { name: "Union Mutual Fund", logo: union, link: "https://cams.co.in/7ukl0LQJLL9" },
  { name: "HDFC Mutual Fund", logo: hdfc, link: "https://cams.co.in/2STkw8mk83s" },
  { name: "SBI Mutual Fund", logo: sbi, link: "#" },
  { name: "Axis Mutual Fund", logo: axis, link: "https://mfs.kfintech.com/NFORegistration?refId=ODI1NTA1" },
  // Add as many as needed...
];

const PartnersSection = () => {
  return (
    <section className="bg-blue-50 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-gray-600 text-sm tracking-widest uppercase">
          Work With Some of the Most Respected Global Brands
        </h2>
        <h1 className="text-3xl font-bold text-gray-900 mt-2">Our Partners</h1>
      </div>

      <div className="marquee-container mt-10 bg-white py-4 rounded shadow-inner">
  <div className="marquee-track space-x-10 items-center">
    {[...partners, ...partners].map((partner, index) => (
      <a
        key={index}
        href={partner.link}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white p-3 shadow rounded-md min-w-[160px] h-24 flex items-center justify-center hover:scale-105 transform transition"
      >
        <img
          src={partner.logo}
          alt={partner.name}
          className="max-h-16 object-contain"
        />
      </a>
    ))}
  </div>
</div>


      {/* Explore More Link */}
      <div className="mt-10 text-center">
        <Link
          to="/partners" // replace with your actual route
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
        >
          Explore More
        </Link>
      </div>
    </section>
  );
};

export default PartnersSection;
