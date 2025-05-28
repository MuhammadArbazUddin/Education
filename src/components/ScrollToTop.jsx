import React, { useState, useEffect } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Handle scroll visibility
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      <button
        onClick={scrollToTop}
        className={` p-[2px] fixed bottom-4 right-4 rounded-md ${
          isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={{
          background:
            "linear-gradient(160deg, #C98D38, #994E1B 22%, #fff694 52%, #2E3832 83%)",
        }}
      >
        <span
          className="block bg-[#1B1B1A] p-3 rounded-md hover:bg-transparent transition-all duration-300"
          style={{
            backgroundClip: "padding-box",
          }}
        >
          <FaAngleDoubleUp />
        </span>
      </button>
    </>
  );
};

export default ScrollToTop;
