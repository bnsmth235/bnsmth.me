import React from "react";

interface CardProps {
  frontImage: string;
  title: string;
  backText: string;
}

const Card: React.FC<CardProps> = ({ frontImage, title, backText }) => {
  return (
    <div className="card">
      <div className="card-front">
        <img src={frontImage} alt={title} />
        <div className="card-title">{title}</div>
      </div>
      <div className="card-back">
        <img src={frontImage} alt={title} className="card-back-img" style={{ filter: "brightness(50%)" }} />
        <p>{backText}</p>
      </div>
    </div>
  );
};

export default Card;
