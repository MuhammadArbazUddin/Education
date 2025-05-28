import React, { useEffect, useState } from "react";
import snapchat from "../assets/snp.png";
import youtube from "../assets/youtube.png";
import meta from "../assets/meta.png";
import tiktok from "../assets/tiktok.png";

const CardVerticalSlider = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const element = document.getElementById("card-slider");
      if (element) {
        const rect = element.getBoundingClientRect();
        const offsetTop = rect.top + window.scrollY;
        if (scrollY >= offsetTop && scrollY <= offsetTop + rect.height) {
          setScrollPosition(scrollY - offsetTop);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const cards = [
    {
      id: 1,
      title: "01",
      heading: "SNAPCHAT",
      description:
        "We collaborate closely with Snap to identify and pitch top-tier talent for Discover Shows. Once approved, we manage the entire process of running the show optimally, including re-editing and optimizing your existing (YouTube) content, conducting A/B tests on thumbnails, and analyzing performance data. This service requires no additional work from you, and you retain 100% ownership of the channel we help establish.",
      imageUrl: snapchat,
      color: "#000",
      TextColor: "black",
    },
    {
      id: 2,
      title: "02",
      heading: "META",
      description:
        "@DV-LLC, we recognize the importance of tailoring content for each platform to maximize results. We unlock new revenue streams by adapting your content specifically for Facebook's unique environment. Your short-form content holds significant value on Facebook Reels and other lesser-known bonus features, which we leverage to your advantage.",
      imageUrl: meta,
      color: "#3C6BFF",
      TextColor: "#3C6BFF",
    },
    {
      id: 3,
      title: "03",
      heading: "TIKTOK",
      description:
        "Short-form content is here to stay, but monetizing it can be challenging. At Daily Vertex LLC, we help you localize and monetize your short-form content by repurposing it for YouTube Shorts, Snap, and Facebook Reels, turning your passion into a profitable venture.",
      imageUrl: tiktok,
      color: "#E62E4F",
      TextColor: "#E62E4F",
    },
    {
      id: 4,
      title: "04",
      heading: "YOUTUBE",
      description:
        "Daily Vertex LLC offers specialized YouTube Shorts Management services. Our expert team excels in transforming your existing content into engaging short-form videos tailored for YouTube Shorts. Leveraging our extensive knowledge and skills, we craft captivating Shorts optimized for the platform's unique format. With our proven track record of generating millions of views, we can elevate your brand's presence on YouTube Shorts, expanding your reach and enhancing your online visibility.",
      imageUrl: youtube,
      color: "red",
      TextColor: "red",
    },
  ];

  return (
    <>
      <div className="py-10 bg-[#1A1A19]">
        <h1 className="text-6xl font-bold text-center p-4 mb-8">Services</h1>
        <div className="mx-auto">
          <div
            id="card-slider"
            className="max-w-7xl mx-8 relative "
            style={{ height: "320vh" }}
          >
            {cards.map((card, index) => {
              // Calculate scale and opacity
              const cardOffset = index * 500; // Adjust based on spacing
              const distance = Math.abs(scrollPosition - cardOffset);
              {
                /* const opacity = Math.max(0.1, 1 - distance / 700); */
              }
              const scale = Math.max(0.1, 1 - distance / 1000); // Scale down when farther

              return (
                <div
                  key={card.id}
                  className="bg-cover bg-center p-5 md:p-10 h-[550px] mb-[-35px] transition-all duration-500 origin-center flex flex-col items-center justify-center rounded-3xl border-4"
                  style={{
                    backgroundImage: `url('${card.imageUrl}')`,
                    position: "sticky",
                    top: "20%",
                    zIndex: 1,
                    // opacity,
                    transform: `scale(${scale})`,
                    transition: "all 0.5s ease-out",
                    borderColor: card.color, // Apply border color
                  }}
                >
                  <div
                    className="absolute rounded-t-2xl top-0 w-full h-[15%] flex items-center justify-center"
                    style={{ backgroundColor: card.color }}
                  >
                    <h1 className="text-lg md:text-2xl font-bold">
                      {card.heading}
                    </h1>
                    {/* <img src={card.heading} alt="" className="w-32" /> */}
                  </div>
                  {/* Content Section */}
                  <div className="flex flex-col items-center justify-center flex-grow">
                    <p
                      style={{
                        color: card.TextColor,
                      }}
                      className="bg-white rounded-2xl p-2 text-sm md:text-2xl mt-20 italic leading-relaxed mb-8 max-w-2xl text-center"
                    >
                      {card.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardVerticalSlider;
