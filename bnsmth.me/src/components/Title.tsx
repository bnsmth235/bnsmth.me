import React from "react";
import "../index.css";

const Title: React.FC = () => {
  return (
    <div className="absolute top-5/16 transform -translate-y-1/2 text-center z-0">
      <h1 className="md:text-8xl urbanist-medium leading-tight" style={{ lineHeight: 1 }}>
        I'm <span className="nunito-sans-medium" style={{ color: '#69aadf' }}>Ben</span>,<br/> Full Stack Engineer
      </h1>
    </div>
  );
};

export default Title;