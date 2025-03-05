import React from "react";
import { Link } from "react-scroll";
import Button from "../Misc/Button";
import "../../index.css";
import arrow from "../../assets/up right.png";

const SecondaryNav: React.FC = () => {
  return (
    <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-auto max-w-xs py-2 bg-transparent z-10">
      <nav className="justify-items-center">
        <div className="w-full rounded-4xl bg-white/30 backdrop-blur-lg px-2 py-1.5 mx-auto">
          <ul className="flex flex-col md:flex-row justify-between">
            <li className="mb-2 md:mb-0">
              <a href="https://www.github.com/bnsmth235" target="_blank" rel="noopener noreferrer">
                <Button text="GitHub" img={arrow} className="px-4 md:px-8 py-2 text-gray-800 hover:bg-[#69aadf] nunito-sans-medium grow-button" />
              </a>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={1000} spy={true} activeClass="active">
                <Button text="Hire me" className="px-4 md:px-8 py-2 text-gray-800 hover:bg-[#69aadf] nunito-sans-medium grow-button" />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default SecondaryNav;