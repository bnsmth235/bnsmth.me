import React from "react";
import { Link } from "react-scroll";
import facebookIcon from "../../assets/facebook.png";
import githubIcon from "../../assets/github.png";
import instagramIcon from "../../assets/instagram.png";
import linkedinIcon from "../../assets/linkedin.png";
import mailIcon from "../../assets/mail.png";

const Contact: React.FC = () => {
  return (
    <div className="contact">
      <h1 className="nunito-sans-bold text-6xl ml-20 -mt-5 mb-5">Let's Connect!</h1>
      <div className="flex flex-col items-center">
        <hr className="my-4 w-9/10" style={{ height: '2px', backgroundColor: "#91a0ad", color: "#91a0ad" }} />
      </div>
      <div className="flex flex-col md:flex-row justify-between ml-20 w-9/10 md:w-3/4">
        <div className="w-6/10">
          <div className="short-paragraph mt-4 text-left">
            <p>Thank you for visiting my website. I am passionate about connecting with like-minded professionals and exploring new opportunities. Feel free to reach out through any of the social media platforms listed below. Let's build something great together!</p>
          </div>
          <div className="social-media-links flex flex-row justify-left mt-23">
            <a href="https://www.facebook.com/profile.php?id=100006564123677" target="_blank" rel="noopener noreferrer">
              <img src={facebookIcon} alt="Facebook" className="icon-white small-icon" />
            </a>
            <a href="https://www.github.com/bnsmth235" target="_blank" rel="noopener noreferrer" className="mx-2">
              <img src={githubIcon} alt="GitHub" className="icon-white small-icon" />
            </a>
            <a href="https://www.instagram.com/bn_smth/" target="_blank" rel="noopener noreferrer" className="mx-2">
              <img src={instagramIcon} alt="Instagram" className="icon-white small-icon" />
            </a>
            <a href="https://www.linkedin.com/in/benjamin-smith-23454821a/" target="_blank" rel="noopener noreferrer" className="mx-2">
              <img src={linkedinIcon} alt="LinkedIn" className="icon-white small-icon" />
            </a>
            <a href="mailto:benjaminsmith1@gmail.com" target="_blank" rel="noopener noreferrer" className="mx-2">
              <img src={mailIcon} alt="Mail" className="icon-white small-icon" />
            </a>
          </div>
        </div>
        <div className="navigation flex-2 flex flex-col justify-center text-center mx-8">
          <h2 className="nunito-sans-medium text-[#69aadf]">Navigation</h2>
          <ul className="flex flex-col">
            <li className="mt-2">
              <Link to="home" smooth={true} duration={800}>
                Home
              </Link>
            </li>
              <a>
            <li className="mt-2">
              <Link to="about" smooth={true} duration={800}>
                About Us
              </Link>
            </li>
              </a>
            <li className="mt-2">
              <Link to="services" smooth={true} duration={800}>
                Service
              </Link>
            </li>
            <li className="mt-2">
              <Link to="resume" smooth={true} duration={800}>
                Resume
              </Link>
            </li>
            <li className="mt-2">
              <Link to="projects" smooth={true} duration={800}>
                Project
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex-1 mt-2">
          <h2 className="nunito-sans-medium text-[#69aadf]">Contact</h2>
          <div className="contact-details flex flex-col items-start h-full">
            <div className="contact-item mt-2">
              <p>+1 (385) 539-0253</p>
            </div>
            <div className="contact-item flex items-center mt-2">
              <p>benjaminsmith1@gmail.com</p>
            </div>
            <div className="contact-item mt-2">
              <p>Provo, UT, USA</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <hr className="my-4 w-9/10" style={{ height: '2px', backgroundColor: "#bbbbbb", color: "#bbbbbb" }} />
      </div>
    </div>
  );
};

export default Contact;
