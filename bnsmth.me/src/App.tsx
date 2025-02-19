import React from "react";
import Navbar from "./components/Navbar";
import MeWithCircle from "./components/MeWithCircle";
import "./index.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <section id="home" className="min-h-screen flex items-center justify-center bg-gray-100">
        <MeWithCircle altText="Me" />
      </section>
      <section id="about" className="min-h-screen flex items-center justify-center bg-gray-200">
        <h2>About Section</h2>
      </section>
      <section id="services" className="min-h-screen flex items-center justify-center bg-gray-300">
        <h2>Services Section</h2>
      </section>
      <section id="resume" className="min-h-screen flex items-center justify-center bg-gray-400">
        <h2>Resume Section</h2>
      </section>
      <section id="projects" className="min-h-screen flex items-center justify-center bg-gray-500">
        <h2>Projects Section</h2>
      </section>
      <section id="contact" className="min-h-screen flex items-center justify-center bg-gray-600">
        <h2>Contact Section</h2>
      </section>
    </div>
  );
};

export default App;
