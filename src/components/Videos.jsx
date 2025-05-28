import React from "react";

const Videos = () => {
  return (
    <>
      <section id="about" className="sm:px-10  py-[6rem] bg-[#1A1A19]">
        <h1 className="text-center text-2xl font-bold mb-8">About Us</h1>
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch ">
          {/* Left Section */}
          <div className="lg:w-1/4 p-4">
            <div className="flex flex-col items-center gap-8 sm:gap-32">
              <img
                className="rounded-lg w-full max-w-xs opacity-50"
                src="https://cdn.prod.website-files.com/66964d12f0212962622e6bd4/6697a2a1a3fd1bd464960103_about-01.jpg"
                alt=""
              />
              <p className="text-[#aca0cf] text-sm sm:text-lg text-center lg:text-left">
                Sociallywiredinc is a group of dedicated and innovative social
                media management experts that works with various content
                creators to help them raise the scope and reach of their
                platforms through curated, engaging content and optimized media
                marketing strategies. We owe our success to our ability to use
                ever-evolving approaches to create personalized game plans for
                each client and their target demographic.
              </p>
            </div>
          </div>
          {/* Middle Section */}
          <div className="lg:w-1/2 p-10">
            <h1 className="text-[#f3efff] text-3xl sm:text-5xl lg:text-[7rem] font-bold text-center px-4">
              Amplify Optimize Monetize Your Social <br />
               Platforms
            </h1>
          </div>
          {/* Right Section */}
          <div className="lg:w-1/4 p-4">
            <div className="flex flex-col items-center gap-8 sm:gap-[10rem]">
              <div className="flex flex-col items-start gap-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center">
                  500+
                </h1>
                <h1 className="text-sm sm:text-base font-base text-[#aca0cf]">
                  Successful events planned
                </h1>
              </div>
              <img
                className="rounded-lg w-full max-w-xs opacity-50"
                src="https://cdn.prod.website-files.com/66964d12f0212962622e6bd4/6697a2a1032bbe36fa1d3e64_about-02.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Videos;
