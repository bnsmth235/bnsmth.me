import React from "react";
import "../../index.css";
import stars from "../../assets/5-stars.png";

const Experience: React.FC = () => {
  return (
    <div className="p-5 max-w-xs">
      <img src={stars} alt="5 stars" className="w-auto h-8 object-cover mb-4" />
      <p className="text-sm md:text-base lg:text-lg italic" style={{ lineHeight: 1.8 }}>
        <span className="text-2xl md:text-3xl lg:text-5xl font-bold">3 years</span>
        <br />
        <span className="whitespace-nowrap">professional and personal experience</span>
      </p>
    </div>
  );
};

export default Experience;