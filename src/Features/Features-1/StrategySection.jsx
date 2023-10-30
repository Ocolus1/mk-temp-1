import React from "react";
import question from "../../assets/Featured-assets/question.svg";
import survey from "../../assets/Featured-assets/survey.svg";
import trigger from "../../assets/Featured-assets/trigger.svg";
import togglevector from "../../assets/Featured-assets/togglevector.svg";

// Data for feature cards
const featureCardsData = [
  {
    image: question,
    alt: "Question Icon",
    text: "Number of questions used per survey",
  },
  {
    image: survey,
    alt: "Survey Icon",
    text: "Types of question formats used in surveys",
  },
  {
    image: trigger,
    alt: "Trigger Icon",
    text: "Trigger conditions used for surveys",
  },
];

function StrategySection() {
  return (
    <div>
      <div className="flex relative flex-col items-center justify-center gap-y-3.5">
        <div className="flex items-center justify-center rounded-full bg-[#D3E763] text-black border border-[#506F6F] py-[3px] px-2 lg:px-4 lg:py-1.5 font-semibold">
          <span className="text-[10px] lg:text-xs">STRATEGY</span>
        </div>
        <h2 className="text-white text-3xl lg:text-5xl">
          Strategy for success
        </h2>
        <div className="hidden lg:flex lg:absolute -top-32 right-10">
          <img className="h-48 w-48" src={togglevector} alt="" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-10 lg:py-20">
        <div className="flex flex-col gap-y-10 lg:gap-y-0 lg:flex-row items-center justify-between">
          {featureCardsData.map((card, index) => (
            <FeatureCard key={index} image={card.image} text={card.text} />
          ))}
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ image, alt, text }) {
  return (
    <div className="lg:w-1/3">
      <div className="feature-icon-circle p-6 rounded-full w-fit mx-auto my-5 flex items-center justify-center">
        <img src={image} alt={alt} />
      </div>
      <p className="text-white font-[400] max-w-[14rem] flex items-center justify-center text-center mx-auto">
        {text}
      </p>
    </div>
  );
}

export default StrategySection;
