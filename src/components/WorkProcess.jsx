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
        <h1 className="text-5xl font-bold capitalize">Our Educational Services</h1>
      </div>

      <section
        ref={targetRef}
        className="relative h-[240vh] lg:h-[200vh] w-full lg:w-2/3 max-lg:px-6"
      >
        <div className="lg:sticky top-0 lg:flex h-screen items-center lg:overflow-hidden">
          <motion.div
            style={{
              x: window.innerWidth >= 1024 ? x : "0%",
            }}
            className="flex flex-col lg:flex-row scroll-smooth"
          >
            <div className="lg:h-screen flex flex-col justify-between text-white w-full lg:w-[66vw]">
              <div className="max-lg:pb-11 lg:w-1/2 lg:h-1/2 flex flex-col justify-start items-start gap-6">
                <div className="relative pl-7">
                  <p
                    className="text-end text-clip bg-clip-text text-transparent font-extrabold text-9xl"
                    style={{
                      backgroundImage:
                        "linear-gradient(160deg, #C98D38, #994E1B 22%, #fff694 52%, #2E3832 83%)",
                    }}
                  >
                    01
                  </p>
                  <p className="text-white text-2xl font-bold absolute left-0 bottom-2 p-1 bg-[#20201b]">
                    Course 
                  </p>
                </div>
                <p className="text-[#aca0cf] text-lg">
                  We collaborate with educators and institutions to design engaging,
                  outcome-driven courses. Our instructional designers align content
                  with learning objectives using multimedia, assessments, and
                  interactive strategies.
                </p>
              </div>

              <hr className="hidden lg:block" />

              <div className="max-lg:pb-11 lg:w-1/2 lg:h-1/2 self-end flex flex-col justify-end items-start lg:items-end">
                <div className="relative pl-7 self-start">
                  <p
                    className="text-end text-clip bg-clip-text text-transparent font-extrabold text-9xl"
                    style={{
                      backgroundImage:
                        "linear-gradient(160deg, #C98D38, #994E1B 22%, #fff694 52%, #2E3832 83%)",
                    }}
                  >
                    02
                  </p>
                  <p className="text-white text-2xl font-bold absolute left-0 bottom-2 p-1 bg-[#20201b]">
                    Virtual 
                  </p>
                </div>
                <p className="text-[#aca0cf] text-lg">
                  We build and manage virtual learning environments with live
                  classes, recorded lectures, and collaborative tools to foster
                  student engagement and academic success.
                </p>
              </div>
            </div>

            <div className="lg:h-screen flex flex-col justify-between max-lg:items-center text-white w-full lg:w-[65vw]">
              <div className="max-lg:pb-11 w-full lg:w-1/2 lg:h-1/2 flex flex-col justify-start items-start gap-6">
                <div className="relative pl-7">
                  <p
                    className="text-end text-clip bg-clip-text text-transparent font-extrabold text-9xl"
                    style={{
                      backgroundImage:
                        "linear-gradient(160deg, #C98D38, #994E1B 22%, #fff694 52%, #2E3832 83%)",
                    }}
                  >
                    03
                  </p>
                  <p className="text-white text-2xl font-bold absolute left-0 bottom-2 p-1 bg-[#20201b]">
                     Mentorship
                  </p>
                </div>
                <p className="text-[#aca0cf] text-lg">
                  From career guidance to exam preparation, our expert mentors
                  offer tailored academic support to help learners unlock their full
                  potential across all grade levels and disciplines.
                </p>
              </div>

              <hr className="hidden lg:block" />

              <div className="w-full lg:w-1/2 lg:h-1/2 flex flex-col self-end justify-end items-start lg:items-end">
                <div className="relative pl-7">
                  <p
                    className="text-clip bg-clip-text text-transparent font-extrabold text-9xl"
                    style={{
                      backgroundImage:
                        "linear-gradient(160deg, #C98D38, #994E1B 22%, #fff694 52%, #2E3832 83%)",
                    }}
                  >
                    04
                  </p>
                  <p className="text-white text-2xl font-bold absolute left-0 bottom-2 p-1 bg-[#20201b]">
                     Literacy
                  </p>
                </div>
                <p className="text-[#aca0cf] text-lg">
                  We empower students and teachers with essential digital skills —
                  from using learning platforms to developing research, coding, and
                  online safety competencies in today’s education landscape.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
