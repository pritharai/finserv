import React, { useState } from "react";

const ElssCalcBox = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
  const [expectedRate, setExpectedRate] = useState(12);
  const [years, setYears] = useState(5);

  const n = years * 12;
  const r = expectedRate / 100 / 12;

  const futureValue = monthlyInvestment * (((Math.pow(1 + r, n) - 1) * (1 + r)) / r);
  const taxSaved = Math.min(monthlyInvestment * 12, 150000) * 0.3;

  return (
    <section className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto" data-aos="fade-up">
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
  );
};

export default ElssCalcBox;
