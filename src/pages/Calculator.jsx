import React, { useState } from "react";
import SIP from "../component/SIP";
import SWPCalculator from "../component/SWPCalculator";
import ChildMarriageCalculator from "../component/childMarriage";
import RetirementCalculator from "../component/RetirementCalc";
import ChildEducationCalculator from "../component/childEducation";
// import LumpsumCalculator from "../component/LumpsumCalculator"; // if needed

const Calculator = () => {
  const [selected, setSelected] = useState("SIP");

  const renderCalculator = () => {
    switch (selected) {
      case "SIP":
        return <SIP />;
      case "SWP":
        return <SWPCalculator />;
      case "Child Marriage":
        return <ChildMarriageCalculator />;
      case "Retirement Planning":
        return <RetirementCalculator />;
      case "Child Education Planning":
        return <ChildEducationCalculator />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Investment Calculators
      </h2>

      {/* Tab Buttons */}
      <div className="flex justify-center space-x-4 mb-8">
        {["SIP", "SWP" , "Child Marriage", "Retirement Planning", "Child Education Planning"].map((type) => (
          <button
            key={type}
            onClick={() => setSelected(type)}
            className={`px-4 py-2 rounded-md border font-medium transition ${
              selected === type
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-800 border-gray-300 hover:bg-blue-50"
            }`}
          >
            {type} Calculator
          </button>
        ))}
      </div>

      {/* Render selected calculator */}
      <div>{renderCalculator()}</div>
    </div>
  );
};

export default Calculator;
