import React from "react";
import {
  FaChartPie,
  FaRupeeSign,
  FaShieldAlt,
  FaChartLine,
} from "react-icons/fa";
import lic from "../assets/logos/lic.jpg";
import helios from "../assets/logos/helios.png";
import bandhan from "../assets/logos/bandhan.jpg";
import motilal from "../assets/logos/motilal.png";
import axis from "../assets/logos/axis.png";
import iti from "../assets/logos/iti.png";
import union from "../assets/logos/union.png";
import invesco from "../assets/logos/invesco.jpg";
import mahindra from "../assets/logos/mahindra.png"
import mutualImg from "../assets/mutualImg.png";
 // replace with your actual image path

const topPartners = [

  { name: "ITI Mutual Fund", logo: iti },
  { name: "Helios Mutual Fund", logo: helios },
  { name: "Bandhan Mutual Fund", logo: bandhan },
  { name: "Motilal Oswal Mutual Fund", logo: motilal },
  { name: "Invesco Mutual Fund", logo: invesco },
  { name: "Mahindra Manulife", logo: mahindra },
];

const MutualFunds = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* 1. Hero Section */}
      <section className="bg-gradient-to-r from-blue-100 to-green-100 py-16 px-4 sm:px-6">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    
    {/* Text Section */}
    <div data-aos="fade-right" className="text-center md:text-left px-2">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-800 mb-4 leading-tight">
        Invest Smart. Build Wealth.
      </h1>
      <p className="text-gray-700 text-base sm:text-lg">
        As a trusted leader in wealth management, VSP FinsServ provides premium mutual fund schemes designed for optimal returns.
      </p>
    </div>

    {/* Image Section */}
    <div data-aos="fade-left" className="flex justify-center md:justify-end">
      <img
        src={mutualImg}
        alt="Mutual Funds"
        className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
      />
    </div>
    
  </div>
</section>


      {/* 2. What is Mutual Fund */}
      <section className="max-w-6xl mx-auto px-6 py-16" data-aos="fade-up">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          What is a Mutual Fund?
        </h2>
        <p className="text-gray-600 leading-relaxed text-lg">
          A mutual fund is an investment vehicle that pools money from multiple
          investors to invest in diversified assets such as stocks, bonds, or
          government securities. Managed by professionals, mutual funds help
          reduce risk while offering the potential for good returns. They’re
          regulated by SEBI and ideal for both new and seasoned investors.
        </p>
      </section>

      {/* 3. Why Mutual Funds */}
      <section className="bg-white py-16 px-6" data-aos="fade-up">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-800 mb-10 text-center">
            Why Choose Mutual Funds?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-6 rounded shadow text-center hover:shadow-lg transition" data-aos-delay="100">
              <FaChartPie className="text-blue-600 text-3xl mb-2 mx-auto" />
              <h4 className="font-semibold mb-1">Diversification</h4>
              <p className="text-sm text-gray-600">
                Spread your risk across multiple sectors and companies.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded shadow text-center hover:shadow-lg transition" data-aos-delay="200">
              <FaRupeeSign className="text-green-600 text-3xl mb-2 mx-auto" />
              <h4 className="font-semibold mb-1">Low Entry Point</h4>
              <p className="text-sm text-gray-600">
                Start with ₹500/month through SIP or one-time investments.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded shadow text-center hover:shadow-lg transition" data-aos-delay="300">
              <FaShieldAlt className="text-purple-600 text-3xl mb-2 mx-auto" />
              <h4 className="font-semibold mb-1">Regulated & Transparent</h4>
              <p className="text-sm text-gray-600">
                Monitored by SEBI and AMFI for investor protection.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded shadow text-center hover:shadow-lg transition" data-aos-delay="400">
              <FaChartLine className="text-orange-500 text-3xl mb-2 mx-auto" />
              <h4 className="font-semibold mb-1">Growth-Oriented</h4>
              <p className="text-sm text-gray-600">
                Aim for long-term wealth creation through equity exposure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Top Mutual Fund Partners */}
      <section className="py-16 px-6 max-w-6xl mx-auto" data-aos="fade-up">
        <h2 className="text-3xl font-semibold text-gray-800 mb-10 text-center">
          Our Top Mutual Fund Partners
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {topPartners.map((partner, i) => (
            <div
              key={i}
              className="bg-white p-4 rounded shadow flex flex-col items-center hover:scale-105 transition"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-16 object-contain mb-2"
              />
              <p className="text-sm font-medium text-gray-700 text-center max-w-full h-10">
                {partner.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="bg-gradient-to-r from-blue-500 to-green-500 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Still not sure which fund to choose?
          </h2>
          <p className="mb-6 text-lg">
            Let us help you make the right investment choice based on your goals.
          </p>
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 justify-center">
  <a
    href="/mutual-fund-forms"
    className="w-full sm:w-auto text-center bg-white text-blue-700 px-6 py-3 rounded-md font-semibold shadow hover:bg-gray-100 transition"
  >
    Explore Mutual Fund Options
  </a>
  <a
    href="https://wa.me/919463984957?text=Hello%20VSP%20FinsServ%20I%20need%20help%20choosing%20a%20mutual%20fund"
    target="_blank"
    rel="noopener noreferrer"
    className="w-full sm:w-auto text-center bg-white text-green-600 px-6 py-3 rounded-md font-semibold shadow hover:bg-gray-100 transition"
  >
    Book a Free Consultation
  </a>
</div>

        </div>
      </section>
    </div>
  );
};

export default MutualFunds;
