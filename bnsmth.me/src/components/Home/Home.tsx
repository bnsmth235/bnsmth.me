import React from "react";
import MeWithCircle from "./MeWithCircle";
import Title from "./Title";
import Recommendation from "./Recomendation";
import Experience from "./Experience";
import SecondaryNav from "./SecondaryNav";

const Home: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center bg-white relative p-4 md:p-8">
      <Recommendation />
      <Title />
      <Experience />
      <MeWithCircle altText="Me" />
      <SecondaryNav />
    </section>
  );
};

export default Home;
