import React, { useState } from "react";
import elss from "../assets/elss.jpg"; // Correctly imported image
import elss2 from "../assets/elss2.jpg"
import { FaWhatsapp } from "react-icons/fa";

const ElssCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
  const [expectedRate, setExpectedRate] = useState(12);
  const [years, setYears] = useState(5);

  const n = years * 12;
  const r = expectedRate / 100 / 12;

  const futureValue = monthlyInvestment * (((Math.pow(1 + r, n) - 1) * (1 + r)) / r);
  const taxSaved = Math.min(monthlyInvestment * 12, 150000) * 0.3;

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-100 to-blue-100 py-12 px-6 text-center" data-aos="fade-down">
        <div className="max-w-5xl mx-auto">
          <img src={elss} alt="ELSS Illustration" className="mx-auto h-52 rounded-lg shadow-md mb-6 object-cover" />
          <h1 className="text-4xl font-bold text-gray-800 mb-2">ELSS Tax Saving Calculator</h1>
          <p className="text-gray-600 text-lg">
            Calculate your future wealth and tax savings with ELSS mutual funds in just a few steps.
          </p>
        </div>
      </section>

      {/* What is ELSS */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6 py-12 items-center">
         <div data-aos="fade-right">
          <img src={elss2} alt="What is ELSS" className="rounded-lg shadow-md" />
        </div>
        <div data="aos-left" className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-md border-l-4 border-teal-600 shadow">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">What is ELSS?</h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            ELSS (Equity Linked Savings Scheme) is a type of mutual fund that helps you save tax under Section 80C
            of the Income Tax Act while investing primarily in equities. It has a lock-in of 3 years — the shortest
            among all 80C options — with potential for high returns.
            <br /><br />
            You can invest via lump sum or SIP and benefit from tax deductions and market-linked wealth creation.
            Returns above ₹1 lakh are taxed under Long-Term Capital Gains (LTCG).
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md mb-20" data-aos="fade-up">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">ELSS Calculator</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <label className="flex flex-col">
            Monthly Investment (₹)
            <input
              type="number"
              value={monthlyInvestment}
              onChange={(e) => setMonthlyInvestment(+e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </label>

          <label className="flex flex-col">
            Expected Annual Return (%)
            <input
              type="number"
              value={expectedRate}
              onChange={(e) => setExpectedRate(+e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </label>

          <label className="flex flex-col">
            Investment Duration (Years)
            <input
              type="number"
              value={years}
              onChange={(e) => setYears(+e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </label>
        </div>

        <div className="bg-blue-50 p-6 rounded text-center">
          <p className="text-xl font-semibold text-gray-700">
            Estimated Future Value: <span className="text-blue-700">₹{futureValue.toFixed(0)}</span>
          </p>
          <p className="text-md text-green-600 mt-2">
            Estimated Tax Saved (under 80C): ₹{taxSaved.toFixed(0)}
          </p>
        </div>
      </section>

      {/* WhatsApp CTA Section */}
<section
  className="max-w-5xl mx-auto mt-16 bg-gradient-to-r from-teal-100 to-blue-100 border-l-4 border-teal-600 rounded-lg shadow-md px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-6"
  data-aos="fade-up"
>
  <div>
    <h3 className="text-2xl font-bold text-gray-800 mb-2">Ready to Start Saving Taxes?</h3>
    <p className="text-gray-700 text-sm">
      Talk to our expert and start your ELSS investment journey with confidence.
    </p>
  </div>
  <a
            href="https://wa.me/919463984957?text=Hi%20I%20need%20help%20paying%20my%20insurance%20premium"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md transition"
          >
            <FaWhatsapp /> Chat on WhatsApp
          </a>
</section>

    </>
  );
};

export default ElssCalculator;
