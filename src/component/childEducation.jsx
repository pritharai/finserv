import React, { useState } from "react";

const ChildEducationCalculator = () => {
  const [currentCost, setCurrentCost] = useState(1000000);
  const [years, setYears] = useState(10);
  const [inflationRate, setInflationRate] = useState(6);
  const [returnRate, setReturnRate] = useState(10);

  const inflation = inflationRate / 100;
  const returns = returnRate / 100;
  const months = years * 12;

  const futureCost = currentCost * Math.pow(1 + inflation, years);
  const sip =
    (futureCost * (returns / 12)) / (Math.pow(1 + returns / 12, months) - 1);

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md mt-10" data-aos="fade-up">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-6">
        🎓 Child Education Calculator
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block font-medium text-gray-700">Current Cost of Education (₹)</label>
            <input
              type="number"
              value={currentCost}
              onChange={(e) => setCurrentCost(+e.target.value)}
              className="input w-full border border-gray-300 rounded px-4 py-2 focus:ring focus:ring-blue-200"
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700">Years Until Education</label>
            <input
              type="number"
              value={years}
              onChange={(e) => setYears(+e.target.value)}
              className="input w-full border border-gray-300 rounded px-4 py-2"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block font-medium text-gray-700">Expected Inflation Rate (%)</label>
            <input
              type="number"
              value={inflationRate}
              onChange={(e) => setInflationRate(+e.target.value)}
              className="input w-full border border-gray-300 rounded px-4 py-2"
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700">Expected Investment Return (%)</label>
            <input
              type="number"
              value={returnRate}
              onChange={(e) => setReturnRate(+e.target.value)}
              className="input w-full border border-gray-300 rounded px-4 py-2"
            />
          </div>
        </div>
      </div>

      <div className="mt-10 bg-blue-50 p-6 rounded shadow-md text-center space-y-3">
        <p className="text-lg text-gray-700">🎯 <strong>Future Cost:</strong> ₹{futureCost.toFixed(0)}</p>
        <p className="text-lg text-gray-700">💰 <strong>Monthly SIP Required:</strong> ₹{sip.toFixed(0)}</p>
        <p className="text-sm text-gray-500 italic">Assuming SIP till goal year and monthly compounding.</p>
      </div>
    </div>
  );
};

export default ChildEducationCalculator;
