import React from "react";
import { FaLightbulb, FaChartLine, FaHandshake } from "react-icons/fa";
import "../FlipIcon.css"; // Add this CSS file

const approachData = [
  {
    icon: <FaLightbulb className="text-4xl text-yellow-500 icon-flip" />,
    title: "Understanding Your Needs",
    description:
      "We begin by thoroughly understanding your financial goals, lifestyle preferences, and investment horizon.",
  },
  {
    icon: <FaChartLine className="text-4xl text-green-600 icon-flip" />,
    title: "Strategic Planning",
    description:
      "We create a customized plan using a mix of tax planning, SIPs, mutual funds, and advisory services.",
  },
  {
    icon: <FaHandshake className="text-4xl text-blue-600 icon-flip" />,
    title: "Long-Term Partnership",
    description:
      "Our relationship doesn’t end after planning — we continually track, adjust, and support your journey.",
  },
];

const Approach = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Approach</h2>
        <p className="text-lg text-gray-600 mb-12">
          A transparent, client-first strategy designed to empower your financial future.
        </p>

        <div className="grid gap-8 md:grid-cols-3 ">
          {approachData.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 "
            >
              <div className="mb-4 transition-transform duration-700 transform hover:rotate-x-[360deg]">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;
