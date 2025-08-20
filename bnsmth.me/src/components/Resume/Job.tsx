import React from "react";
import Bubble from "./Bubble";
import Description from "./Description";

export interface JobProps {
  title: string;
  company: string;
  date: string;
  description: string;
  bubbleColor?: string;
}

const Job: React.FC<JobProps> = ({ title, company, date, description, bubbleColor }) => (
  <div className="flex flex-row items-center mb-8">
    <div className="flex flex-col items-end pr-4 w-1/3">
      <h2
        className="nunito-sans-medium text-xl md:text-3xl text-[#023358]"
        style={{
          fontSize: "clamp(1.1rem, 2vw, 2.2rem)",
          overflow: "hidden",
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical"
        }}
      >
        {company}
      </h2>
      <h4
        className="nunito-sans-normal text-sm md:text-base text-[#023358]"
        style={{ fontSize: "clamp(0.9rem, 1.5vw, 1.2rem)" }}
      >
        {date}
      </h4>
      <h3
        className="nunito-sans-medium text-lg md:text-2xl text-[#023358] mt-2"
        style={{
          fontSize: "clamp(1.1rem, 2vw, 2.2rem)",
          overflow: "hidden",
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical"
        }}
      >
        {title}
      </h3>
    </div>
    <div className="flex flex-col items-center w-1/3">
      <Bubble color={bubbleColor} />
    </div>
    <div className="flex flex-col w-1/3 pl-4">
  <Description>{description}</Description>
    </div>
  </div>
);

export default Job;
