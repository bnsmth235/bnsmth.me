import React from "react";
import "../index.css";

type ButtonProps = {
  text: string;
  onClick: () => void;
  className?: string; // Add className prop
};

const Button: React.FC<ButtonProps> = ({ text, onClick, className }) => {
  return (
    <button onClick={onClick} className={`text-white hover:bg-gray-700 rounded-4xl ${className}`}>
      {text}
    </button>
  );
};

export default Button;