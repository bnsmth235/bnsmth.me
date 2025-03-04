import React from "react";
import "../index.css";
import swoosh from "../assets/swoosh.png";

const Title: React.FC = () => {
  return (
    <div className="absolute top-5/16 -translate-y-7/16 text-center z-0 flex flex-col items-center">
        <img src={swoosh} alt="swoosh" className="w-6 h-6 object-cover translate-x-15 -translate-y-12" />
        <div className="absolute -top-8 flex items-center text-center rounded-4xl border-2">
            <span className="px-8 py-2 nunito-sans-normal">Hello!</span>
        </div>
        <h1 className="md:text-8xl urbanist-medium leading-tight" style={{ lineHeight: 1 }}>
            I'm <span className="nunito-sans-medium" style={{ color: '#69aadf' }}>Ben</span>,<br/> Full Stack Engineer
        </h1>
        <img src={swoosh} alt="swoosh" className="w-16 h-16 object-cover -translate-x-108 -translate-y-3 rotate-180" />

    </div>
  );
};

export default Title;