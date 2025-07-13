import React from "react";
import elss from "../assets/elss.jpg";
import elss2 from "../assets/elss2.jpg";
import { FaWhatsapp } from "react-icons/fa";
import ElssCalcBox from "./ELSSCalcbox"; // 🔁 import the calculator box

const ElssCalculator = () => {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-green-100 to-blue-100 py-12 px-6 text-center" data-aos="fade-down">
        <div className="max-w-5xl mx-auto">
          <img src={elss} alt="ELSS Illustration" className="mx-auto h-52 rounded-lg shadow-md mb-6 object-cover" />
          <h1 className="text-4xl font-bold text-gray-800 mb-2">ELSS Tax Saving Calculator</h1>
          <p className="text-gray-600 text-lg">
            Calculate your future wealth and tax savings with ELSS mutual funds in just a few steps.
          </p>
        </div>
      </section>

      {/* What is ELSS */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6 py-12 items-center">
        <div data-aos="fade-right">
          <img src={elss2} alt="What is ELSS" className="rounded-lg shadow-md" />
        </div>
        <div
          data-aos="fade-left"
          className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-md border-l-4 border-teal-600 shadow"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-2">What is ELSS?</h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            ELSS (Equity Linked Savings Scheme) is a type of mutual fund that helps you save tax under Section 80C
            of the Income Tax Act while investing primarily in equities. It has a lock-in of 3 years — the shortest
            among all 80C options — with potential for high returns.
            <br /><br />
            You can invest via lump sum or SIP and benefit from tax deductions and market-linked wealth creation.
            Returns above ₹1 lakh are taxed under Long-Term Capital Gains (LTCG).
          </p>
        </div>
      </section>

      {/* 🔁 Embedded Calculator Component */}
      <ElssCalcBox />

      {/* WhatsApp CTA */}
      <section
        className="max-w-5xl mx-auto mt-16 bg-gradient-to-r from-teal-100 to-blue-100 border-l-4 border-teal-600 rounded-lg shadow-md px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-6"
        data-aos="fade-up"
      >
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Ready to Start Saving Taxes?</h3>
          <p className="text-gray-700 text-sm">
            Talk to our expert and start your ELSS investment journey with confidence.
          </p>
        </div>
        <a
          href="https://wa.me/919463984957?text=Hi%20I%20want%20to%20start%20investing%20in%20ELSS"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md transition"
        >
          <FaWhatsapp /> Chat on WhatsApp
        </a>
      </section>
    </>
  );
};

export default ElssCalculator;
