import React from "react";
import { Link } from "react-router-dom";
import { FaHeartbeat, FaChartLine, FaBriefcase, FaBullseye, FaWhatsapp } from "react-icons/fa";
import risk from "../assets/risk.jpg"

const RiskManagement = () => {
  const riskAreas = [
    {
      title: "Life & Health Risk",
      icon: <FaHeartbeat size={28} className="text-red-500" />,
      desc: "Insurance planning to cover medical and life uncertainties."
    },
    {
      title: "Market Risk",
      icon: <FaChartLine size={28} className="text-blue-500" />,
      desc: "Diversification and asset allocation to manage volatility."
    },
    {
      title: "Income Loss Risk",
      icon: <FaBriefcase size={28} className="text-yellow-500" />,
      desc: "Emergency funds and contingency planning for job/income loss."
    },
    {
      title: "Goal Risk",
      icon: <FaBullseye size={28} className="text-green-600" />,
      desc: "Regular reviews to ensure you’re on track for long-term goals."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-100 to-green-100 py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-blue-800 mb-4">
            Risk Management in Financial Planning
          </h1>
          <p className="text-lg text-gray-700">
            Identify, assess, and manage risks to build a resilient and protected financial future.
          </p>
        </div>
      </section>

      {/* Explanation Section */}
      <section className="max-w-6xl mx-auto py-12 px-6 grid md:grid-cols-2 gap-10 items-center">
        <div data-aos="fade-right">
          <img
            src={risk}
            alt="Risk Management"
            className="rounded-lg shadow-md"
          />
        </div>
        <div data-aos="fade-left">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">What is Risk Management?</h2>
          <p className="text-gray-700 text-md leading-relaxed">
            Risk Management in finance is the practice of identifying potential risks to your investments, income,
            health, or property—and taking steps to reduce or eliminate their financial impact. Whether it's protecting
            your family from unforeseen emergencies or safeguarding your wealth from market volatility, a good risk
            management plan is essential.
          </p>
        </div>
      </section>

      {/* Risk Areas */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Types of Risks We Help You Manage</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center max-w-6xl mx-auto">
          {riskAreas.map((item, i) => (
            <div
              key={i}
              className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-md transition"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div className="mb-2 flex items-center justify-center">{item.icon}</div>
              <h4 className="font-semibold text-lg text-gray-800 mb-2">{item.title}</h4>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-full mx-auto mt-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg shadow-md px-8 py-10 text-center">
        <h2 className="text-2xl font-bold mb-2 text-white">
          📊 Start Managing Your Risks Today
        </h2>
        <p className="text-white mb-4">
          Book a free consultation to assess your current financial risks and get a customized protection strategy.
        </p>
        <a
                    href="https://wa.me/919463984957?text=Hello%20VSP%20FinsServ%20I%20need%20help%20managing%20my%20financial%20risks"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-green-400 px-6 py-2 rounded-md transition"
                  >
                    <FaWhatsapp /> Chat on WhatsApp
                  </a>
      </section>
    </>
  );
};

export default RiskManagement;
