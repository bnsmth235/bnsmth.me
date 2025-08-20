import resume from "../../assets/resume.pdf";
import resumeThumbnail from "../../assets/resume-thumbnail.png";

import Bubble from "./Bubble";

const jobs = [
  {
    title: "Software Engineer",
    company: "Brigham Young University",
    date: "Aug 2025 - Current",
    description: "Developing and maintaining web applications and services that provide students with access to library resources."
  },
  {
    title: "Budget Analyst & Software Developer",
    company: "Northline Construction - Provo, UT",
    date: "May 2023 - Current",
    description:
      "Resolved a $1.2M budget discrepancy, reducing the deficit by 83% through negotiation, developed a web-app for budget tracking, and collaborated with the General Contractor on a $1B construction portfolio.",
  },
  {
    title: "Software Engineer I",
    company: "Conservice - Remote",
    date: "Mar 2024 - Jan 2025",
    description:
      "Led the redesign of a PDF intake pipeline handling 1.5M documents monthly, implementing a cloud-based distributed system, integrating legacy on-prem systems, and streamlining processes with message queues and API migrations.",
  },
  {
    title: "Associate Software Engineer",
    company: "Conservice - Remote",
    date: "Jan 2023 - Mar 2024",
    description:
      "Led microservices development to enhance efficiency and automation, building a machine learning service to predict bill availability, reducing server costs, and maintaining 1,500+ scrapers to automate utility bill retrieval."
  }
];

const Resume: React.FC = () => {
  return (
    <div className="w-9/10 p-4 md:p-8 text-black">
      <div className="flex flex-col items-center justify-center mb-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-5 w-full whitespace-nowrap">
          My <span className="text-[#69aadf]">Work Experience</span>
        </h2>
      </div>
      <div className="about-section p-4 h-full md:p-8 text-white flex flex-col md:flex-row items-center justify-center">
        {/* Resume link/thumbnail column */}
        <div className="h-full md:w-1/8 text-center flex flex-col items-center justify-center">
          <a href={resume} target="_blank" rel="noopener noreferrer" className="text-[#023358]">
            <img src={resumeThumbnail} className="w-1/2 md:w-full" alt="Resume Thumbnail" />
            <span className="urbanist-bold text-sm md:text-1">View My <span className="text-[#69aadf]">Resume!</span></span>
          </a>
        </div>
        {/* Job info column */}
        <ul className="flex flex-col w-full md:w-2/5 justify-evenly" style={{ height: "-webkit-fill-available" }}>
          {jobs.map((job, idx) => (
            <li className="flex flex-col text-right" key={idx}>
              <h2
                className="nunito-sans-medium text-xl md:text-3xl text-[#023358]"
                style={{
                  fontSize: "clamp(1.1rem, 2vw, 2.2rem)",
                  overflow: "hidden",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical"
                }}
              >
                {job.company}
              </h2>
              <h4
                className="nunito-sans-normal text-sm md:text-base text-[#023358]"
                style={{ fontSize: "clamp(0.9rem, 1.5vw, 1.2rem)" }}
              >
                {job.date}
              </h4>
            </li>
          ))}
        </ul>
        {/* Dynamic bubbles graphic column */}
        <div className="flex flex-col h-full w-full md:w-1/5 items-center justify-center relative" style={{height: "-webkit-fill-available"}}>
          {/* vertical dashed line behind bubbles */}
          <div style={{
            position: "absolute",
            left: "50%",
            top: "20%",
            bottom: "20%",
            width: 0,
            borderLeft: "3px dashed #1e2938",
            zIndex: 1
          }} />
          <div className="flex flex-col h-full justify-evenly items-center" style={{ zIndex: 2 }}>
            {jobs.map((_, idx) => (
              <Bubble key={idx} color={idx % 2 === 0 ? "#1e2938" : "#6fa8dc"}/>
            ))}
          </div>
        </div>
        {/* Job description column */}
        <ul className="flex flex-col w-full md:w-3/5">
          {jobs.map((job, idx) => (
            <li className={`flex flex-col${idx > 0 ? ' mt-5 md:mt-10' : ''}`} key={idx}>
              <h2
                className="nunito-sans-medium text-xl md:text-3xl text-[#023358]"
                style={{
                  fontSize: "clamp(1.1rem, 2vw, 2.2rem)",
                  overflow: "hidden",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical"
                }}
              >
                {job.title}
              </h2>
              <h4
                className="nunito-sans-normal text-sm md:text-base text-[#023358]"
                style={{ fontSize: "clamp(0.9rem, 1.5vw, 1.2rem)" }}
              >
                {job.description}
              </h4>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Resume;
