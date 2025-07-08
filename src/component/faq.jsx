import React, { useState } from "react";

const faqData = [
  {
    question: "What is VSP Finserv?",
    answer: "VSP Finserv is a financial services company offering investment, tax planning, and advisory services."
  },
  {
    question: "How can I start investing?",
    answer: "You can start by contacting our team via the Contact page or visiting the 'Services' section to explore options."
  },
  {
    question: "Do you offer SIP planning?",
    answer: "Yes, we offer comprehensive SIP calculators and advisory support to help you plan your investments."
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <div key={index} className="border-b py-4">
          <button
            className="flex justify-between w-full text-left font-medium text-lg"
            onClick={() => toggle(index)}
          >
            {item.question}
            <span>{openIndex === index ? "−" : "+"}</span>
          </button>
          {openIndex === index && (
            <p className="mt-2 text-gray-600">{item.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FaqSection;
