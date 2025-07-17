import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Anjali Mehta",
    title: "Software Engineer",
    content:
      "VSP Finserv helped me start my SIP journey confidently. Their advice is easy to understand and they’re always available!",
  },
  {
    name: "Rahul Sharma",
    title: "Small Business Owner",
    content:
      "From tax-saving investments to insurance, they gave me the clarity I needed. Highly recommend their services!",
  },
  {
    name: "Neha Agarwal",
    title: "Teacher",
    content:
      "Professional, honest, and transparent—VSP Finserv made financial planning stress-free for my family.",
  },
];

const Testimonials = () => {
  return (
    <section className=" py-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
        <p className="text-gray-600 mb-12">Real stories from people we’ve helped.</p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white shadow-xl p-6 rounded-lg relative"
            >
              <FaQuoteLeft className="text-yellow-400 text-3xl absolute -top-1 left-40 bg-white rounded" />
              <p className="text-gray-700 mb-6 mt-4 italic">"{testimonial.content}"</p>
              <div className="text-left">
                <p className="text-lg font-semibold text-gray-800">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
