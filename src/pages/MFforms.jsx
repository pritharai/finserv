import React, {useState} from "react";
import { FaDownload, FaExternalLinkAlt } from "react-icons/fa";
// import logo from "../assets/logos/axis.png"
import itiLogo from "../assets/logos/iti.png";
import licLogo from "../assets/logos/lic.jpg";
import helios from "../assets/logos/helios.png";
import bandhan from "../assets/logos/bandhan.jpg";
import motilal from "../assets/logos/motilal.png"
import invesco from "../assets/logos/invesco.jpg";
import canara from "../assets/logos/canara.png";
import mahindra from "../assets/logos/mahindra.png";
import hdfc from "../assets/logos/hdfc.png";
import tata from "../assets/logos/tata.png";
import union from "../assets/logos/union.png";
import sbi from "../assets/logos/sbi.jpeg";
import axis from "../assets/logos/axis.png";
import bajaj_finserv from "../assets/logos/bajaj-finserv.webp";
import hsbc from "../assets/logos/hsbc.avif";
import samco from "../assets/logos/samco.webp";
import dsp from "../assets/logos/dsp.png";
import trust from "../assets/logos/trust.png";
import navi from "../assets/logos/navi.jpg";
import quant from "../assets/logos/quant.png";
import nippon from "../assets/logos/nippon.webp";
import uti from "../assets/logos/uti.webp";
import sundram from "../assets/logos/sundram.png";
import investwell from "../assets/logos/investwell.png";

const onlineForms = [
  {
    name: "ITI CAF",
    logo: itiLogo,
    link: "https://mfs.kfintech.com/ITIConfirmation/investorservices/onlinepurchase/mobilepurchaseconfirmation1.aspx?Mob=TkZP&qparam=NzA1Nzgz&InvDistflag=VwAA&Trtype=U0lO",
  },
  {
    name: "LIC CAF",
    logo: licLogo,
    link: "https://online.licmf.com/QuickInvest?QWdlbnQ9QVJOLTE1MzE1NSZFdWluPUUyNzE4OTQmU3R5cGU9UmVndWxhciZmcm9tPW1hcmtldGluZw==",
  },
  {
    name: "Helios CAF",
    logo: helios,
    link: "https://cams.co.in/3h31dZGB5e5",
  },
  {
    name: "Bajaj-Finserv CAF",
    logo: bajaj_finserv,
    link: "https://mfs.kfintech.com/NFORegistration?refId=ODI1NTA1",
  },
//   {
//     name: "Mahindra Manulife CAF",
//     link: "https://cams.co.in/72FhrtpEgpk",
//   },
//   {
//     name: "Canera Robeco CAF",
//     link: "https://cams.co.in/72FhrtpEgpk",
//   },
  {
    name: "TATA CAF",
    logo: tata,
    link: "https://cams.co.in/72FhrtpEgpk",
  },
  {
    name: "Union CAF",
    logo: union,
    link: "https://cams.co.in/7ukl0LQJLL9",
  },
  {
    name: "HDFC CAF",
    logo: hdfc,
    link: "https://cams.co.in/2STkw8mk83s",
  },
  {
    name: "HSBC CAF",
    logo: hsbc,
    link: "https://cams.co.in/5qKPCpb0L5M",
  },


  {
    name: "Samco CAF",
    logo: samco,
    link: "https://www.samcomf.com/d/scheme/all/153155/E271894",
  },
//   {
//     name: "Nippon CAF",
//     link: "https://cams.co.in/72FhrtpEgpk",
//   },
  {
    name: "DSP CAF",
    logo: dsp,
    link: "https://cams.co.in/8DzPvehrfWe",
  },
  // Add more...
];

const offlineForms = [
  {
    name: "Axis CAF",
    logo: axis,
    file: "/forms/Axis_SIP.pdf", // Place in public/forms/
  },
  {
    name: "Trust CAF",
    logo: trust,
    file: "/forms/Trust.pdf", // Place in public/forms/
  },
  {
    name: "SBI CAF",
    logo:sbi,
    file: "/forms/SBI.pdf", // Place in public/forms/
  },
  {
    name: "Helios CAF",
    logo: helios,
    file: "/forms/Helios.pdf",
  },
  {
    name: "HDFC CAF",
    logo: hdfc,
    file: "/forms/HDFC.pdf",
  },
  {
    name: "LIC CAF",
    logo: licLogo,
    file: "/forms/LIC.pdf",
  },
  {
    name: "Bandhan CAF",
    logo: bandhan,
    file: "/forms/Bandhan.pdf",
  },
  // {
  //   name: "Helios CAF",
  //   file: "/forms/Helios.pdf",
  // },
  {
    name: "Bajaj Finserv CAF",
    logo: bajaj_finserv,
    file: "/forms/Bajaj-Finserv.pdf",
  },
  {
    name: "Canara-Robeco CAF",
    logo: canara,
    file: "/forms/Canara-Robeco.pdf",
  },
  {
    name: "DSP CAF",
    logo:dsp,
    file: "/forms/DSP.pdf",
  },
  {
    name: "Invesco CAF",
    logo: invesco,
    file: "/forms/Invesco.pdf",
  },
  {
    name: "HSBC CAF",
    logo: hsbc,
    file: "/forms/HSBC.pdf",
  },
  {
    name: "Mahindra Manulife CAF",
    logo: mahindra,
    file: "/forms/Mahindra-Manulife.pdf",
  },
  {
    name: "Motilal-Oswal CAF",
    logo: motilal,
    file: "/forms/Motilal-Oswal.pdf",
  },
  {
    name: "Navi CAF",
    logo:navi,
    file: "/forms/Navi.pdf",
  },
  {
    name: "Quant CAF",
    logo: quant,
    file: "/forms/Quant.pdf",
  },
  {
    name: "Nippon CAF",
    logo: nippon,
    file: "/forms/Nippon.pdf",
  },{
    name: "UTI CAF",
    logo: uti,
    file: "/forms/UTI.pdf",
  },{
    name: "Union CAF",
    logo: union,
    file: "/forms/Union.pdf",
  },{
    name: "Tata CAF",
    logo: tata,
    file: "/forms/tata.pdf",
  },{
    name: "Sundram CAF",
    logo: sundram,
    file: "/forms/Sundram.pdf",
  },{
    name: "Samco CAF",
    logo: samco,
    file: "/forms/Samco.pdf",
  },{
    name: "Investwell CAF",
    logo: investwell,
    file: "/forms/Investwell.pdf",
  },{
    name: "ITI CAF",
    logo: itiLogo,
    file: "/forms/ITI.pdf",
  },
  // Add more...
];



const MutualFundFormsPage = () => {
  const [showOnline, setShowOnline] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredOnline = onlineForms.filter((form) =>
    form.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredOffline = offlineForms.filter((form) =>
    form.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 via-white to-green-50 py-20 px-6">
  <div className="max-w-5xl mx-auto text-center lg:text-left">
    <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-800 mb-4">
      Common Application Forms
    </h1>
    <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto lg:mx-0">
      Instantly access Mutual Fund CAFs online or download offline forms—all in one place. Save time, stay organized, and invest confidently.
    </p>

    <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
      <button
        onClick={() => setShowOnline(true)}
        className={`px-6 py-3 rounded-md font-semibold transition shadow-sm ${
          showOnline
            ? "bg-blue-600 text-white"
            : "bg-gray-200 text-gray-700 hover:bg-blue-100"
        }`}
        aria-label="Show Online Forms"
      >
        Online Forms
      </button>

      <button
        onClick={() => setShowOnline(false)}
        className={`px-6 py-3 rounded-md font-semibold transition shadow-sm ${
          !showOnline
            ? "bg-blue-600 text-white"
            : "bg-gray-200 text-gray-700 hover:bg-blue-100"
        }`}
        aria-label="Show Offline Forms"
      >
        Offline Forms
      </button>
    </div>
  </div>
</section>


      {/* Search and List */}
      <div className="max-w-5xl mx-auto px-6 py-12">
  <input
    type="text"
    placeholder="Search for a CAF..."
    className="w-full px-4 py-3 mb-8 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
  />

  <div className="grid sm:grid-cols-2 gap-6">
    {(showOnline ? filteredOnline : filteredOffline).map((form, idx) => (
      <a
        key={idx}
        href={showOnline ? form.link : form.file}
        target={showOnline ? "_blank" : "_self"}
        rel="noopener noreferrer"
        download={!showOnline}
        className="bg-white border p-4 rounded-xl shadow hover:shadow-lg flex items-center gap-4 transition"
      >
        <img
          src={form.logo || "/logos/default.png"}
          alt={form.name}
          className="w-12 h-12 object-contain"
        />

        <div className="flex-1">
          <span className="block font-semibold text-gray-800">{form.name}</span>
        </div>

        {showOnline ? (
          <FaExternalLinkAlt className="text-blue-600 text-lg" />
        ) : (
          <FaDownload className="text-green-600 text-lg" />
        )}
      </a>
    ))}
  </div>

  {/* No Results */}
  {(showOnline ? filteredOnline.length === 0 : filteredOffline.length === 0) && (
    <p className="text-center text-gray-500 mt-10 text-lg">No forms found.</p>
  )}
</div>


    </div>
  );
};

export default MutualFundFormsPage;



