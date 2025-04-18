import React from "react";
import "../../index.css";
import quote from "../../assets/quote-up.png";

const Recommendation: React.FC = () => {
  return (
    <div className="p-5 max-w-xs">
      <img src={quote} alt="quote" className="w-8 h-8 object-cover mb-4" />
      <p className="text-sm md:text-base lg:text-lg italic">
        a high potential engineer that shows up, works hard, learns quickly and does not get intimidated in tackling tough problems
      </p>
    </div>
  );
};

export default Recommendation;