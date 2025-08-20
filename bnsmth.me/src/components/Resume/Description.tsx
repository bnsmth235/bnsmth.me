import React from "react";

interface DescriptionProps {
  children: React.ReactNode;
}

const Description: React.FC<DescriptionProps> = ({ children }) => (
  <div
    className="job-description text-base md:text-lg text-[#023358]"
    style={{
      margin: "0.5em 0",
      fontSize: "clamp(0.9rem, 1.5vw, 1.2rem)",
      overflow: "hidden",
      display: "-webkit-box",
      WebkitLineClamp: 2,
      WebkitBoxOrient: "vertical"
    }}
  >
    {children}
  </div>
);

export default Description;
