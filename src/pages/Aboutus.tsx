import React from "react";
import profile from "../assets/profile.jpg";
import mutualFund from "../assets/Mutual-Funds.webp"; // Add a related image
import insurance from "../assets/insurance.webp";
import tech from "../assets/tech.jpg";
import support from "../assets/support.jpg";

const About: React.FC = () => {
  return (
    <div className="flex flex-col items-center px-4 py-12 bg-gradient-to-b from-gray-50 to-white">
      {/* Heading */}
      <h1 className="text-5xl font-extrabold mb-12 text-gray-700 text-center tracking-wide">
        About Us
      </h1>

      {/* Intro Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl w-full">
        {/* Paragraph */}
        <div className="md:w-1/2 text-gray-800 text-lg leading-relaxed text-center md:text-left">
          <p>
            Welcome to <span className="font-semibold text-blue-700">VSP FinSserv</span>, where
            financial expertise meets technological insight. As an <strong>AMFI Certified Mutual Fund Distributor</strong> and an <strong>IRDA Certified Insurance Advisor</strong>, we deliver secure and growth-focused financial solutions.
          </p>
          <p className="mt-4">
            With a strong academic foundation in Computer Science (B.Tech) and MCA, we bring a modern,
            data-driven approach to your financial planning. Our tech-savviness ensures you receive
            efficient, transparent, and fully personalized investment strategies.
          </p>
        </div>

        {/* Image */}
        <div className="md:w-1/2">
          <img
            src={profile}
            alt="Our Team"
            className="w-full rounded-xl shadow-xl border-4 border-gray-300"
          />
        </div>
      </div>

      {/* What We Offer */}
      <div className="mt-16 max-w-6xl w-full bg-white rounded-xl shadow-md p-10">
        <h2 className="text-3xl font-semibold text-center mb-8 text-blue-800">
          What We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="flex flex-col md:flex-row bg-blue-50 rounded-lg shadow p-6 hover:shadow-lg transition">
            <img src={mutualFund} alt="Mutual Fund" className="w-24 h-24 rounded-lg object-cover mr-6" />
            <div>
              <h3 className="font-bold text-xl mb-2">🎯 Goal-Based Mutual Fund Planning</h3>
              <p>
                Personalized investment plans for retirement, education, and more, tailored to your risk profile.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col md:flex-row bg-blue-50 rounded-lg shadow p-6 hover:shadow-lg transition">
            <img src={insurance} alt="Insurance" className="w-24 h-24 rounded-lg object-cover mr-6" />
            <div>
              <h3 className="font-bold text-xl mb-2">🛡️ Comprehensive Insurance Solutions</h3>
              <p>
                Life, health, and general insurance products designed to protect your financial well-being.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col md:flex-row bg-blue-50 rounded-lg shadow p-6 hover:shadow-lg transition">
            <img src={tech} alt="Tech Driven" className="w-24 h-24 rounded-lg object-cover mr-6" />
            <div>
              <h3 className="font-bold text-xl mb-2">💻 Tech-Driven Financial Services</h3>
              <p>
                Digital tools for real-time tracking, faster service, and smoother portfolio management.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col md:flex-row bg-blue-50 rounded-lg shadow p-6 hover:shadow-lg transition">
            <img src={support} alt="Support" className="w-24 h-24 rounded-lg object-cover mr-6" />
            <div>
              <h3 className="font-bold text-xl mb-2">🤝 Client-First Philosophy</h3>
              <p>
                Long-term support with a focus on trust, transparency, and personalized attention.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mt-16 max-w-6xl w-full bg-gradient-to-r from-blue-100 to-white rounded-xl shadow-md p-10">
        <h2 className="text-3xl font-semibold text-center mb-6 text-blue-800">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg text-gray-800">
          <div className="p-4 bg-white rounded-md shadow hover:bg-blue-50 transition">
            ✅ AMFI & IRDA Certified
          </div>
          <div className="p-4 bg-white rounded-md shadow hover:bg-blue-50 transition">
            ✅ Transparent, ethical advice
          </div>
          <div className="p-4 bg-white rounded-md shadow hover:bg-blue-50 transition">
            ✅ Technical expertise in digital platforms
          </div>
          <div className="p-4 bg-white rounded-md shadow hover:bg-blue-50 transition">
            ✅ Personalized service with quick response time
          </div>
          <div className="p-4 bg-white rounded-md shadow hover:bg-blue-50 transition">
            ✅ Continuous learning and up-to-date market knowledge
          </div>
        </div>
        <p className="mt-6 text-center text-gray-700 text-lg leading-relaxed">
          We’re not just your financial advisor—we’re your <strong>financial partner</strong>, helping you make smart, informed decisions in a digital-first world.
        </p>
      </div>
    </div>
  );
};

export default About;
