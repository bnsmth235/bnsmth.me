import React, { useEffect, useRef, useState } from "react";
import rightIcon from "../../assets/right.png";
import githubThumbnail from "../../assets/github-thumbnail.png";
import moffatIntelThumbnail from "../../assets/moffatintel-thumbnail.jpg";
import "./Projects.css"; 

const projects = [
  {
    title: "MoffatIntel",
    description: "End-to-end solution for managing construction projects. Ask me for a demo!",
    link: "https://www.moffatintel.com/projectmanagement",
    thumbnail: moffatIntelThumbnail
  },
  {
    title: "Portfolio",
    description: "The website you're viewing right now!",
    link: "https://github.com/bnsmth235/bnsmth.me",
    thumbnail: githubThumbnail
  },
  {
    title: "Contacts App",
    description: "Basic Android contacts app.",
    link: "https://github.com/bnsmth235/ContactsApp",
    thumbnail: githubThumbnail
  },
];

const Projects: React.FC = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const marquee = marqueeRef.current;
    let timeout: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setIsScrolling(false);
      }, 3000);
    };

    if (marquee) {
      marquee.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (marquee) {
        marquee.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className="w-full p-4 md:p-8 text-black">
      <h2 className="text-3xl md:text-6xl font-bold mb-4 urbanist-bold ml-10">Let's take a look at my<br/><span className="text-[#69aadf]">Portfolio</span></h2>
      <div className="marquee-container relative w-4/5 mx-auto overflow-hidden" ref={marqueeRef}>
        <div className={`marquee flex ${isScrolling ? "paused" : ""}`} style={{ width: `${projects.length * 100}%` }}>
          {projects.concat(projects).map((project, index) => (
            <div key={index} className="project-card p-6 border border-gray-300 rounded-lg relative mx-2">
              <div className="project-image-container">
                <img src={project.thumbnail} alt={`${project.title} Thumbnail`} className="project-image rounded-lg" />
              </div>
              <div className="project-info absolute bottom-0 left-0 right-0 p-4 text-white grid grid-cols-2" style={{ background: "rgba(0, 0, 0, 0.5)" }}>
                <div className="">
                  <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-base mb-4 italic">{project.description}</p>
                </div>
                <div className="project-link-container flex justify-end items-center">  
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    <img src={rightIcon} alt="View Project" className="w-18 h-18" style={{ filter: "invert(100%)" }} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="marquee-gradient-left"></div>
        <div className="marquee-gradient-right"></div>
      </div>
    </div>
  );
};

export default Projects;
