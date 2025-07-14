import React from 'react'
import { FaFacebookF, FaInstagram, FaWhatsapp, FaXTwitter, FaEnvelope } from "react-icons/fa6";

const Social = () => {
   return (
    <div className="fixed top-1/2 right-0 z-50 pr-1">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="block bg-blue-600 p-2 rounded-l hover:bg-blue-700 text-white">
        <FaFacebookF size={18}/>
      </a>
      {/* <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="block bg-black p-2 rounded-l hover:bg-gray-900 text-white">
        <FaXTwitter />
      </a> */}
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="block bg-pink-500 p-2 rounded-l hover:bg-pink-600 text-white">
        <FaInstagram size={18}/>
      </a>
      <a href="https://wa.me/919463984957" target="_blank" rel="noopener noreferrer" className="block bg-green-500 p-2 rounded-l hover:bg-green-600 text-white">
        <FaWhatsapp size={18}/>
      </a>
      <a href="mailto:vspfinserv@email.com" className="block bg-red-500 p-2 rounded-l hover:bg-red-600 text-white">
        <FaEnvelope size={18}/>
      </a>
    </div>
  );
}

export default Social