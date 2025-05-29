import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

const ScrollPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [hasLeftBottom, setHasLeftBottom] = useState(true); // ✅ New flag
  const [course, setCourse] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.scrollHeight;

      const atBottom = scrollTop + windowHeight >= fullHeight - 10;

      if (atBottom && hasLeftBottom) {
        setShowPopup(true);
        setHasLeftBottom(false); // ✅ Prevent showing again until they scroll up
      } else if (!atBottom) {
        setHasLeftBottom(true); // ✅ Reset when they scroll up
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasLeftBottom]);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <AnimatePresence>
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-2xl bg-white shadow-2xl rounded-2xl p-6 relative mx-4"
          >
            <div className="absolute top-4 right-4">
              <button className="text-black" onClick={closePopup}>
                X
              </button>
            </div>

            <div className="flex flex-col items-center">
              <div className="text-4xl flex justify-center items-center mb-4 rounded-full bg-black p-4 w-[70px] h-[70px]">
                <FaPaperPlane className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">
                Send Us an Inquiry
              </h3>

              <form className="w-full space-y-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First name*"
                    className="w-full md:w-1/2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    className="w-full md:w-1/2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>

                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />

                <select
                  name="course"
                  required
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  className="w-full p-3 border rounded-md text-black bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                >
                  <option className="text-black" value="" hidden>
                    Select a Course*
                  </option>
                  <option className="text-black" value="web-development">
                    Web Development
                  </option>
                  <option className="text-black" value="graphic-design">
                    Graphic Design
                  </option>
                  <option className="text-black" value="digital-marketing">
                    Digital Marketing
                  </option>
                  <option className="text-black" value="data-science">
                    Data Science
                  </option>
                  <option className="text-black" value="business-management">
                    Business Management
                  </option>
                </select>

                <textarea
                  name="message"
                  rows="4"
                  placeholder="Tell us why you're interested in this course or ask any questions"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                ></textarea>

                <button
                  type="submit"
                  className="relative p-[2px] rounded-md w-full"
                  style={{
                    background:
                      "linear-gradient(160deg, #C98D38, #994E1B 22%, #fff694 52%, #2E3832 83%)",
                  }}
                >
                  <span className="block text-white font-semibold bg-[#1B1B1A] hover:bg-transparent transition-all duration-300 px-4 py-3 rounded-md w-full text-center">
                    Submit
                  </span>
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ScrollPopup;
