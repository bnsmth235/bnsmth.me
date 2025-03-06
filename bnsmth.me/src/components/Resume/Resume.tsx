import resume from "../../assets/resume.pdf";
import resumeThumbnail from "../../assets/resume-thumbnail.png";
import experienceGraphic from "../../assets/experience-graphic.png";

const Resume: React.FC = () => {

  return (
    <div className="w-9/10 p-4 md:p-8 text-black">
      <h2 className="text-6xl font-bold mt-10 mb-10">My <span className="text-[#69aadf]">Work Experience</span></h2>
      <div className="about-section p-4 md:p-8 text-white flex flex-row items-center justify-center">
        <ul className="flex flex-col w-2/5 justify-evenly h-full -mt-15">
          <li className="flex flex-col text-right">
            <h2 className="nunito-sans-medium text-3xl text-[#023358]">Northline Construction - Provo, UT</h2>
            <h4 className="nunito-sans-normal text-[#023358]">May 2023 - Current</h4>
          </li>
          <li className="flex flex-col mt-30 text-right">
            <h2 className="nunito-sans-medium text-3xl text-[#023358]">Conservice - Remote</h2>
            <h4 className="nunito-sans-normal text-[#023358]">Mar 2024 - Jan 2025</h4>
          </li>
          <li className="flex flex-col mt-30 text-right">
            <h2 className="nunito-sans-medium text-3xl text-[#023358]">Conservice - Remote</h2>
            <h4 className="nunito-sans-normal text-[#023358]">Jan 2023 - Mar 2024</h4>
          </li>
        </ul>
        <div className="flex flex-col w-1/5 items-center justify-center">
          <img src={experienceGraphic} className="mb-15 w-3/16"></img>
        </div>
        <ul className="flex flex-col w-2/5">
          <li className="flex flex-col">
            <h2 className="nunito-sans-medium text-3xl text-[#023358]">Budget Analyst & Software Developer</h2>
            <h4 className="nunito-sans-normal text-[#023358]">Resolved a $1.2M budget discrepancy, reducing the deficit by 83% through negotiation, developed a web-app for budget tracking, and collaborated with the General Contractor on a $1B construction portfolio.</h4>
          </li>
          <li className="flex flex-col mt-10">
            <h2 className="nunito-sans-medium text-3xl text-[#023358]">Software Engineer I</h2>
            <h4 className="nunito-sans-normal text-[#023358]">Led the redesign of a PDF intake pipeline handling 1.5M documents monthly, implementing a cloud-based distributed system, integrating legacy on-prem systems, and streamlining processes with message queues and API migrations.</h4>
          </li>
          <li className="flex flex-col mt-10">
            <h2 className="nunito-sans-medium text-3xl text-[#023358]">Associate Software Engineer</h2>
            <h4 className="nunito-sans-normal text-[#023358]">Led microservices development to enhance efficiency and automation, building a machine learning service to predict bill availability, reducing server costs, and maintaining 1,500+ scrapers to automate utility bill retrieval.</h4>
          </li>
        </ul>
      </div>
      <div className="-mt-80 w-1/8 flex flex-col text-center">
        <a href={resume} target="_blank" rel="noopener noreferrer" className="text-[#023358]">
          <img src={resumeThumbnail} className=""></img>
          <span className="urbanist-bold text-1">View My <span className="text-[#69aadf]">Resume!</span></span>
        </a>
      </div>
    </div>
  );
};

export default Resume;
