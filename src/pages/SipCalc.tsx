import React, { useState } from "react";
import SipPerformanceForm from "./sip2";
import { Link } from "react-router-dom";


const SipCalculator: React.FC = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
  const [annualReturn, setAnnualReturn] = useState(12);
  const [years, setYears] = useState(10);

  const totalMonths = years * 12;
  const monthlyRate = annualReturn / 12 / 100;

  const maturityAmount =
    monthlyInvestment *
    ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate) *
    (1 + monthlyRate);

  const totalInvested = monthlyInvestment * totalMonths;
  const estimatedReturns = maturityAmount - totalInvested;

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-xl mt-10">
        <Link to="/SipPerformanceForm">Sip part 2</Link>
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-600">
        SIP Calculator
      </h2>

      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-semibold">Monthly Investment (₹)</label>
          <input
            type="number"
            value={monthlyInvestment}
            onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Expected Annual Return (%)</label>
          <input
            type="number"
            value={annualReturn}
            onChange={(e) => setAnnualReturn(Number(e.target.value))}
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Investment Duration (Years)</label>
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>

        <div className="mt-6 bg-gray-100 p-4 rounded-md text-gray-700">
          <p><strong>Total Invested:</strong> ₹{totalInvested.toLocaleString()}</p>
          <p><strong>Estimated Returns:</strong> ₹{estimatedReturns.toLocaleString(undefined, {maximumFractionDigits: 0})}</p>
          <p><strong>Maturity Amount:</strong> ₹{maturityAmount.toLocaleString(undefined, {maximumFractionDigits: 0})}</p>
        </div>
      </div>
      
    </div>

    

  );
};


export default SipCalculator;
