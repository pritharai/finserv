import React from "react";
// import { Link } from "react-router-dom";

// Import your logos
import iti from "../assets/logos/iti.png";
import lic from "../assets/logos/lic.jpg";
import helios from "../assets/logos/helios.png";
import bandhan from "../assets/logos/bandhan.jpg";
import motilal from "../assets/logos/motilal.png";
import hdfc from "../assets/logos/hdfc.png";
import tata from "../assets/logos/tata.png";
import union from "../assets/logos/union.png";
import sbi from "../assets/logos/sbi.jpeg";
import axis from "../assets/logos/axis.png";
import nivabupa from "../assets/logos/niva-bupa.png";
import hdfcergo from "../assets/logos/hdfc-ergo.png";
import manipal from "../assets/logos/manipal-cigna.png";
import bajajall from "../assets/logos/Bajaj-Allianz.png";
import tnia from "../assets/logos/TNIA.png";
import uti from "../assets/logos/uti.webp";
import bajajfin from "../assets/logos/bajaj-finserv.webp";
import canara from "../assets/logos/canara.png";
import care from "../assets/logos/care.jpg";
import dsp from "../assets/logos/dsp.png";
import future from "../assets/logos/future.png";
import go from "../assets/logos/go.png";
import hsbc from "../assets/logos/hsbc.avif";
import icici from "../assets/logos/icici.jpg";
import invesco from "../assets/logos/invesco.jpg";
import investwell from "../assets/logos/investwell.png";
import liberty from "../assets/logos/liberty.jpg";
import mahindra from "../assets/logos/mahindra.png";
import navi from "../assets/logos/navi.jpg";
import nippon from "../assets/logos/nippon.webp";
import quant from "../assets/logos/quant.png";
import samco from "../assets/logos/samco.webp";
import star from "../assets/logos/star.png";
import sundram from "../assets/logos/sundram.png";
import trust from "../assets/logos/trust.png";


// Add more logos as needed...

const partners = [
  {
    name: "ITI Mutual Fund",
    logo: iti,
    link: "https://www.itimf.com/",
    type: "Investment",
  },
  {
    name: "LIC Mutual Fund",
    logo: lic,
    link: "https://www.licmf.com/",
    type: "Investment",
  },
  {
    name: "Helios Mutual Fund",
    logo: helios,
    link: "https://www.helioscapital.in/",
    type: "Investment",
  },
  {
    name: "Bandhan Mutual Fund",
    logo: bandhan,
    link: "https://www.bandhanmutual.com/",
    type: "Investment",
  },
  {
    name: "Motilal Oswal",
    logo: motilal,
    link: "https://www.motilaloswalmf.com/",
    type: "Investment",
  },
  {
    name: "Invesco Mutual Fund",
    logo: invesco,
    link: "https://www.axismf.com/",
    type: "Investment",
  },
  {
    name: "Mahindra Manulife Mutual Fund",
    logo: mahindra,
    link: "https://www.axismf.com/",
    type: "Investment",
  },
  {
    name: "Canera Robeco Mutual Fund",
    logo: canara,
    link: "https://www.axismf.com/",
    type: "Investment",
  },
   {
    name: "TATA Mutual Fund",
    logo: tata,
    link: "https://www.tatamutualfund.com/",
    type: "Investment",
  },
  {
    name: "Union Mutual Fund",
    logo: union,
    link: "https://www.unionmf.com/",
    type: "Investment",
  },
  {
    name: "HDFC Mutual Fund",
    logo: hdfc,
    link: "https://www.hdfcfund.com/",
    type: "Investment",
  },
 {
    name: "HSBC Mutual Fund",
    logo: hsbc,
    link: "https://www.unionmf.com/",
    type: "Investment",
  },
  
  {
    name: "SBI Mutual Fund",
    logo: sbi,
    link: "https://www.sbimf.com/",
    type: "Investment",
  },
  {
    name: "Axis Mutual Fund",
    logo: axis,
    link: "https://www.axismf.com/",
    type: "Investment",
  },
  {
    name: "Investwell Mutual Fund",
    logo: investwell,
    link: "https://www.axismf.com/",
    type: "Investment",
  },
  {
    name: "DSP Mutual Fund",
    logo: dsp,
    link: "https://www.axismf.com/",
    type: "Investment",
  },
  {
    name: "UTI Mutual Fund",
    logo: uti,
    link: "https://www.axismf.com/",
    type: "Investment",
  },
  {
    name: "Royal Sundram Mutual Fund",
    logo: sundram,
    link: "https://www.axismf.com/",
    type: "Investment",
  },
  {
    name: "Trust Mutual Fund",
    logo: trust,
    link: "https://www.axismf.com/",
    type: "Investment",
  },
  {
    name: "Samco Mutual Fund",
    logo: samco,
    link: "https://www.axismf.com/",
    type: "Investment",
  },
  {
    name: "Nippon Mutual Fund",
    logo: nippon,
    link: "https://www.axismf.com/",
    type: "Investment",
  },
  {
    name: "Quant Mutual Fund",
    logo: quant,
    link: "https://www.axismf.com/",
    type: "Investment",
  },
  
  // Add insurance partners below similarly if needed
  {
    name: "Niva Bupa Health Insurance",
    logo: nivabupa,
    link: "https://www.axismf.com/",
    type: "Health Insurance",
  },
  {
    name: "ManipalCigna Health Insurance",
    logo: manipal,
    link: "https://www.axismf.com/",
    type: "Health Insurance",
  },
  {
    name: "Star Health & Allied Insurance",
    logo: star,
    link: "https://www.axismf.com/",
    type: "Health Insurance",
  },
  {
    name: "Care Health Insurance",
    logo: care,
    link: "https://www.axismf.com/",
    type: "Health Insurance",
  },
  {
    name: "The New India Assurance",
    logo: tnia,
    link: "https://www.axismf.com/",
    type: "General Insurance",
  },
  {
    name: "Go Digit General Insurance",
    logo: go,
    link: "https://www.axismf.com/",
    type: "General Insurance",
  },
  {
    name: "ICICI Lombard General Insurance",
    logo: icici,
    link: "https://www.axismf.com/",
    type: "General Insurance",
  },  
  {
    name: "HDFC ERGO",
    logo: hdfcergo,
    link: "https://www.axismf.com/",
    type: "General Insurance",
  },
  {
    name: "Liberty General Insurance",
    logo: liberty,
    link: "https://www.axismf.com/",
    type: "General Insurance",
  },
  
  {
    name: "Bajaj Allianz",
    logo: bajajall,
    link: "https://www.axismf.com/",
    type: "General Insurance",
  },
  {
    name: "Future Generali India Insurance",
    logo: future,
    link: "https://www.axismf.com/",
    type: "General Insurance",
  },
];

const PartnersPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Our Partners</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our esteemed investment and insurance partners who help us bring financial solutions to life.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6" >
          {partners.map((partner, idx) => (
            <a
              key={idx}
              
              rel="noopener noreferrer"
              className="bg-white rounded-lg shadow hover:shadow-lg transition-transform transform hover:scale-105 duration-300 flex flex-col items-center justify-center p-4"
              data-aos="fade-up" data-aos-delay={idx*50}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-20 object-contain mb-2"
              />
              <span className="text-center text-sm font-medium text-gray-800">
                {partner.name}
              </span>
              <span className="text-xs text-gray-500">{partner.type}</span>
            </a>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <Link
            to="/"
            className="inline-block bg-yellow-400 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-yellow-500 transition duration-300"
          >
            Back to Home
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default PartnersPage;
