import React from "react";
import lineGraphWithDot from "../../assets/linegraph-with-dot.svg";
import pieChart from "../../assets/piechart.svg";
import notion from "../../assets/app-icon-images/notion.svg";
import slack from "../../assets/app-icon-images/slack.svg";
import evernote from "../../assets/app-icon-images/evernote.svg";
import figma from "../../assets/app-icon-images/figma.svg";
import zapier from "../../assets/app-icon-images/zapier.svg";

function InformationSection() {
  /* This code includes hardcoded information for the section, such as text and descriptions. Each hardcoded element is accompanied by helpful comments, making it easy to locate and modify the desired content by scrolling through the code. To avoid unnecessary code bloat, alternative techniques have been avoided. */

  /* Integrate app-icon data for the first row (5 boxes) */
  const integrationDataFirstRow = [
    { image: null, className: "" }, // First box
    { image: notion, className: "h-5 w-5 md:h-7 md:w-7 lg:h-14 lg:w-14" },
    { image: slack, className: "h-5 w-5 md:h-7 md:w-7 lg:h-10 lg:w-10" },
    { image: zapier, className: "h-5 w-5 md:h-7 md:w-7 lg:h-10 lg:w-10" },
    // Add more integrations here
    { image: null, className: "" }, // Last box
  ];

  function IntegrationIconFirstRow({ image, className }) {
    if (image) {
      // Render a container with integration icon if an image is provided
      return (
        <div className="integrate-container-dark h-10 w-20 md:h-14 md:w-20 lg:h-20 lg:w-20 flex items-center justify-center">
          <img className={className} src={image} alt="" />
        </div>
      );
    } else {
      // Render an empty container if no image is provided
      return (
        <div className="integrate-container h-10 w-20 md:h-14 md:w-20 lg:h-20 lg:w-20 flex items-center justify-center"></div>
      );
    }
  }

  /* Integrate app-icon data for the second row (4 boxes) */
  const integrationDataSecondRow = [
    { image: null, className: "" }, // First box
    { image: evernote, className: "h-5 w-5 md:h-7 md:w-7 lg:h-10 lg:w-10" },
    { image: figma, className: "h-5 w-5 md:h-7 md:w-7 lg:h-10 lg:w-10" },
    // Add more integrations here
    { image: null, className: "" }, // Last box
  ];

  function IntegrationIconSecondRow({ image, className }) {
    if (image) {
      // Render a container with integration icon if an image is provided
      return (
        <div className="integrate-container-dark h-10 w-[3rem] md:h-14 md:w-20 lg:h-20 lg:w-20 flex items-center justify-center">
          <img className={className} src={image} alt="" />
        </div>
      );
    } else {
      // Render an empty container if no image is provided
      return (
        <div className="integrate-container h-10 w-[3rem] md:h-14 md:w-20 lg:h-20 lg:w-20"></div>
      );
    }
  }

  return (
    <div className="px-5 py-10 lg:p-10">
      {/* Visual information section */}
      <div className="max-w-5xl p-7 lg:p-14 lg:px-14 mx-auto flex flex-col gap-y-5 lg:flex-row items-start justify-between information-section-background relative">
        <div className="left-info-part w-full">
          <div className="flex flex-col gap-y-3.5 lg:max-w-lg">
            {/* Information header */}
            <div className="flex text-[10px] lg:text-xs w-fit rounded-full bg-[#D3E763] text-black border border-[#506F6F] py-[3px] px-2 lg:px-4 lg:py-1.5 font-semibold">
              <span>INFORMATION</span>
            </div>
            {/* Main heading */}
            <h2 className="text-white text-3xl lg:text-5xl lg:leading-[1.35]">
              Top level visual information
            </h2>
            {/* Description */}
            <p className="text-[#C8C9D0]/50 font-medium text-sm">
              BePrepared is a secure, white-labelled digital vault used to
              confidentially store and distribute your clients' cryptocurrency,
              passwords
            </p>
          </div>
        </div>
        <div className="right-info-part w-full md:w-fit mx-auto lg:w-2/3">
          <div className="glowing-background pl-3 py-5">
            {/* Daily visits */}
            <div className="flex items-center justify-between px-2 pr-5">
              <h3 className="text-2xl lg:text-4xl text-white">42.2k</h3>
              <p className="glowing-background text-white text-sm bg-[#141414] py-2 px-5 rounded-full">
                Daily Visits
              </p>
            </div>
            {/* Line graph */}
            <div className="flex items-start gap-x-5 py-5">
              <div className="-mr-9 lg:-mr-10">
                <img src={lineGraphWithDot} alt="" />
              </div>
            </div>
            {/* Workforce section */}
            <div className="flex flex-col justify-start px-5">
              <h3 className="text-lg text-[#C8C9D0] font-[400]">Work Force</h3>
              <p className="text-[#868898] text-sm font-[400]">
                Short description goes here
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Integrated app icons section */}
      <div className="max-w-5xl lg:py-10 mx-auto flex flex-col gap-y-5 lg:flex-row items-start justify-between relative gap-x-10 ">
        <div className="glowing-background md:mx-auto lg:-mt-32 p-5 ">
          <div className="flex flex-col gap-y-3.5 max-w-lg">
            {/* Tags */}
            <div className="flex items-center justify-between">
              <p className="tag text-white text-xs lg:text-sm bg-[#141414] py-1 px-3 lg:py-2 lg:px-5 rounded-full">
                Value
              </p>
              <p className="glowing-background text-white text-sm bg-[#141414] py-2 px-5 rounded-full">
                Daily Visits
              </p>
            </div>
            <div className="pt-5 pl-3.5">
              {/* Pie chart */}
              <div className="flex items-center justify-center gap-x-5">
                <div className="mx-auto relative">
                  <img src={pieChart} alt="" />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    {/* Spending information */}
                    <h3 className="text-2xl lg:text-4xl text-white">$5476</h3>
                    <p className="text-[#868898] text-[10px] lg:text-sm font-[400]">
                      Spending this week
                    </p>
                  </div>
                </div>
              </div>
              {/* Workforce section */}
              <div className="flex flex-col justify-start -mt-20">
                <h3 className="text-base lg:text-lg text-[#C8C9D0] font-[400]">
                  Work Force
                </h3>
                <p className="text-[#868898] text-xs lg:text-sm font-[400]">
                  Short description goes here
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="right-part-visual lg:-mt-10 w-full md:w-fit md:mx-auto lg:mx-0 lg:w-fit">
          <div className="glowing-background p-5 md:p-10 md:px-7 lg:p-10">
            {/* Integration header */}
            <div className="flex items-center justify-center px-2 pr-5">
              <h3 className="text-3xl lg:text-4xl text-white">
                We integrate what you love
              </h3>
            </div>
            {/* Integrated app icons - First row */}
            <div className="flex items-center justify-center gap-x-5 pt-10 py-5">
              {integrationDataFirstRow.map((integration, index) => (
                <IntegrationIconFirstRow
                  key={index}
                  image={integration.image}
                  className={integration.className}
                />
              ))}
            </div>
            {/* Integrated app icons - Second row */}
            <div className="flex items-center justify-center gap-x-5 ">
              {integrationDataSecondRow.map((integration, index) => (
                <IntegrationIconSecondRow
                  key={index}
                  image={integration.image}
                  className={integration.className}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InformationSection;
