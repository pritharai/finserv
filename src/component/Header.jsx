import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import coins from "../assets/4.jpg";
import coins2 from "../assets/couple2.jpg"; 
import coins3 from "../assets/family.jpg";
import { useNavigate } from "react-router-dom";

const images = [coins, coins2, coins3];

const Header = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goNext = () => setCurrent((prev) => (prev + 1) % images.length);
  const goPrev = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative h-120 w-full overflow-hidden rounded-md">
      {/* Image Carousel */}
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Slide ${index}`}
          className={`absolute top-0 left-0 w-full h-120 object-cover transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gray-800 opacity-70 z-20" />

      {/* Text Content */}
      <div className="absolute inset-0 z-30 flex flex-col justify-center items-start mx-16 py-8 text-white">
        <h1 className="text-7xl font-bold mb-4 px-5">VSP FinsServ</h1>
        <p className="text-2xl mb-6 max-w-[500px] px-5">
          Empowering your financial future with trust and transparency.
        </p>
        <div className="flex space-x-4 px-5">
          <Button variant="contained" color="primary" sx={{ mr: 2 }} 
          onClick={() => navigate("/contact")}>
            Contact Us
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            sx={{ borderColor: "white", color: "white" }}
            onClick={() => navigate("/partners")}
          >
            Our Partners
          </Button>
        </div>
      </div>

      {/* Prev/Next Controls */}
      <button
        onClick={goPrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 z-40 text-white text-3xl font-bold"
      >
        ⟨
      </button>
      <button
        onClick={goNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 z-40 text-white text-3xl font-bold"
      >
        ⟩
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-40">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`w-3 h-3 rounded-full ${
              idx === current ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Header