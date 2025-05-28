import React, { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

export default function WorkProcess() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 0.8], ["0%", "-50%"]);
  return (
    <div
      id="services"
      className="pt-20 flex flex-col lg:flex-row items-start justify-center bg-[#141412]"
    >
      <div className="text-white text-center w-full lg:w-1/3 pb-14 py-10 px-6 lg:sticky top-0">
        <h1 className="text-5xl font-bold capitalize">Services</h1>
      </div>
      <section
        ref={targetRef}
        className="relative h-[240vh] lg:h-[200vh] w-full lg:w-2/3 max-lg:px-6 "
      >
        <div className="lg:sticky top-0 lg:flex  h-screen items-center lg:overflow-hidden">
          <motion.div
            style={{
              x: window.innerWidth >= 1024 ? x : "0%",
            }}
            className="flex flex-col lg:flex-row scroll-smooth "
          >
            <div className=" lg:h-screen   flex flex-col justify-between text-white w-full lg:w-[66vw]  ">
              <div className=" max-lg:pb-11 lg:w-1/2 lg:h-1/2 flex flex-col justify-start items-start  gap-6 ">
                <div className="relative pl-7">
                  <p
                    className=" text-end text-clip bg-clip-text text-transparent font-extrabold text-9xl "
                    style={{
                      backgroundImage:
                        "linear-gradient(160deg, #a388f5,#6ae8ff 22%, #fff694 52%, #fc67ff 83%)",
                    }}
                  >
                    01
                  </p>
                  <p className="text-white text-2xl font-bold absolute left-0 bottom-2 p-1 bg-[#20201b]">
                    SNAPCHAT
                  </p>
                </div>
                <p className=" text-[#aca0cf] text-lg">
                  Sociallywired collaborates with Snap to source and secure
                  top-tier talent for Discover Shows. Once approved, we manage
                  the entire process, including re-editing and optimizing
                  YouTube content, conducting A/B testing on thumbnails, and
                  analyzing performance data to drive exceptional outcomes.
                </p>
              </div>
              <hr className="hidden lg:block" />
              <div className="max-lg:pb-11 lg:w-1/2 lg:h-1/2 self-end flex flex-col justify-end items-start lg:items-end">
                <div className="relative pl-7 self-start">
                  <p
                    className=" text-end text-clip bg-clip-text text-transparent font-extrabold text-9xl "
                    style={{
                      backgroundImage:
                        "linear-gradient(160deg, #a388f5,#6ae8ff 22%, #fff694 52%, #fc67ff 83%)",
                    }}
                  >
                    02
                  </p>
                  <p className="text-white text-2xl font-bold absolute left-0 bottom-2 p-1 bg-[#20201b]">
                    META
                  </p>
                </div>
                <p className=" text-[#aca0cf] text-lg">
                  At @SWinc, we understand the power of platform-specific
                  content to achieve maximum impact. We unlock new revenue
                  opportunities by tailoring your content for Facebook’s unique
                  ecosystem. From short-form content on Facebook Reels to
                  leveraging lesser-known bonus features, we ensure your content
                  thrives and delivers exceptional results.
                </p>
              </div>
            </div>

            <div className=" lg:h-screen  flex flex-col justify-between max-lg:items-center text-white w-full lg:w-[65vw]   ">
              <div className="max-lg:pb-11 w-full lg:w-1/2 lg:h-1/2 flex flex-col justify-start items-start  gap-6 ">
                <div className="relative pl-7">
                  <p
                    className=" text-end text-clip bg-clip-text text-transparent font-extrabold text-9xl "
                    style={{
                      backgroundImage:
                        "linear-gradient(160deg, #a388f5,#6ae8ff 22%, #fff694 52%, #fc67ff 83%)",
                    }}
                  >
                    03
                  </p>
                  <p className="text-white text-2xl font-bold absolute left-0 bottom-2 p-1 bg-[#20201b]">
                    TIKTOK
                  </p>
                </div>
                <p className=" text-[#aca0cf] text-lg">
                  Short-form content is here to stay, but monetizing it can be a
                  challenge. At Sociallywired, we specialize in localizing and
                  repurposing your short-form content for platforms like YouTube
                  Shorts, Snap, and Facebook Reels, transforming your passion
                  into a profitable venture.
                </p>
              </div>
              <hr className="hidden lg:block" />
              <div className="w-full lg:w-1/2 lg:h-1/2 flex flex-col self-end justify-end items-start lg:items-end">
                <div className="relative pl-7 slg:elf-start">
                  <p
                    className="  text-clip bg-clip-text text-transparent font-extrabold text-9xl "
                    style={{
                      backgroundImage:
                        "linear-gradient(160deg, #a388f5,#6ae8ff 22%, #fff694 52%, #fc67ff 83%)",
                    }}
                  >
                    04
                  </p>
                  <p className="text-white text-2xl font-bold absolute left-0 bottom-2 p-1 bg-[#20201b]">
                    YOUTUBE
                  </p>
                </div>
                <p className=" text-[#aca0cf] text-lg">
                  Sociallywired offers expert YouTube Shorts Management
                  services, transforming your existing content into engaging
                  short-form videos tailored for YouTube Shorts. With our
                  in-depth knowledge and expertise, we create captivating Shorts
                  optimized for the platform's unique format, driving millions
                  of views and maximizing your reach.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
