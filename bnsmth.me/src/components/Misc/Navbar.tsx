import React from "react";
import { Link } from "react-scroll";
import Button from "./Button";
import "../../index.css";

const Navbar: React.FC = () => {
  const handleSetActive = (to: string) => {
    if (to === "contact") {
      const projectsLink = document.querySelector('a[id="projects-link"]');
      if (projectsLink) {
        projectsLink.classList.remove("active");
      }
    }
  };

  const handleSetInactive = (to: string) => {
    if (to === "contact") {
      const projectsLink = document.querySelector('a[id="projects-link"]');
      if (projectsLink) {
        projectsLink.classList.add("active");
      }
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full py-5 bg-transparent z-50">
      <nav className="max-w-screen-lg mx-auto justify-items-center">
        <div className="w-full rounded-4xl bg-black px-5 py-1.5 mx-50">
          <ul className="flex flex-row justify-between">
            <li className="-ml-3">
              <Link to="home" smooth={true} duration={800} spy={true} activeClass="active" onSetActive={handleSetActive}>
                <Button text="Home" className="px-8 py-2 text-white nunito-sans-bold hover:bg-gray-600 grow-button" />
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={800} spy={true} activeClass="active" onSetActive={handleSetActive}>
                <Button text="About" className="px-8 py-2 text-white nunito-sans-bold hover:bg-gray-600 grow-button" />
              </Link>
            </li>
            <li>
              <Link to="services" smooth={true} duration={800} spy={true} activeClass="active" onSetActive={handleSetActive}>
                <Button text="Services" className="px-8 py-2 text-white nunito-sans-bold hover:bg-gray-600 grow-button" />
              </Link>
            </li>
            <li>
              <Link to="resume" smooth={true} duration={800} spy={true} activeClass="active" onSetActive={handleSetActive}>
                <Button text="Resume" className="px-8 py-2 text-white nunito-sans-bold hover:bg-gray-600 grow-button" />
              </Link>
            </li>
            <li>
              <Link to="projects" smooth={true} duration={800} spy={true} activeClass="active" id="projects-link">
                <Button text="Projects" className="px-8 py-2 text-white nunito-sans-bold hover:bg-gray-600 grow-button" />
              </Link>
            </li>
            <li className="-mr-3">
              <Link
                to="contact"
                smooth={true}
                duration={800}
                spy={true}
                activeClass="active"
                offset={-window.innerHeight * 0.4}
                onSetActive={handleSetActive}
                onSetInactive={handleSetInactive}
              >
                <Button text="Contact" className="px-8 py-2 text-white nunito-sans-bold hover:bg-gray-600 grow-button" />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;