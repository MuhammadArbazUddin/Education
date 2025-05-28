import React from "react";

const Hero = () => {
  return (
    <div
      id="home"
      className="relative p-4 sm:pt-32 sm:p-8 h-[500px] sm:h-screen flex flex-col justify-center"
    >
      {/* Background Layer */}

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          boxShadow:
            "inset 0 -100px 180px #1a1a19, inset 0 300px 130px #1a1a19",

          backgroundImage:
            "url('https://png.pngtree.com/thumb_back/fh260/background/20230703/pngtree-d-rendered-image-of-black-mortarboard-hat-resting-on-opened-book-image_3737422.jpg')",
        }}
      ></div>

      {/* Content Layer */}
      <div className="relative z-10">
        {/* Top Section */}
        <div className="sm:px-[3rem] flex flex-col lg:flex-row items-start gap-8 lg:gap-[10rem] justify-between">
          <div className="text-2xl sm:text-4xl lg:text-5xl font-semibold sm:text-center lg:text-left">
            Optimize and monetize social media marketing
          </div>
          <div className="text-sm sm:text-base lg:text-md sm:text-center lg:text-left">
            edua boosts creators' reach with curated content and
            tailored social media strategies for targeted audience growth.
          </div>
        </div>
        {/* Bottom Section */}
        <div
          className="mt-8 pb-8 sm:pb-16 lg:mt-16 text-[3.3rem] sm:text-8xl lg:text-[12rem] font-bold sm:text-center text-transparent bg-clip-text"
          style={{
            backgroundImage:
              "linear-gradient(160deg, #C98D38, #994E1B 22%, #fff694 52%, #2E3832 83%)",
          }}
        >
          Education
        </div>
        <div className="flex justify-center items-center ">
          {/* <button
            className=" relative p-[2px] rounded-md"
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
              Request A Quote{" "}
            </span>
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
