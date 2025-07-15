import React, { useState } from "react";
import { FaHeartbeat, FaCar, FaShieldAlt, FaWhatsapp } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

// Images
import icici from "../assets/logos/icici.jpg";
import liberty from "../assets/logos/liberty.jpg"
import hdfc from "../assets/logos/HDFC-Ergo.png";
import go from "../assets/logos/go.png"
import insuranceImg from "../assets/insurance.jpg"
import niva from "../assets/logos/niva-bupa.png"
import care from "../assets/logos/care.jpg"
import manipal from "../assets/logos/manipal-cigna.png"
import star from "../assets/logos/star.png"
import tnia from "../assets/logos/TNIA.png"
import bajajall from "../assets/logos/Bajaj-Allianz.png"
import future from "../assets/logos/future.png"

const insuranceData = {
  Health: [
    { name: "Niva Bupa Health Insurance Co. Ltd", logo: niva, link: "https://www.hdfclife.com/health-insurance/pay-premium-online" },
    { name: "HDFC ERGO General Insurance Company Limited", logo: hdfc, link: "https://www.hdfclife.com/health-insurance/pay-premium-online" },
    { name: "Care Health Insurance Ltd", logo: care, link: "https://www.hdfclife.com/health-insurance/pay-premium-online" },
    { name: "Star Health and Allied Insurance Co Ltd", logo: star, link: "https://www.hdfclife.com/health-insurance/pay-premium-online" },
    { name: "The New India Assurance Co Ltd", logo: tnia, link: "https://www.hdfclife.com/health-insurance/pay-premium-online" },
    { name: "ManipalCigna Health Insurance Company Limited", logo: manipal, link: "https://www.hdfclife.com/health-insurance/pay-premium-online" },
  ],
  Motor: [
    { name: "The New India Assurance Co Ltd", logo: tnia, link: "https://www.hdfclife.com/health-insurance/pay-premium-online" },
    { name: "Go Digit General Insurance Limited", logo: go, link: "https://www.hdfclife.com/health-insurance/pay-premium-online" },
    { name: "ICICI Lombard General Insurance", logo: icici, link: "https://www.hdfclife.com/health-insurance/pay-premium-online" },
    { name: "HDFC ERGO General Insurance Company Limited", logo: hdfc, link: "https://www.hdfclife.com/health-insurance/pay-premium-online" },
    { name: "Liberty General Insurance Limited", logo: liberty, link: "https://www.hdfclife.com/health-insurance/pay-premium-online" },
    { name: "Bajaj Allianz General Insurance Limited", logo: bajajall, link: "https://www.hdfclife.com/health-insurance/pay-premium-online" },
    { name: "Future Generali India Insurance Limited", logo: future, link: "https://www.hdfclife.com/health-insurance/pay-premium-online" },
  
  ],
};

const InsurancePage = () => {
  const [activeCategory, setActiveCategory] = useState("Health");

  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-100 via-white to-green-100 py-16 px-6">
              <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                <div data-aos="fade-right">
                  <h1 className="text-5xl font-bold text-blue-800 mb-4">
                    Insure Smart. Stay Safe.
                  </h1>
                  <p className="text-gray-700 text-lg">
                   As a trusted leader in wealth management, VSP FinsServ provides premium insurance policies designed to cater to your needs.
                  </p>
                </div>
                <div data-aos="fade-left">
                  <img
                    src={insuranceImg}
                    alt="Insurance"
                    className="w-full max-w-md mx-auto"
                  />
                </div>
              </div>
            </section>
      
            {/* 2. What is Mutual Fund */}
            <section className="max-w-6xl mx-auto px-6 py-16" data-aos="fade-up">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                What is an Insurance Policy?
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                An insurance policy is a contract between you and an insurance company.
You pay a premium regularly, and in return, the insurer covers your financial loss in specific situations (like illness, accidents, damage, or death).

It's like a financial safety net — you might not need it every day, but when life surprises you, you're protected.
              </p>
            </section>

      {/* Category Toggle */}
      <div className="flex justify-center gap-4 mb-10">
        {["Health", "Motor"].map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 rounded-full font-semibold transition ${
              activeCategory === cat
                ? "bg-blue-600 text-white"
                : "bg-white border border-blue-600 text-blue-600"
            }`}
          >
            {cat === "Health" && <FaHeartbeat className="inline-block mr-2" />}
            {cat === "Motor" && <FaCar className="inline-block mr-2" />}
            {cat} Insurance
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
        {insuranceData[activeCategory].map((item, i) => (
          <a
            key={i}
            
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay={i * 100}
            className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition text-center border-l-4 border-blue-600"
          >
            <img
              src={item.logo}
              alt={item.name}
              className="h-20 mx-auto mb-2 object-contain"
            />
            <h3 className="font-semibold text-gray-800">{item.name}</h3>
            {/* <p className="text-sm text-gray-500 mt-1">Pay Premium</p> */}
          </a>
        ))}
      </div>

      {/* Consultation CTA */}
      <section className="bg-gradient-to-r from-blue-500 to-green-500 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Need Help Selecting Insurance?
          </h2>
          <p className="mb-6 text-lg">
            Confused about which policy suits you best? Chat with us and we’ll help you out!
          </p>
          <div className="space-x-4 space-y-3">
            
            <a
  href="https://wa.me/919463984957?text=Hello%20VSP%20FinsServ%20I%20need%20help%20choosing%20a%20insurance%20policy"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 bg-white text-green-600 px-6 py-3 rounded-md font-semibold shadow hover:bg-gray-100 transition"
>
  <FaWhatsapp className="text-xl" />
  Book a Free Consultation
</a>

          </div>
        </div>
      </section>
    </div>
  );
};

export default InsurancePage;
