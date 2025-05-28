import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../assets/logo/512x512.png";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const dropdownRef = useRef(null);

  const handleClick = () => {
    setMenu(!menu);
  };

  const handleItemClick = () => {
    setMenu(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="z-20 sm:absolute top-0 left-0 w-full">
      <div className="hidden px-[5rem] sm:flex flex-wrap p-5 flex-col md:flex-row items-center pb-16">
        <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
          <a href="#services" className="mr-5 cursor-pointer font-semibold">
            Services
          </a>
          <a href="#work" className="mr-5 cursor-pointer font-semibold">
            Work
          </a>
          <a href="#about" className="mr-5 cursor-pointer font-semibold">
            About
          </a>
        </nav>

        <a
          href="/"
          className="flex cursor-pointer order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0"
        >
          <span className="w-32 rounded-full">
            <img src="https://laureate.org.uk/public/uploads/main/files/09-04-2025/litalogo.png.webp" alt="" />{" "}
          </span>
        </a>

        <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
          <a
            href="#contact-us"
            className="relative p-[2px] rounded-md"
            style={{
              background:
                "linear-gradient(160deg, #C98D38, #994E1B 22%, #fff694 52%, #2E3832 83%)",
            }}
          >
            <span
              className="block bg-[#1B1B1A] px-4 py-2 rounded-md hover:bg-transparent transition-all duration-300"
              style={{
                backgroundClip: "padding-box",
              }}
            >
              Contact Us
            </span>
          </a>
        </div>
      </div>
      <div className="p-5 flex sm:hidden items-center justify-between">
        <div>
          <a
            href="/"
            className="flex cursor-pointer  title-font font-medium items-center text-gray-900 "
          >
            <span className="w-16 rounded-full">
              <img src={logo} alt="" />{" "}
            </span>
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="#contact-us"
            className="relative p-[2px] rounded-md"
            style={{
              background:
                "linear-gradient(160deg, #C98D38, #994E1B 22%, #fff694 52%, #2E3832 83%)",
            }}
          >
            <span
              className="block bg-[#1B1B1A] px-4 py-2 rounded-md hover:bg-transparent transition-all duration-300"
              style={{
                backgroundClip: "padding-box",
              }}
            >
              Contact Us
            </span>
          </a>
          <div
            onClick={handleClick}
            className="bg-[#7959DA] p-4 rounded-full cursor-pointer hover:bg-[#ACA0CF]"
          >
            <GiHamburgerMenu />
          </div>
        </div>
        {menu && (
          <div
            ref={dropdownRef}
            className="absolute w-[300px] top-[6rem] right-10 bg-[#362C52] border border-[#7959DA] rounded-2xl p-4 z-50"
          >
            <ul className="cursor-pointer flex flex-col">
              <a href="#services" onClick={handleItemClick} className="mb-2">
                Services
              </a>
              <a href="#work" onClick={handleItemClick} className="mb-2">
                Work
              </a>
              <a href="#about" onClick={handleItemClick}>
                About
              </a>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
