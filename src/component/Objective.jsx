import React from 'react';
import { FaBullhorn, FaGlobe, FaChartLine } from 'react-icons/fa';
import mutualFundImage from '../assets/mfshihai.jpg'; // Replace with your actual path

const Objective = () => {
  return (
    <section className=" text-gray-800 py-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-3">
        {/* Left Text Section */}
        <div className="lg:w-1/2 mb-10 lg:mb-0" data-aos="fade-right">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-4 leading-tight text-blue-800">
            The Best <br />
            Mutual Fund Services <br />
            To Grow Your Wealth
          </h1>
          <p className="text-green-700 font-semibold tracking-wide mb-6">
            Expert in financial planning, analysis, and educating clients.
            <br />
            VSP FinsServ | 12+ years of experience in the financial sector.
          </p>
        </div>

        {/* Right Image Section */}
        <div className="lg:w-1/2 flex justify-end ml-auto" data-aos="fade-left">
          <img
            src={mutualFundImage}
            alt="Mutual Funds Sahi Hai"
            className="rounded-lg shadow-lg max-w-s lg:max-w-m h-50 w-100"
          />
        </div>
      </div>

      {/* Vision / Mission / Objective Cards */}
      <div className="max-w-7xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {/* Vision */}
        <div className="bg-white text-gray-800 rounded-lg p-6 shadow hover:shadow-xl transition-all duration-300">
          <div className="flex items-center justify-center text-yellow-500 text-3xl mb-4">
            <FaChartLine />
          </div>
          <h3 className="text-xl font-bold mb-2 text-center">VISION</h3>
          <p className="text-center text-sm">
            To be the leading financial firm recognized for our unwavering
            commitment to client success and satisfaction.
          </p>
        </div>

        {/* Objective */}
        <div className="bg-yellow-400 text-gray-800 rounded-lg p-6 shadow hover:shadow-xl transition-all duration-300">
          <div className="flex items-center justify-center text-white text-3xl mb-4">
            <FaBullhorn />
          </div>
          <h3 className="text-xl font-bold mb-2 text-center">OBJECTIVE</h3>
          <p className="text-center text-sm">
            We value the trust you place in us. We are committed to keeping the highest standards for
            securing transactions and customer satisfaction.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-white text-gray-800 rounded-lg p-6 shadow hover:shadow-xl transition-all duration-300">
          <div className="flex items-center justify-center text-yellow-500 text-3xl mb-4">
            <FaGlobe />
          </div>
          <h3 className="text-xl font-bold mb-2 text-center">MISSION</h3>
          <p className="text-center text-sm">
            Navigating our clients toward their financial goals by providing
            comprehensive and tailored financial services.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Objective;
