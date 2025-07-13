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
          const screenCenter = window.innerHeight / 1.3;

          if (elementCenter < screenCenter) {
            setReadCards((prev) => [...prev, index]);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [readCards]);

  return (
    <section className="py-15 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Why VSP?</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          We provide tailored solutions, expert financial advice, and a commitment
          to your long-term success. Experience reliability and innovation like never before.
        </p>
      </div>

      <div className="flex flex-col-reverse lg:flex-row items-center gap-12 max-w-7xl mx-auto">
        {/* Points List */}
        <div className="flex-1 grid gap-6">
          {points.map((point, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`group transition-all duration-700 ease-in-out transform rounded-xl p-6 border-l-4 shadow-md hover:shadow-lg hover:scale-[1.02] bg-white 
                ${
                  readCards.includes(index)
                    ? "border-green-500 bg-gradient-to-r from-green-100 to-white"
                    : "border-gray-300"
                }`}
            >
              <div className="flex items-start gap-4">
                <FaCheckCircle
                  className={`text-2xl mt-1 transition-colors duration-300 ${
                    readCards.includes(index)
                      ? "text-green-600"
                      : "text-gray-400"
                  }`}
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{point.title}</h3>
                  <p className="text-gray-600 mt-1">{point.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center items-center">
          <img
            className="rounded-xl shadow-2xl w-full max-w-sm transform transition-transform duration-700 hover:scale-105"
            src={sale1}
            alt="Why Choose Us"
          />
        </div>
      </div>
    </section>
  );
};

export default ChooseUsCard;
