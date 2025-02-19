import React from "react";
import "../index.css";
import meImage from "../assets/me1.png";

type MeWithCircleProps = {
  altText: string;
};

const MeWithCircle: React.FC<MeWithCircleProps> = ({ altText }) => {
  return (
      <div className="w-1/2 h-auto -mb-11">
        <img src={meImage} alt={altText}/>
      </div>
  );
};

export default MeWithCircle;