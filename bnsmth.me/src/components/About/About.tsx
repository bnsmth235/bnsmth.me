import React from "react";
import "../../index.css"; // Import the global CSS file
import "./About.css"; // Import the CSS file for About page
import Card from "../Misc/Card"; // Import the reusable Card component
import workcard from "../../assets/work-card.png"; // Import the image for the work card
import musiccard from "../../assets/music-card.png"; // Import the image for the music card
import outdoorscard from "../../assets/outdoors-card.png"; // Import the image for the outdoors card

const About: React.FC = () => {
  return (
    <div className="about-section p-4 md:p-8 text-white w-full h-full flex items-center justify-center">
      <div className="content-container text-center max-w-screen-xl mx-auto">
        <div className="w-full mx-auto">
          <h2 className="text-3xl md:text-6xl font-bold mb-4 urbanist-bold">About <span className="text-[#69aadf]">Me</span></h2>
          <p className="text-base md:text-lg mb-4 urbanist-light">
            I'm a Software Engineer with experience in C#, Python, Django, and Java, specializing in web development, GUIs, OS and concurrency, and machine learning. I’ve led impactful projects, including developing a machine learning service for Conservice to automate data collection and improve efficiency.
            <br/><br/>
            Outside of tech, I’ve held leadership roles as a 4-H State Ambassador, volunteered extensively, served a two-year mission in Washington, D.C., and was Head Teacher for four months in Nicaragua. A lifelong drummer and outdoor enthusiast, I spend my free time canyoneering, hiking, backpacking, and mountain biking—passions shaped by growing up in Utah.
          </p>
          <div className="cards-container nunito-sans-medium grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card 
              frontImage={workcard} 
              title="Work" 
              backText="Specializing in web development, GUIs, OS and concurrency, and machine learning. Led impactful projects, including developing a machine learning service for Conservice."
            />
            <Card 
              frontImage={musiccard} 
              title="Music" 
              backText="A lifelong drummer, I enjoy creating and performing music in my free time."
            />
            <Card 
              frontImage={outdoorscard} 
              title="Outdoors" 
              backText="Outdoor enthusiast, spending free time canyoneering, hiking, backpacking, and mountain biking."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
