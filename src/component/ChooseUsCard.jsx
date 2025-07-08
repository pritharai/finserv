import React, { useEffect, useRef, useState } from "react";
import sale1 from "../assets/sale1.jpg";
import { FaCheckCircle } from "react-icons/fa";

const points = [
  {
    title: "Personalized Guidance",
    description:
      "We take the time to understand your goals and craft strategies that work best for you.",
  },
  {
    title: "Transparency & Trust",
    description:
      "We are committed to clarity, honesty, and full disclosure—no hidden fees, no fine print.",
  },
  {
    title: "Proven Track Record",
    description:
      "Our advisors bring years of experience, focusing on long-term relationships and sustainable growth.",
  },
  {
    title: "End-to-End Support",
    description:
      "From policy selection to claim assistance and portfolio reviews, we're with you every step of the way.",
  },
];

const ChooseUsCard = () => {
    const cardRefs = useRef([]);
  const [readCards, setReadCards] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      cardRefs.current.forEach((el, index) => {
        if (el && !readCards.includes(index)) {
          const rect = el.getBoundingClientRect();
          const elementCenter = rect.top + rect.height / 2;
          const screenCenter = window.innerHeight / 2;

          if (elementCenter < screenCenter) {
            setReadCards((prev) => [...prev, index]);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, [readCards]);

  return (
    <div className="flex flex-col items-center justify-center py-12 px-6 bg-gray-50">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">
        Why Choose Us?
      </h1>
      <p className="text-lg text-center text-gray-600 max-w-2xl mb-10">
        We provide tailored solutions, expert financial advice, and a commitment
        to your long-term success. Experience reliability and innovation like
        never before.
      </p>

      <div className="flex flex-col-reverse lg:flex-row items-center gap-10 max-w-6xl w-full">
        {/* Points List */}
        <div className="flex-1 space-y-6">
          {points.map((point, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`flex items-start gap-4 rounded-lg p-4 transition-all duration-500 shadow-md ${
                readCards.includes(index)
                  ? "bg-gray-300 text-gray-800"
                  : "bg-white"
              }`}
            >
              <FaCheckCircle
                className={`text-2xl mt-1 transition-colors duration-300 ${
                  readCards.includes(index)
                    ? "text-gray-700"
                    : "text-gray-400"
                }`}
              />
              <div>
                <h3 className="text-xl font-semibold">{point.title}</h3>
                <p className="text-gray-700">{point.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center">
          <img
            className="h-130 w-full max-w-sm rounded-lg shadow-lg"
            src={sale1}
            alt="Why Choose Us"
          />
        </div>
      </div>
    </div>
  );

}

export default ChooseUsCard





