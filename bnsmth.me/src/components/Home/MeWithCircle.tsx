import React from "react";
import "../../index.css";
import meImage from "../../assets/me1.png";

type MeWithCircleProps = {
  altText: string;
};

const MeWithCircle: React.FC<MeWithCircleProps> = ({ altText }) => {
  return (
    <div className="absolute bottom-0 w-7/16 h-auto z-10">
      <img src={meImage} alt={altText} className="w-full h-full object-cover" />
    </div>
  );
};

export default MeWithCircle;