import React from "react";
import {
  FaMoneyBillWave,
  FaChartLine,
  FaBalanceScale,
  FaBookOpen,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const taxStrategies = [
  {
    icon: <FaMoneyBillWave size={28} className="text-blue-600" />,
    title: "ELSS (Tax Saving Mutual Funds)",
    description:
      "Invest in Equity-Linked Saving Schemes under 80C to grow wealth while saving tax.",
  },
  {
    icon: <FaChartLine size={28} className="text-green-600" />,
    title: "Section 80C Deductions",
    description:
      "Explore all available 80C instruments: PPF, NSC, Tax Saver FDs, ULIPs and more.",
  },
  {
    icon: <FaBalanceScale size={28} className="text-yellow-600" />,
    title: "Health & Life Insurance",
    description:
      "Get deductions under 80D and 80C while securing your family's financial future.",
  },
  {
    icon: <FaBookOpen size={28} className="text-teal-600" />,
    title: "Capital Gain Strategies",
    description:
      "Plan your equity & property gains to reduce tax liability through exemptions.",
  },
];

const TaxPlanning = () => {
  return (
    <>
      <section className="bg-gradient-to-r from-blue-100 to-green-100 py-16">
        <div className=" max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-800 mb-3">
            Smart Tax Planning
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Reduce your tax burden and grow your wealth with effective
            strategies aligned to your income and goals.
          </p>
        </div>
      </section>
      {/* What is Tax Planning Section */}
      <div
        className="max-w-6xl mx-auto mb-16 bg-white p-8 rounded-lg shadow-md border-l-4 border-green-600 mt-10"
        data-aos="fade-right"
      >
        <div className="flex flex-col lg:flex-row items-center gap-6">
          {/* Icon */}
          <div className="flex-shrink-0 bg-green-100 p-4 rounded-full">
            <FaBookOpen size={40} className="text-green-600" />
          </div>

          {/* Content */}
          <div className="text-left">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              What is Tax Planning?
            </h2>
            <p className="text-gray-700 text-md leading-relaxed">
              Tax planning is the process of analyzing your financial situation
              to maximize tax efficiency. It involves legally using various
              exemptions, deductions, and benefits provided under the Income Tax
              Act to reduce your tax liability. By aligning your investments and
              expenses with tax-saving instruments such as ELSS, insurance, and
              retirement funds, you not only save taxes but also build long-term
              wealth.
              <br />
              <br />
              Proper tax planning ensures compliance while optimizing your
              returns, whether you're a salaried individual, a freelancer, or a
              business owner.
            </p>
          </div>
        </div>
      </div>

      <div
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12"
        data-aos="fade-up"
      >
        {taxStrategies.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition duration-300"
          >
            <div className="mb-4 flex items-center justify-center">{item.icon}</div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              {item.title}
            </h4>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>


      <section className="bg-gradient-to-r from-blue-600 to-green-500 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            📞 Ready to Plan Your Tax Saving?
          </h2>
          <p className="mb-6 text-lg">
            Book a free consultation and get personalized financial guidance tailored to your tax plans.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/elsscalculator"
              className="inline-block bg-white text-blue-700 px-6 py-3 rounded-md font-semibold shadow hover:bg-gray-100 transition"
            >
              Calculate Your Tax Plans
            </a>
            <a
              href="https://wa.me/919463984957?text=Hello%20VSP%20FinsServ%20I%20need%20help%20planning%20my%20tax%20savings"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-green-600 px-6 py-3 rounded-md font-semibold shadow hover:bg-gray-100 transition"
            >
              Book a Free Consultation
            </a>
          </div>
        </div>
      </section>
      </>
  );
};

export default TaxPlanning;
