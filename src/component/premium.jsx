import React from "react";
import { FaWhatsapp, FaHeartbeat, FaCar } from "react-icons/fa";

// Health & Motor Insurance Logos
import star from "../assets/logos/star.png";
import hdfc from "../assets/logos/HDFC-Ergo.png";
import nivabupa from "../assets/logos/niva-bupa.png";
import care from "../assets/logos/care.jpg";
import bajaj from "../assets/logos/Bajaj-Allianz.png";
import manipal from "../assets/logos/manipal-cigna.png";

const healthPartners = [
  {
    name: "Niva Bupa Health Insurance",
    url: "https://www.nivabupa.com/quick-pay.html",
    logo: nivabupa,
  },
  {
    name: "Manipal Cigna",
    url: "https://www.manipalcigna.com/pay-renew-premium",
    logo: manipal,
  },
  {
    name: "HDFC Ergo General",
    url: "https://www.hdfclife.com/health-insurance/pay-premium-online",
    logo: hdfc,
  },
  {
    name: "Care Health Insurance",
    url: "https://www.hdfclife.com/health-insurance/pay-premium-online",
    logo: care,
  },
  {
    name: "Star Health Insurance",
    url: "https://www.hdfclife.com/health-insurance/pay-premium-online",
    logo: star,
  },
];

const motorPartners = [
  {
    name: "Bajaj Allianz",
    url: "https://general.bajajallianz.com/BuyNow/UpdatePremiumPaymentDetails.jsp",
    logo: bajaj,
  },
  
];

const SectionHeader = ({ icon, title }) => (
  <div className="flex items-center gap-2 mb-6">
    <span className="text-teal-600">{icon}</span>
    <h2 className="text-2xl font-semibold text-blue-800">{title}</h2>
  </div>
);

const PayPremium = () => {
  return (
    <div className="min-h-screen px-6 py-12 bg-gray-50">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-14">
        <h1 className="text-4xl font-bold text-blue-800 mb-4">Pay Your Insurance Premium Online</h1>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          Pay your insurance premium securely through trusted partner links.
        </p>
      </div>

      {/* HEALTH Section */}
      <div className="max-w-6xl mx-auto mb-20">
        <SectionHeader icon={<FaHeartbeat size={22} />} title="Health Insurance" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {healthPartners.map((partner, index) => (
            <a
              key={index}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-transform hover:-translate-y-1 text-center border-t-4 border-teal-600"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-16 mx-auto mb-3 object-contain"
              />
              <h3 className="font-semibold text-gray-800">{partner.name}</h3>
              <p className="text-sm text-gray-500 mt-1">Pay Premium</p>
            </a>
          ))}
        </div>
      </div>

      {/* MOTOR Section */}
      <div className="max-w-6xl mx-auto mb-20">
        <SectionHeader icon={<FaCar size={22} />} title="Motor Insurance" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {motorPartners.map((partner, index) => (
            <a
              key={index}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-transform hover:-translate-y-1 text-center border-t-4 border-blue-600"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-16 mx-auto mb-3 object-contain"
              />
              <h3 className="font-semibold text-gray-800">{partner.name}</h3>
              <p className="text-sm text-gray-500 mt-1">Pay Premium</p>
            </a>
          ))}
        </div>
      </div>

      {/* Support Section */}
      <div className="max-w-6xl mx-auto text-center bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-lg shadow-md border-l-4 border-blue-600">
        <h2 className="text-2xl font-bold text-blue-700 mb-2">Need Help Paying Premium?</h2>
        <p className="text-gray-700 mb-4">
          Confused about which insurance partner to choose or facing an issue? Contact us on WhatsApp for guidance.
        </p>
        <a
          href="https://wa.me/919463984957?text=Hi%20I%20need%20help%20paying%20my%20insurance%20premium"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md transition"
        >
          <FaWhatsapp /> Chat on WhatsApp
        </a>
      </div>
    </div>
  );
};

export default PayPremium;
