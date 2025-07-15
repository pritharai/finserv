import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <a
  href="https://wa.me/919463984957?text=Hi%20VSP%20FinsServ%2C%20I%20am%20interested%20in%20your%20services." 
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 left-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition duration-300"
  aria-label="Chat on WhatsApp"
>
  <FaWhatsapp size={28} />
</a>

  );
};

export default WhatsAppButton;
