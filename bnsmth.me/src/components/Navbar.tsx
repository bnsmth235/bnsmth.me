import React from "react";
import { Link } from "react-scroll";
import Button from "./Button";
import "../index.css";

const Navbar: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full py-5 bg-transparent z-50">
      <nav className="max-w-screen-lg mx-auto justify-items-center">
        <div className="w-11/12 rounded-4xl bg-black px-5 py-1.5 mx-auto">
          <ul className="flex flex-row justify-between">
            <li className="-ml-3">
              <Link to="home" smooth={true} duration={500} spy={true} activeClass="active">
                <Button text="Home" className="px-5 py-1.5" />
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={500} spy={true} activeClass="active">
                <Button text="About" className="px-5 py-1.5" />
              </Link>
            </li>
            <li>
              <Link to="services" smooth={true} duration={500} spy={true} activeClass="active">
                <Button text="Service" className="px-5 py-1.5" />
              </Link>
            </li>
            <li>
              <div className="w-40 flex items-center justify-center">
                <span className="text-white text-2xl">LOGO</span>
              </div>
            </li>
            <li>
              <Link to="resume" smooth={true} duration={500} spy={true} activeClass="active">
                <Button text="Resume" className="px-5 py-1.5" />
              </Link>
            </li>
            <li>
              <Link to="projects" smooth={true} duration={500} spy={true} activeClass="active">
                <Button text="Projects" className="px-5 py-1.5" />
              </Link>
            </li>
            <li className="-mr-3">
              <Link to="contact" smooth={true} duration={500} spy={true} activeClass="active">
                <Button text="Contact" className="px-5 py-1.5" />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;