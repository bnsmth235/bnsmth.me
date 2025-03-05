import React from "react";
import "../../index.css";
import stars from "../../assets/5-stars.png";

const Experience: React.FC = () => {
  return (
    <div className="absolute right-5 md:right-30 top-2/3 transform -translate-y-1/2 p-5 max-w-xs">
      <img src={stars} alt="5 stars" className="w-auto h-8 object-cover" />
      <p className="text-base md:text-lg italic" style={{ lineHeight: 1.8 }}>
        <span className="text-3xl md:text-5xl font-bold">3 years</span><br />
        <span className="whitespace-nowrap">professional and personal experience</span>
      </p>
    </div>
  );
};

export default Experience;