import React from "react";
import Navbar from "./Navbar";
import Home from "../Home/Home";
import "../../index.css";
import About from "../About/About";
import Resume from "../Resume/Resume";
//import Services from "../Services/Services";
import Contact from "../Contact/Contact"; // Import Contact component
import cardbgimage from "../../assets/card-bg.png";
import Projects from "../Projects/Projects";

const App: React.FC = () => {
  return (
    <div className="App">
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
      <Navbar />
      <Home />
      <section id="about" className="card-screen min-h-screen flex items-center justify-center p-4" style={{ backgroundImage: `url(${cardbgimage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <About /> {/* Use the About component */}
      </section>
      <section id="resume" className="card-screen min-h-screen flex items-center justify-center bg-gray-200 p-4">
        <Resume />
      </section>
      <section id="projects" className="min-h-screen flex items-center justify-center bg-white p-4">
        <Projects/>
      </section>
      <section id="contact" className="contact-card h-[60vh] flex items-center justify-center bg-black text-white p-4" style={{ backgroundImage: `url(${cardbgimage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <Contact /> {/* Use the Contact component */}
      </section>
    </div>
  );
};

/*

      <section id="services" className="min-h-screen flex items-center justify-center bg-white p-4">
        <Services /> {}
        </section>
*/

export default App;
