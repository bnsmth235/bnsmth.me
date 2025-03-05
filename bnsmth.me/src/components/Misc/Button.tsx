import React from "react";
import "../../index.css";

type ButtonProps = {
  text: string;
  img?: string;
  onClick?: () => void;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ text, img, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center rounded-4xl ${className}`}>
      <span>{text}</span>
      {img && <img src={img} alt="" className="ml-2" />}
    </button>
  );
};

export default Button;