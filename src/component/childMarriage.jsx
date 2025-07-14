import React, { useState } from "react";

const ChildMarriageCalculator = () => {
  const [currentCost, setCurrentCost] = useState(500000);
  const [yearsLeft, setYearsLeft] = useState(15);
  const [inflation, setInflation] = useState(6);
  const [expectedReturn, setExpectedReturn] = useState(12);

  const inflatedCost =
    currentCost * Math.pow(1 + inflation / 100, yearsLeft);

  const monthlyRate = expectedReturn / 12 / 100;
  const totalMonths = yearsLeft * 12;
  const monthlyInvestment =
    inflatedCost *
    (monthlyRate / (Math.pow(1 + monthlyRate, totalMonths) - 1));

  return (
    <div className="bg-white rounded shadow p-6 max-w-xl mx-auto" data-aos="fade-up">
      <h2 className="text-3xl font-bold mb-4 text-center text-blue-900">
        Child Marriage Planning Calculator
      </h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm text-gray-600">Current Cost (₹)</label>
          <input
            type="number"
            value={currentCost}
            onChange={(e) => setCurrentCost(+e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-600">Years Left</label>
          <input
            type="number"
            value={yearsLeft}
            onChange={(e) => setYearsLeft(+e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-600">Inflation Rate (%)</label>
          <input
            type="number"
            value={inflation}
            onChange={(e) => setInflation(+e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-600">Expected Return (%)</label>
          <input
            type="number"
            value={expectedReturn}
            onChange={(e) => setExpectedReturn(+e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
      </div>

      <div className="mt-6 bg-blue-50 p-4 rounded">
        <p className="text-lg font-semibold text-blue-700">
          Future Cost: ₹{inflatedCost.toFixed(0)}
        </p>
        <p className="text-md text-gray-700">
          You need to invest: <strong>₹{monthlyInvestment.toFixed(0)}</strong> monthly
        </p>
      </div>
    </div>
  );
};

export default ChildMarriageCalculator;
