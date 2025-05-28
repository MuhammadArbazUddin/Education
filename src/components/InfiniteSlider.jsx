import React from "react";
import "./InfiniteSlider.css";
import slider1 from "../assets/sliderLogo/GE_vertical-1-1024x779.png";
import slider2 from "../assets/sliderLogo/logo_light.webp";
import slider3 from "../assets/sliderLogo/Untitled-design-2023-11-06T133839.479 (1).webp";
import slider4 from "../assets/sliderLogo/Viralish-Logo-Red-White.webp";
import slider5 from "../assets/sliderLogo/Untitled design (55).png";
import slider6 from "../assets/sliderLogo/download.png";
import slider7 from "../assets/sliderLogo/WhatsApp Image 2025-01-01 at 11.45.12 PM.jpeg";
import slider8 from "../assets/sliderLogo/download11.jpeg";

const sliderImages = [
  slider1,
  slider2,
  slider3,
  slider4,
  slider5,
  slider8,
  slider7,
  slider2,
  slider5,
  slider2,
  slider5,
  slider3,
];

const InfiniteSlider = () => {
  return (
    <div className="slider-container py-16 bg-gradient-to-b from-[#141412] to-[#1A1A19]">
      <div className="slider-track">
        {/* Map through images for the main slides */}
        {sliderImages.map((image, index) => (
          <div key={index} className="slide">
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
        {/* Duplicate images for seamless animation */}
        {sliderImages.map((image, index) => (
          <div key={`duplicate-${index}`} className="slide">
            <img src={image} alt={`Duplicate Slide ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteSlider;
