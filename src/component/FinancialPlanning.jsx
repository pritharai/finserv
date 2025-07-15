import React from "react";
import { FaBullseye, FaWallet, FaShieldAlt, FaChartLine, FaPiggyBank, FaUserClock, FaBook, FaBalanceScale, FaGavel } from "react-icons/fa";

const features = [
  {
    title: "Goal Setting",
    desc: "Identify short, medium, and long-term financial goals like education, home, and retirement.",
    icon: <FaBullseye size={28} className="text-teal-600" />,
  },
  {
    title: "Budgeting & Expense Tracking",
    desc: "Understand where your money goes and plan your spending to build savings.",
    icon: <FaWallet size={28} className="text-teal-600" />,
  },
  {
    title: "Emergency Fund",
    desc: "Build 3–6 months of expense buffer for unexpected events like job loss or illness.",
    icon: <FaPiggyBank size={28} className="text-teal-600" />,
  },
  {
    title: "Insurance & Risk Management",
    desc: "Protect your income and health through appropriate insurance coverage.",
    icon: <FaShieldAlt size={28} className="text-teal-600" />,
  },
  {
    title: "Investment Planning",
    desc: "Grow wealth through mutual funds, stocks, and SIPs aligned with your risk profile.",
    icon: <FaChartLine size={28} className="text-teal-600" />,
  },
  {
    title: "Tax Planning",
    desc: "Reduce tax outgo using Section 80C, 80D and other smart strategies.",
    icon: <FaBalanceScale size={28} className="text-teal-600" />,
  },
  {
    title: "Retirement Planning",
    desc: "Estimate your future needs and build a corpus for a stress-free retirement.",
    icon: <FaUserClock size={28} className="text-teal-600" />,
  },
  {
    title: "Child Education & Marriage Planning",
    desc: "Plan for big milestones with inflation-adjusted investment strategies.",
    icon: <FaBook size={28} className="text-teal-600" />,
  },
  {
    title: "Estate Planning",
    desc: "Ensure smooth wealth transfer with will, nominations, and trusts.",
    icon: <FaGavel size={28} className="text-teal-600" />,
  },
];

const FinancialPlanning = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="max-w-full mx-auto text-center mb-12 bg-gradient-to-r from-blue-100 to-green-100 py-16">
        <h1 className="text-4xl font-bold text-blue-800 mb-4">
          Your Guide to Comprehensive Financial Planning
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Plan your finances confidently with our structured, transparent, and goal-based approach — from budgeting and insurance to investments and legacy planning.
        </p>
      </div>

      {/* Features Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
        {features.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300"
            data-aos="fade-up"
            data-aos-delay={idx * 100}
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      {/* <div className="mt-16 max-w-4xl mx-auto text-center bg-gradient-to-r from-teal-50 via-white to-blue-50 p-8 rounded-lg border-l-4 border-blue-600 shadow-md">
        <h2 className="text-2xl font-bold text-blue-700 mb-2"></h2>
        <p className="text-gray-700 mb-4"></p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
  <a
    href="https://wa.me/919463984957?text=Hi%20I%20want%20to%20book%20a%20financial%20planning%20session"
    className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition font-medium"
    target="_blank"
    rel="noopener noreferrer"
  >
    Book Now on WhatsApp
  </a>

  <a
    href="/calculator"
    className="bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-700 transition font-medium"
  >
    Explore Financial Calculators
  </a>
</div>
      </div> */}

     <section className="bg-gradient-to-r from-blue-600 to-green-500 py-16">
  <div className="max-w-4xl mx-auto text-center text-white px-4">
    <h2 className="text-3xl font-bold mb-4">
      📞 Ready to Plan Your Future?
    </h2>
    <p className="mb-6 text-lg">
      Book a free consultation and get personalized financial guidance tailored to your life goals.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a
        href="/mutual-fund-forms"
        className="w-full sm:w-64 text-center bg-white text-blue-700 px-6 py-3 rounded-md font-semibold shadow hover:bg-gray-100 transition"
      >
      Explore Financial Calculators
      </a>
      <a
        href="https://wa.me/919463984957?text=I%20need%20help%20choosing%20a%20mutual%20fund"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full sm:w-64 text-center bg-white text-green-600 px-6 py-3 rounded-md font-semibold shadow hover:bg-gray-100 transition"
      >
      Book a Free Consultation
      </a>
    </div>
  </div>
</section>

    </div>
  );
};

export default FinancialPlanning;
