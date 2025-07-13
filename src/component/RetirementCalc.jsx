import React, { useState } from "react";

const RetirementCalculator = () => {
  const [currentAge, setCurrentAge] = useState(30);
  const [retirementAge, setRetirementAge] = useState(60);
  const [monthlyExpense, setMonthlyExpense] = useState(30000);
  const [lifeExpectancy, setLifeExpectancy] = useState(85);
  const [inflation, setInflation] = useState(6);
  const [expectedReturn, setExpectedReturn] = useState(10);

  const yearsToRetire = retirementAge - currentAge;
  const retirementYears = lifeExpectancy - retirementAge;

  // Inflate expenses till retirement
  const inflatedExpense =
    monthlyExpense * Math.pow(1 + inflation / 100, yearsToRetire);

  // Annual expense after retirement
  const annualExpense = inflatedExpense * 12;

  // Corpus needed at retirement using PV of annuity formula
  const adjustedReturn = (expectedReturn - inflation) / 100;
  const corpusRequired =
    annualExpense *
    ((1 - Math.pow(1 + adjustedReturn, -retirementYears)) / adjustedReturn);

  // Monthly SIP to build that corpus
  const monthlyRate = expectedReturn / 12 / 100;
  const totalMonths = yearsToRetire * 12;
  const monthlyInvestment =
    corpusRequired *
    (monthlyRate / (Math.pow(1 + monthlyRate, totalMonths) - 1));

  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-900">
        Retirement Planning Calculator
      </h2>

      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <div>
          <label className="block text-sm font-medium text-gray-600">Current Age</label>
          <input
            type="number"
            value={currentAge}
            onChange={(e) => setCurrentAge(+e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600">Retirement Age</label>
          <input
            type="number"
            value={retirementAge}
            onChange={(e) => setRetirementAge(+e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Current Monthly Expense (₹)
          </label>
          <input
            type="number"
            value={monthlyExpense}
            onChange={(e) => setMonthlyExpense(+e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600">Life Expectancy</label>
          <input
            type="number"
            value={lifeExpectancy}
            onChange={(e) => setLifeExpectancy(+e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600">Inflation Rate (%)</label>
          <input
            type="number"
            value={inflation}
            onChange={(e) => setInflation(+e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Expected Return (%) p.a.
          </label>
          <input
            type="number"
            value={expectedReturn}
            onChange={(e) => setExpectedReturn(+e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-300 rounded-lg p-4 text-center space-y-3">
        <p className="text-lg font-semibold text-blue-700">
          Future Monthly Expense at Retirement: ₹{inflatedExpense.toFixed(0)}
        </p>
        <p className="text-lg text-gray-700">
          Corpus Required at Retirement: <strong>₹{corpusRequired.toFixed(0)}</strong>
        </p>
        <p className="text-lg text-gray-700">
          Monthly Investment Needed:{" "}
          <strong className="text-green-600">₹{monthlyInvestment.toFixed(0)}</strong>
        </p>
      </div>
    </div>
  );
};

export default RetirementCalculator;
