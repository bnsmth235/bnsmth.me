import React from "react";
import "../../index.css";
import meImage from "../../assets/me1.png";

type MeWithCircleProps = {
  altText: string;
};

const MeWithCircle: React.FC<MeWithCircleProps> = ({ altText }) => {
  return (
    <div className="w-11/32 max-w-[1000px] h-auto z-10">
      <img src={meImage} alt={altText} className="w-full h-auto object-cover" />
    </div>
  );
};

export default MeWithCircle;