import React from "react";
import Navbar from "../Navbar";
import fluidglu from "../assets/FeaturedCompany-logo/fluid-glu.svg";
import hikkeno from "../assets/FeaturedCompany-logo/hikkeno.svg";
import bubble from "../assets/FeaturedCompany-logo/bubble.svg";
import star from "../assets/star.svg";
import highlight from "../assets/sparkle.svg";

function HeroSection() {
  // Define your text variables
  const heroTagline = "PRODUCTIVITY";
  const heroHeadlineText = "Tips and Strategies to Get More Done in Less Time";
  const featuredheroHeadlineText = "Featured and Seen in";
  const heroButtonText = "Join waitlist";
  const featuredCompaniesImages = [
    {
      id: 1,
      image: fluidglu,
      alt: "Fluidglu",
    },
    {
      id: 2,
      image: hikkeno,
      alt: "Hikkeno",
    },
    {
      id: 3,
      image: bubble,
      alt: "Bubble",
    },
  ];

  return (
    <div className="hero bg-[#000000] h-full">
      <div className="hero-section">
        <Navbar />
        <div className="py-10 px-2 md:py-14 md:px-10 lg:p-14">
          <div className="outer-container max-w-6xl mx-auto relative py-5 md:py-7 lg:py-10">
            <div className="absolute -top-14 -left-9 lg:-top-20 lg:-left-20">
              <img src={star} alt="left-corner-star" />
            </div>
            <div className="absolute -top-8 -right-2 md:-top-7 md:-right-8  -z-10 lg:-top-14 lg:-right-14">
              <img
                className="h-10 w-10 lg:h-full lg:w-full"
                src={highlight}
                alt="right-corner-highlight"
              />
            </div>
            <div className="inner-container relative px-5 md:px-14 lg:px-20 mx-5 md:mx-7 lg:mx-10">
              <div className="hero-content">
                <div className="flex items-center justify-center pt-8 pb-3.5 lg:pt-[84px] lg:pb-5">
                  <div className="flex items-center text-[10px] lg:text-xs justify-center rounded-full bg-[#D3E763] text-black border border-[#506F6F] py-[3px] px-2 lg:px-4 lg:py-1.5 font-semibold">
                    <span>{heroTagline}</span>
                  </div>
                </div>
                <div className="hero-content-inner max-w-6xl mx-auto ">
                  <h2 className="text-3xl md:text-4xl md:leading-[1.4] lg:text-7xl text-white text-center lg:leading-[1.3]">
                    {heroHeadlineText}
                  </h2>
                  <div className="flex items-center justify-center py-10 lg:py-14 lg:pb-28">
                    <a
                      href="#"
                      className="flex items-center lg:text-2xl justify-center rounded-full cursor-pointer bg-white text-black border border-[#506F6F] px-5 lg:px-14 py-1 lg:py-3 font-semibold hover:shadow-lg hover:drop-shadow-lg hover:shadow-black transition duration-200"
                    >
                      <span>{heroButtonText}</span>
                    </a>
                  </div>
                </div>
                <div className="max-w-3xl mx-auto">
                  <hr className="border-b border-[#808080]/10 h-0" />
                </div>
                <div className="hero-featued-content max-w-5xl mx-auto pt-10 pb-5 lg:py-14 lg:pt-24">
                  <h2 className="text-xl md:text-2xl lg:text-[34px] text-white text-center">
                    {featuredheroHeadlineText}
                  </h2>
                  <div className="flex items-center justify-center lg:justify-between gap-x-3 md:gap-x-5 py-8 lg:py-[3.2rem] lg:px-10">
                    {featuredCompaniesImages.map((company) => (
                      <div className="featured-company-logo" key={company.id}>
                        <img
                          className="px-5 py-2.5 md:h-auto md:w-36 lg:h-full lg:w-full"
                          src={company.image}
                          alt={company.alt}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
