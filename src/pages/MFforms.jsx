import React, {useState} from "react";
import { FaDownload, FaExternalLinkAlt } from "react-icons/fa";

const onlineForms = [
  {
    name: "SBI CAF",
    link: "https://www.sbimf.com/en-us/investor-center",
  },
  {
    name: "HDFC CAF",
    link: "https://cams.co.in/2STkw8mk83s",
  },
  {
    name: "TATA CAF",
    link: "https://cams.co.in/72FhrtpEgpk",
  },
  // Add more...
];

const offlineForms = [
  {
    name: "Axis CAF",
    file: "/forms/Axis_SIP.pdf", // Place in public/forms/
  },
  {
    name: "Trust CAF",
    file: "/forms/Trust.pdf", // Place in public/forms/
  },
  {
    name: "SBI CAF",
    file: "/forms/SBI.pdf", // Place in public/forms/
  },
  {
    name: "Helios CAF",
    file: "/forms/Helios.pdf",
  },
  {
    name: "HDFC CAF",
    file: "/forms/HDFC.pdf",
  },
  {
    name: "LIC CAF",
    file: "/forms/LIC.pdf",
  },
  {
    name: "Bandhan CAF",
    file: "/forms/Bandhan.pdf",
  },
  {
    name: "Helios CAF",
    file: "/forms/Helios.pdf",
  },
  {
    name: "Bajaj Finserv CAF",
    file: "/forms/Bajaj-Finser.pdf",
  },
  {
    name: "Canara-Robeco CAF",
    file: "/forms/Canara-Robeco.pdf",
  },
  {
    name: "DSP CAF",
    file: "/forms/DSP.pdf",
  },
  {
    name: "Invesco CAF",
    file: "/forms/Invesco.pdf",
  },
  {
    name: "HSBC CAF",
    file: "/forms/HSBC.pdf",
  },
  {
    name: "Mahindra Manulife CAF",
    file: "/forms/Mahindra-Manulife.pdf",
  },
  {
    name: "Motilal-Oswal CAF",
    file: "/forms/Motilal-Oswal.pdf",
  },
  {
    name: "Navi CAF",
    file: "/forms/Navi.pdf",
  },
  {
    name: "Quant CAF",
    file: "/forms/Quant.pdf",
  },
  {
    name: "Nippon CAF",
    file: "/forms/Nippon.pdf",
  },{
    name: "UTI CAF",
    file: "/forms/UTI.pdf",
  },{
    name: "Union CAF",
    file: "/forms/Union.pdf",
  },{
    name: "Tata CAF",
    file: "/forms/tata.pdf",
  },{
    name: "Sundram CAF",
    file: "/forms/Sundram.pdf",
  },{
    name: "Samco CAF",
    file: "/forms/Samco.pdf",
  },{
    name: "Investwell CAF",
    file: "/forms/Investwell.pdf",
  },{
    name: "ITI CAF",
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
    <div className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Common Application Forms
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Search and access forms to invest in Mutual Funds & other investment plans—both online and offline.
        </p>

        {/* Search + Toggle */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          <input
            type="text"
            placeholder="Search for a CAF..."
            className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <div className="flex space-x-2">
            <button
              onClick={() => setShowOnline(true)}
              className={`px-4 py-2 rounded-md font-semibold ${
                showOnline ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
              }`}
            >
              Online Forms
            </button>
            <button
              onClick={() => setShowOnline(false)}
              className={`px-4 py-2 rounded-md font-semibold ${
                !showOnline ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
              }`}
            >
              Offline Forms
            </button>
          </div>
        </div>

        {/* Forms List */}
        <div className="grid sm:grid-cols-2 gap-4">
          {showOnline
            ? filteredOnline.map((form, idx) => (
                <a
                  key={idx}
                  href={form.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white border p-4 rounded-md shadow hover:shadow-md flex justify-between items-center transition"
                >
                  <span className="font-medium text-gray-800">{form.name}</span>
                  <FaExternalLinkAlt className="text-blue-600" />
                </a>
              ))
            : filteredOffline.map((form, idx) => (
                <a
                  key={idx}
                  href={form.file}
                  download
                  className="bg-white border p-4 rounded-md shadow hover:shadow-md flex justify-between items-center transition"
                >
                  <span className="font-medium text-gray-800">{form.name}</span>
                  <FaDownload className="text-green-600" />
                </a>
              ))}
        </div>

        {/* No results */}
        {(showOnline ? filteredOnline.length === 0 : filteredOffline.length === 0) && (
          <p className="text-center text-gray-500 mt-6">No forms found.</p>
        )}
      </div>
    </div>
  );
};

export default MutualFundFormsPage;
