import React, { useState } from "react";
import SIP from "../component/SIP";
import SWPCalculator from "../component/SWPCalculator";
import ChildMarriageCalculator from "../component/childMarriage";
import RetirementCalculator from "../component/RetirementCalc";
import ChildEducationCalculator from "../component/childEducation";
// import ElssCalculator from "../component/ELSSCalculator";
import ElssCalcBox from "../component/ELSSCalcbox";
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
      case "ELSS":
        return <ElssCalcBox />;
      default:
        return null;
    }
  };

  return (
    <>
    <div className="bg-gradient-to-r from-blue-50 to-green-50 via-white w-full min-h-70 flex flex-col justify-center items-center px-4 text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-blue-800">
          Investment Calculators
        </h2>
        <p className="text-gray-700 text-lg sm:text-xl max-w-2xl mb-6">
          Get accurate estimates for your SIP, retirement, education, and more.
          Make informed decisions with our smart financial tools.
        </p>
      </div>
    <div className="max-w-6xl mx-auto">
      

      {/* Tab Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {[
          "SIP",
          "SWP",
          "Child Marriage",
          "Retirement Planning",
          "Child Education Planning",
          "ELSS",
        ].map((type) => (
          <button
            key={type}
            onClick={() => setSelected(type)}
            className={`px-4 py-2 rounded-md border font-medium transition text-sm sm:text-base ${
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
    </>
  );
};

export default Calculator;
