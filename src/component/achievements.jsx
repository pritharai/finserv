import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import achievementImage from "../assets/achievements.avif";

const AchievementsSection = () => {
  const { ref: counterRef, inView } = useInView({ triggerOnce: true });

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
      <div
        ref={counterRef}
        className="absolute left-1/2 transform -translate-x-1/2 w-[90%] md:w-[70%] bg-yellow-400 text-white rounded-xl shadow-xl py-10 px-6 grid grid-cols-2 md:grid-cols-2 justify-between text-center z-20"
      >
        <div>
          <h3 className="text-4xl font-extrabold">
            {inView ? <CountUp end={424} duration={3} /> : 0}+
          </h3>
          <p className="font-medium">Investors</p>
        </div>
        <div>
          <h3 className="text-4xl font-extrabold">
            {inView ? <CountUp end={120} duration={3} /> : 0}+
          </h3>
          <p className="font-medium">Happy Families</p>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
