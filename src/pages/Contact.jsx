import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaUser, FaRegCommentDots } from "react-icons/fa";
import FaqSection from "../component/faq";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-5">
      <div className="max-w-5xl mx-auto mb-12 px-0">
  <div className="bg-gradient-to-r from-green-50 via-white to-blue-50 border-l-4 border-teal-600 p-6 rounded-md shadow-md">
    <h2 className="text-2xl font-bold text-teal-700 mb-2">📅 Book a Free Consultation</h2>
    <p className="text-gray-700 mb-4">
      Want to make confident financial decisions? Schedule a free 1-on-1 session with our expert to:
    </p>
    <ul className="list-disc pl-6 text-gray-600 space-y-1">
      <li>Understand your current financial position</li>
      <li>Clarify goals like education, retirement, or tax-saving</li>
      <li>Get product-neutral advice tailored to you</li>
    </ul>
    <div className="mt-5">
      <a
        href="https://wa.me/919463984957?text=Hi%20I%20want%20to%20book%20a%20consultation"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-md font-semibold shadow transition"
      >
        Book Now on WhatsApp
      </a>
    </div>
  </div>
</div>

      <div className="max-w-5xl mx-auto bg-gradient-to-r from-blue-50 via-white to-green-50 border-l-4 border-blue-600 p-10 rounded-md shadow-md mt-10" data-aos="fade-up">

        <h1 className="text-3xl font-bold text-center text-blue-800 " data-aos="fade-right" data-aos-delay="100">

          Contact Us
        </h1>
        <div className="h-1 w-24 bg-teal-500 mx-auto mt-2 mb-8 rounded"></div>

        {/* Contact Info Section */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <FaPhoneAlt className="text-green-600 text-2xl mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-slate-800">Phone</h4>
                <p className="text-slate-600">+91 9463984957</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaEnvelope className="text-green-600 text-2xl mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Email</h4>
                <p className="text-gray-600">vspfinsserv@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaMapMarkerAlt className="text-green-600 text-2xl mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Address</h4>
                <p className="text-gray-600">
                  Dhandhra Road, Ludhiana <br /> Pin 141113, Punjab
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-6" data-aos="fade-left" data-aos-delay="200">
            <div className="relative">
              <FaUser className="absolute top-3 left-3 text-gray-400" />
              <input
                type="text"
                placeholder="Your Name"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>

            <div className="relative">
              <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>

            <div className="relative">
              <FaRegCommentDots className="absolute top-3 left-3 text-gray-400" />
              <textarea
                placeholder="Your Message"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none h-32 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-semibold transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

        <div className="mt-10 rounded overflow-hidden shadow-md"  data-aos="fade-up"
  data-aos-delay="300">
  <iframe
    title="Office Location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39638.77448349268!2d75.80830354622535!3d30.865287311834713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a83dbc0e176fd%3A0x304ecc00270803d0!2sDhandra%20road!5e1!3m2!1sen!2sin!4v1752405640260!5m2!1sen!2sin"
    width="100%"
    height="300"
    allowFullScreen=""
    loading="lazy"
    className="w-full border-none"
  ></iframe>
</div>

      </div>
    
  );
};

export default Contact;
