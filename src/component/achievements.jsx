import React from "react";
import achievementImage from "../assets/family.jpg"; // replace with your actual image path

const AchievementsSection = () => {
  return (
    <section className="relative bg-white-500 pt-16 pb-36 px-6">

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        {/* Left: Image */}
        <div className="relative z-10">
          <img
            src={achievementImage}
            alt="Happy Clients"
            className="rounded-lg shadow-xl w-full max-w-md mx-auto"
          />
        </div>

        {/* Right: Text */}
        <div className="relative z-10 space-y-6 text-center lg:text-left">
          <h2 className="text-4xl font-bold text-gray-800">Our Achievements</h2>
          <p className="text-gray-500 font-medium uppercase tracking-wide">
            We bring solutions to make life easier for our customers.
          </p>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-800">
                Best Team of Experts
              </h4>
              <p className="text-gray-600">
                We are the best team of experts to help you resolve your queries.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">
                Customized Investment
              </h4>
              <p className="text-gray-600">
                Choose schemes that suit your requirements the best.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Box */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-[90%] md:w-[70%] bg-yellow-400 text-white rounded-xl shadow-xl py-10 px-6 grid grid-cols-2 md:grid-cols-2 justify-between text-center z-20">
        <div>
          <h3 className="text-4xl font-extrabold">424+</h3>
          <p className="font-medium">Investors</p>
        </div>
        <div>
          <h3 className="text-4xl font-extrabold">120+</h3>
          <p className="font-medium">Happy Families</p>
        </div>
      </div>

      {/* Background Decorations (optional) */}
      {/* <div className="absolute top-0 left-0 w-48 h-48 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full opacity-30 blur-3xl animate-pulse -z-10" />
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-500 to-pink-400 rounded-full opacity-30 blur-3xl animate-pulse -z-10" /> */}
    </section>
  );
};

export default AchievementsSection;
