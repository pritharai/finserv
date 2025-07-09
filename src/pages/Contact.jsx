import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import FaqSection from "../component/faq";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-5">
      <div className="max-w-5xl mx-auto bg-white p-10 rounded-md shadow-md">
        <h1 className="text-3xl font-bold text-center text-green-700 mb-6">
          Contact Us
        </h1>

        {/* Contact Info Section */}
        <div className="grid md:grid-cols-2 gap-10 mb-10">
          <div className="space-y-6">
            <div className="flex items-start space-x-3">
              <FaPhoneAlt className="text-green-600 text-lg mt-1" />
              <div>
                <p className="font-semibold text-gray-700">Phone</p>
                <p className="text-sm">+91 9463984957</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <FaEnvelope className="text-green-600 text-lg mt-1" />
              <div>
                <p className="font-semibold text-gray-700">Email</p>
                <p className="text-sm">vspfinsserv@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <FaMapMarkerAlt className="text-green-600 text-lg mt-1" />
              <div>
                <p className="font-semibold text-gray-700">Address</p>
                <p className="text-sm">
                  Dhandhra road, Ludhiana. Pin 141113, Punjab
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <form className="space-y-5">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Message</label>
              <textarea
                className="w-full border border-gray-300 rounded-md p-2 h-32"
                placeholder="Your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
