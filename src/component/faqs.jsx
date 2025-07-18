import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

// FAQ data moved to its own module (optional)
const faqs = [
  {
    question: "What is SIP?",
    answer: `SIP stands for Systematic Investment Plan. It is a disciplined investment method used primarily in mutual funds, where an investor invests a fixed amount of money at regular intervals (e.g., daily, weekly, monthly, or quarterly), rather than investing a lump sum all at once. It allows the investor to buy the units at regular intervals without worrying about market volatility.`,
  },
  {
    question: "What is a Mutual Fund?",
    answer: `A mutual fund is a pool of money collected from multiple investors, managed by professional fund managers, and invested in assets like stocks, bonds, or other securities.`,
  },
  {
    question: "How do Mutual Funds work?",
    answer: `Investors buy units of a mutual fund. The fund manager uses this money to invest in various securities. The returns (or losses) are distributed proportionally among the investors based on their unit holdings.`,
  },
  {
    question: "What are the types of Mutual Funds?",
    answer: `• Equity Funds: Invest mainly in stocks. Higher risk, higher return.\n• Debt Funds: Invest in fixed-income securities like bonds. Lower risk, stable return.\n• Hybrid Funds: Mix of equity and debt.\n• ELSS (Equity Linked Savings Scheme): Tax-saving mutual fund under Section 80C.\n• Liquid Funds: Short-term investments; low risk, lower returns.`,
  },
  {
    question: "Can I withdraw money anytime from mutual funds?",
    answer: `Yes, for open-ended funds (like most mutual funds), you can redeem anytime. However, exit load or tax implications may apply if withdrawn early.`,
  },
  {
    question: "What is Exit Load?",
    answer: `Exit load is a small fee charged when you redeem your mutual fund units within a specific period (usually 1 year). It is meant to discourage premature withdrawals.`,
  },
  {
    question: "Are mutual funds safe?",
    answer: `Mutual funds are subject to market risks. However, they are regulated by SEBI (Securities and Exchange Board of India), ensuring transparency and investor protection.`,
  },
  {
    question: "Do mutual funds offer guaranteed returns?",
    answer: `No, mutual fund returns are not guaranteed. Returns depend on the market performance of the fund's underlying assets.`,
  },
  {
    question: "Is there any tax benefit in investing in mutual funds?",
    answer: `Only ELSS funds offer tax deduction up to ₹1.5 lakh under Section 80C. Other mutual funds are taxable based on capital gains.`,
  },
  {
    question: "Advantages of Early Investing in Mutual Fund SIPs",
    answer: `1. 💰 Power of Compounding\nEven small monthly investments can grow big due to compounding.\n\nExample:\nInvest ₹2,000/month at 12% return\n→ 20 years → ₹20 lakh\n→ 30 years → ₹70 lakh\n\n2. ⏳ Longer Time Horizon = Lower Risk\nEarly investors can ride out market volatility.\n\n3. 💸 Lower Monthly Investment Needed\nYou need to invest less monthly if you start early.\n\n4. 🧠 Disciplined Financial Habit\nBuilds regular saving habits and financial discipline.\n\n5. 🥅 Achieve Life Goals Sooner\nSupports retirement, house purchase, kids’ education, etc.\n\n6. 📉 Rupee Cost Averaging\nBuys more units when market is low, fewer when high.\n\n7. 🕊️ Financial Freedom at an Earlier Age\nAllows early retirement or a debt-free life.`,
  },
];

// Accordion Item Component
const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <div className="border-b py-4 transition-all duration-300">
    <button
      className="flex justify-between items-center w-full text-left font-semibold text-gray-800 text-lg focus:outline-none"
      onClick={onClick}
    >
      <span>{question}</span>
      {isOpen ? <FaChevronUp /> : <FaChevronDown />}
    </button>
    <div
      className={`overflow-hidden transition-all duration-500 ease-in-out ${
        isOpen ? "max-h-screen mt-3" : "max-h-0"
      }`}
    >
      <p className="text-gray-700 whitespace-pre-line text-base">{answer}</p>
    </div>
  </div>
);

// Main Page Component
const FAQsPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-100 to-green-100 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-800 mb-4">
            FAQs
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Find answers to commonly asked questions about mutual funds, SIPs,
            safety, taxation, and investing benefits. Learn how to build wealth
            and plan your future.
          </p>
        </div>
      </section>

      {/* FAQs Accordion */}
      <section className="max-w-5xl mx-auto px-6 py-12 bg-white rounded-xl shadow-md mt-10 z-10 relative">
        {faqs.map((faq, idx) => (
          <FAQItem
            key={idx}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === idx}
            onClick={() => toggleOpen(idx)}
          />
        ))}
      </section>
    </div>
  );
};

export default FAQsPage;
