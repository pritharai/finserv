import React from "react";
import { FaWhatsapp, FaHeartbeat, FaCar } from "react-icons/fa";

// Health & Motor Insurance Logos
import icici from "../assets/logos/icici.jpg";
import liberty from "../assets/logos/liberty.jpg"
import hdfc from "../assets/logos/HDFC-Ergo.png";
import go from "../assets/logos/go.png"
// import insuranceImg from "../assets/insurance.jpg"
import niva from "../assets/logos/niva-bupa.png"
import care from "../assets/logos/care.jpg"
import manipal from "../assets/logos/manipal-cigna.png"
import star from "../assets/logos/star.png"
import tnia from "../assets/logos/TNIA.png"
import bajajall from "../assets/logos/Bajaj-Allianz.png"
import future from "../assets/logos/future.png"

const healthPartners = [
  {
    name: "Niva Bupa Health Insurance",
    url: "https://paytm.com/insurance-premium-payment/niva-bupa-health-insurance-company-limited",
    logo: niva,
  },
  {
    name: "Manipal Cigna",
    url: "https://paytm.com/insurance-premium-payment/manipalcigna-health-insurance",
    logo: manipal,
  },
  {
    name: "HDFC Ergo General",
    url: "https://paytm.com/insurance-premium-payment/hdfc-ergo-general-insurance-company-health",
    logo: hdfc,
  },
  {
    name: "Care Health Insurance",
    url: "https://paytm.com/insurance-premium-payment/care-health-insurance",
    logo: care,
  },
  {
    name: "Star Health Insurance",
    url: "https://paytm.com/insurance-premium-payment/star-health-and-allied-insurance",
    logo: star,
  },
  {
    name: "The New India Assurance",
    url: "https://www.newindia.co.in/quick-help/quick-renewal",
    logo: tnia,
  },
];

const motorPartners = [
  {
    name: "Bajaj Allianz",
    url: "https://paytm.com/insurance-premium-payment/bajaj-allianz-general-insurance",
    logo: bajajall,
  },
  {
    name: "The New India Assurance",
    url: "https://www.newindia.co.in/quick-help/quick-renewal",
    logo: tnia,
  },
  {
    name: "HDFC Ergo General",
    url: "https://paytm.com/insurance-premium-payment/hdfc-ergo-general-insurance-motor",
    logo: hdfc,
  },
  { name: "Go Digit General Insurance Limited", logo: go, url: "https://paytm.com/insurance-premium-payment/go-digit-insurance" },
  { name: "ICICI Lombard General Insurance", logo: icici, url: "https://paytm.com/insurance-premium-payment/icici-lombard-general-insurance-motor" },
      { name: "Liberty General Insurance Limited", logo: liberty, link: "https://paytm.com/insurance-premium-payment/liberty-general-insurance-limited" },
      { name: "Future Generali India Insurance Limited", logo: future, link: "https://paytm.com/insurance-premium-payment/future-generali-india-general-insurance" },
  
  
];

const SectionHeader = ({ icon, title, className = "text-blue-600" }) => (
  <div className="flex items-center gap-2 mb-6">
    <span className={`${className}`}>{icon}</span>
    <h2 className={`text-2xl font-semibold ${className}`}>{title}</h2>
  </div>
);


const PayPremium = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-100 to-green-100 max-w-full py-16 mx-auto text-center mb-14">
        <h1 className="text-4xl font-bold text-blue-800 mb-4">Pay Your Insurance Premium Online</h1>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          Pay your insurance premium securely through trusted partner links.
        </p>
      </div>

      {/* HEALTH Section */}
<div className="max-w-6xl mx-auto mb-20">
  <SectionHeader icon={<FaHeartbeat size={22} />} title="Health Insurance" className="text-green-600" />
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {healthPartners.map((partner, index) => (
      <a
        key={index}
        href={partner.url}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-transform hover:-translate-y-1 text-center border-l-4 border-green-600"
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
  <SectionHeader icon={<FaCar size={22} />} title="Motor Insurance" className="text-blue-600" />
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {motorPartners.map((partner, index) => (
      <a
        key={index}
        href={partner.url}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-transform hover:-translate-y-1 text-center border-l-4 border-blue-600"
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
      <div className="max-w-full mx-auto text-center bg-gradient-to-r from-blue-500 to-green-500 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-white mb-2">Need Help Paying Premium?</h2>
        <p className="text-white mb-4">
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
