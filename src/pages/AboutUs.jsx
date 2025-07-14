import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { FaShieldAlt,  
  FaHandsHelping,   
  FaBalanceScale,   
  FaHeadset         } from "react-icons/fa";
import profile from "../assets/profile.jpg";
import mf from "../assets/Mutual-Funds.webp";
import insurance from "../assets/insurance.webp";
import tech from "../assets/tech.jpg";
import support from "../assets/support.jpg";
import FaqSection from "../component/faq";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const offerCards = [
    {
      title: "Mutual Fund Planning",
      desc: "Goal-oriented strategies to grow wealth with optimized risk.",
      img: mf,
    },
    {
      title: "Insurance Solutions",
      desc: "Personalized protection for life, health, and assets.",
      img: insurance,
    },
    {
      title: "Tech-Driven Tools",
      desc: "Modern dashboards for real-time insights and performance tracking.",
      img: tech,
    },
    {
      title: "Client-First Support",
      desc: "Human-centric, responsive, and always available service.",
      img: support,
    },
  ];

  const whyChoose = [
    { icon: <FaShieldAlt size={40} />, label: "AMFI Registered & Compliant" , desc: "As a SEBI-regulated, AMFI-registered distributor, we operate with full transparency and adherence to ethical practices."},
    { icon: <FaHandsHelping size={40} />, label: "Client-Centric Approach", desc:"We take the time to understand your goals—be it tax planning, child education, retirement, or wealth creation—and offer solutions that are right for you." },
    { icon: <FaBalanceScale size={40} />, label: "Product Neutral Advice", desc: "We offer access to a wide range of mutual fund schemes from top Asset Management Companies (AMCs), ensuring recommendations based solely on your needs" },
    { icon: <FaHeadset size={40} />, label: "Continual Support", desc: "From onboarding and KYC assistance to portfolio reviews and rebalancing, we stay with you throughout your financial journey." },
  ];

  return (
    <>
      <div className="px-6 py-10 max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-20">
          About <span className=" text-blue-800">VSP FinsServ</span>
        </h1>

        {/* Introduction Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div
            className="text-lg text-gray-700 leading-7"
            data-aos="fade-right"
          >
            <p className="mb-4">
              Welcome to <strong className="text-green-600 text-xl">VSP FinsServ</strong> — a next-generation financial advisory firm built on trust, technology, and transparency.
              With dual certifications from AMFI (Mutual Funds) and IRDA (Insurance), and a strong technical foundation (B.Tech & MCA),
              we bridge the gap between financial acumen and digital enablement.
            </p>
            <p>
              From goal-based mutual fund investments to tailored insurance solutions,
              our mission is to simplify wealth creation and protection using tools, data, and a client-first approach.
            </p>
          </div>
          <img
            src={profile}
            alt="VSP Profile"
            className="rounded-xl object-cover shadow-lg w-full"
            data-aos="fade-left"
          />
        </div>

        {/* What We Offer */}
        <h2 className="text-4xl font-bold text-center text-blue-800 mb-10">
          What We Offer
        </h2>
        <div
          className="grid md:grid-cols-2 gap-10 mb-24"
          data-aos="fade-up"
        >
          {offerCards.map((card, i) => (
            <div
              key={i}
              className="relative rounded-xl overflow-hidden h-64 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer"
              data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
            >
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
        <h2 className="text-4xl font-bold text-center text-blue-800 mb-10">
          What Sets Us Apart?
        </h2>
       <div
  className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center text-gray-700"
  data-aos="fade-up"
>
  {whyChoose.map((item, i) => (
    <div
      key={i}
      data-aos="fade-up"
      data-aos-delay={i * 100}
      className="group"
    >
      {/* Desktop / Large Screen View (flip effect) */}
      <div className="hidden sm:block [perspective:1000px] h-52">
        <div className="relative h-full w-full transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-y-180">
          {/* Front Side */}
          <div className="absolute inset-0 bg-white rounded-xl shadow-md flex flex-col items-center justify-center p-4 backface-hidden h-full">
            <div className="text-teal-600 mb-2">{item.icon}</div>
            <span className="text-md font-semibold text-gray-800">
              {item.label}
            </span>
          </div>

          {/* Back Side */}
          <div className="absolute inset-0 bg-teal-600 text-white rounded-xl shadow-md flex items-center justify-center rotate-y-180 backface-hidden px-6 h-full">
            <span className="text-md font-medium text-center">{item.desc}</span>
          </div>
        </div>
      </div>

      {/* Mobile View (no flip) */}
      <div className=" sm:hidden bg-white rounded-xl shadow-md p-4 space-y-2 h-92 flex flex-col items-center justify-center">
        <div className="text-teal-600">{item.icon}</div>
        <div className="text-md font-semibold text-gray-800">{item.label}</div>
        <div className="text-sm text-gray-600 text-center px-2">{item.desc}</div>
      </div>
    </div>
  ))}
</div>



      </div>

      {/* FAQ */}
      {/* <div data-aos="fade-up">
        <FaqSection />
      </div> */}
    </>
  );
};

export default AboutUs;
