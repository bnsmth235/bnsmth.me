import React from "react";
import Navbar from "./components/Navbar";
import MeWithCircle from "./components/MeWithCircle";
import "./index.css";
import Title from "./components/Title";
import Recommendation from "./components/Recomendation";
import Experience from "./components/Experience";
import SecondaryNav from "./components/SecondaryNav";
import cardbgimage from "./assets/card-bg.png";

const App: React.FC = () => {
  return (
    <div className="App">
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
      <Navbar />
      <section id="home" className="min-h-screen flex items-center justify-center bg-white relative">
        <Recommendation />
        <Title />
        <Experience />
        <MeWithCircle altText="Me" />
        <SecondaryNav/>
      </section>
      <section id="about" className="card min-h-screen flex items-center justify-center" style={{ backgroundImage: `url(${cardbgimage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <h2>About Section</h2>
      </section>
      <section id="services" className="min-h-screen flex items-center justify-center bg-white">
        <h2>Services Section</h2>
      </section>
      <section id="resume" className="card min-h-screen flex items-center justify-center bg-gray-200">
        <h2>Resume Section</h2>
      </section>
      <section id="projects" className="min-h-screen flex items-center justify-center bg-white">
        <h2>Projects Section</h2>
      </section>
      <section id="contact" className="contact-card h-[60vh] flex items-center justify-center bg-black text-white" style={{ backgroundImage: `url(${cardbgimage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <h2>Contact Section</h2>
      </section>
    </div>
  );
};

export default App;
