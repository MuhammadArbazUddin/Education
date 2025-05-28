import React, { useState, useEffect } from "react";
import "./CreativeWorks.css";

const images = [
  "https://cdn.prod.website-files.com/65744034b5c375447d87f3f5/6576dec4659c7fb855ccd821_project-1-p-500.jpg",
  "https://cdn.prod.website-files.com/65744034b5c375447d87f3f5/6576ded07bbbc892d4085890_project-2-p-500.jpg",
  "https://cdn.prod.website-files.com/65744034b5c375447d87f3f5/6576e17a7f4a5d769e79d7f9_project-3-p-500.jpg",
  "https://cdn.prod.website-files.com/65744034b5c375447d87f3f5/6576e189ee923da56b425927_project-4-p-500.jpg",
  "https://cdn.prod.website-files.com/65744034b5c375447d87f3f5/657bf60f1f95ed6de72e4547_project-5-p-500.jpg",
  "https://cdn.prod.website-files.com/65744034b5c375447d87f3f5/657bf61a9dfbe810a8cb59c4_project-6-p-500.jpg",
];

const CreativeWorks = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // Start at the first "real" slide
  const totalSlides = images.length;
  const [isLgScreen, setIsLgScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLgScreen(window.innerWidth >= 1024); // Tailwind's lg breakpoint is 1024px
    };

    handleResize(); // Initialize state on component mount
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 2000); // Slide change every 2 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleTransitionEnd = () => {
    if (currentIndex === 0) {
      setCurrentIndex(totalSlides);
    } else if (currentIndex === totalSlides + 1) {
      setCurrentIndex(1);
    }
  };

  const getSlides = () => {
    return [
      images[images.length - 1], // Clone last slide to the start
      ...images, // Original slides
      images[0], // Clone first slide to the end
    ];
  };

  const slides = getSlides();

  return (
    <div
      id="work"
      className="py-8"
      style={{
        boxShadow: "inset 0 -300px 180px #1a1a19, inset 0 300px 130px #1a1a19",
        backgroundImage:
          "url('https://cdn.prod.website-files.com/66964d12f0212962622e6bd4/669770eddbcf5f504ef99354_hero-01.jpg')",
      }}
    >
      <div className="text-white text-center w-full pb-14 px-5 pt-8 ">
        <p className="pb-3 flex items-center justify-center gap-3 text-base uppercase">
          We Are Proud of Our
        </p>
        <h1 className="text-5xl font-bold capitalize">Creative works</h1>
      </div>
      <div className="flex items-center justify-center w-full container mx-auto pb-8">
        {/* Carousel */}
        <div className="relative flex overflow-hidden w-full lg:w-[900px] h-[60vh] lg:h-[100vh] lg:pl-32">
          <div
            className="flex items-center transition-transform duration-[1000ms] ease-in-out"
            style={{
              transform: `translateX(-${
                currentIndex * (isLgScreen ? 458 : 390)
              }px)`,
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {slides.map((src, index) => (
              <div
                key={index}
                className={`max-lg:w-screen h-full px-3 lg:pr-52 flex-shrink-0 flex items-center justify-center transition-transform duration-[1600ms] ${
                  currentIndex === index ? "lg:scale-150" : "lg:scale-100"
                }`}
              >
                <div
                  className={`w-full h-full lg:w-[250px] lg:h-[70vh] p-6 lg:p-8 bg-white ${
                    currentIndex === index && "bg-custom-hover"
                  } rounded-3xl overflow-hidden transition-all duration-500 ease-in-out`}
                >
                  <div className="overflow-hidden w-full h-full rounded-3xl">
                    <img
                      src={src}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-110 hover:-rotate-3 transition-transform duration-500 ease-in-out"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreativeWorks;
