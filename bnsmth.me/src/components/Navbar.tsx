import React from "react";
import Button from "./Button";
import "../index.css";

const Navbar: React.FC = () => {
  return (
    <div className="py-5 max-w-screen-lg mx-auto">
      <nav className="justify-items-center">
        <div className="w-full rounded-4xl bg-black px-5 py-1.5">
          <ul className="flex flex-row justify-between">
            <li className="-ml-3">
              <Button text="Home" onClick={() => { console.log('Home button clicked'); }} className="px-5 py-1.5" />
            </li>
            <li>
              <Button text="About" onClick={() => { console.log('About button clicked'); }} className="px-5 py-1.5" />
            </li>
            <li>
              <Button text="Service" onClick={() => { console.log('Service button clicked'); }} className="px-5 py-1.5" />
            </li>
            <li>
              <div className="w-40 flex items-center justify-center">
                <span className="text-white text-2xl">LOGO</span>
              </div>
            </li>
            <li>
              <Button text="Resume" onClick={() => { console.log('Resume button clicked'); }} className="px-5 py-1.5" />
            </li>
            <li>
              <Button text="Projects" onClick={() => { console.log('Projects button clicked'); }} className="px-5 py-1.5" />
            </li>
            <li className="-mr-3">
              <Button text="Contact" onClick={() => { console.log('Contact button clicked'); }} className="px-5 py-1.5" />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;