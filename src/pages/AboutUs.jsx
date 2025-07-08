import React from "react";
import { FaCertificate, FaBolt, FaUserCheck, FaMobileAlt } from "react-icons/fa";
import profile from "../assets/profile.jpg";
import mf from "../assets/Mutual-Funds.webp";
import insurance from "../assets/insurance.webp";
import tech from "../assets/tech.jpg";
import support from "../assets/support.jpg";

const AboutUs = () => {
  const offerCards = [
    { title: "Mutual Fund Planning", desc: "Goal-based investments aligned to your future needs.", img: mf },
    { title: "Insurance Solutions", desc: "Custom coverage for life, health, and assets.", img: insurance },
    { title: "Tech-Driven Tools", desc: "Smart dashboards, tracking, and automation.", img: tech },
    { title: "Client-First Support", desc: "Always available with fast, friendly help.", img: support },
  ];

  const whyChoose = [
    { icon: <FaCertificate size={30} />, label: "Certified Experts" },
    { icon: <FaBolt size={30} />, label: "Fast & Efficient" },
    { icon: <FaUserCheck size={30} />, label: "Trust & Transparency" },
    { icon: <FaMobileAlt size={30} />, label: "Digital-First" },
  ];

  return (
    <div className="px-6 py-16 max-w-7xl mx-auto">

      {/* Header */}
      <h1 className="text-5xl font-light text-center text-gray-800 mb-20">
        About <span className="font-semibold text-blue-600">VSP FinSserv</span>
      </h1>

      {/* Z-pattern Section */}
      <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
        <div className="text-lg text-gray-700 leading-7">
          <p className="mb-4">
            Welcome to VSP FinSserv, where financial expertise meets technological insight.
            As an AMFI Certified Mutual Fund Distributor and an IRDA Certified Insurance Advisor, we specialize in providing well-rounded financial solutions that combine the security of insurance with the growth potential of mutual fund investments. Backed by a strong academic foundation in Computer Science (B.Tech) and a Master’s in Computer Applications (MCA), we bring a modern, data-driven approach to financial planning.
            Our unique blend of financial knowledge and tech-savviness allows us to offer transparent, efficient, and customized investment and insurance solutions, powered by the latest tools and platforms.
          </p>
          <p>
            Whether it’s investing for your goals or protecting your future, we simplify finance with clarity and confidence.
          </p>
        </div>
        <img src={profile} alt="Team" className="rounded-xl object-cover shadow-sm w-full h-auto" />
      </div>

      {/* What We Offer */}
      <h2 className="text-3xl font-semibold text-blue-700 mb-10 text-center">
        What We Offer
      </h2>
      <div className="grid md:grid-cols-2 gap-10 mb-24">
        {offerCards.map((card, i) => (
          <div
            key={i}
            className="relative rounded-lg overflow-hidden h-60 shadow-lg hover:scale-[1.02] transition-all cursor-pointer"
          >
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${card.img})` }}
            />

            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black to-black/20" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white">
              <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
              <p className="text-sm">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Why Choose Us */}
      <h2 className="text-3xl font-semibold text-blue-700 mb-10 text-center">
        Why Choose Us
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center text-gray-700">
        {whyChoose.map((item, i) => (
          <div key={i} className="flex flex-col items-center space-y-2">
            <div className="text-blue-600">{item.icon}</div>
            <span className="text-md font-medium">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
