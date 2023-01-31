import React, { useState, useEffect } from "react";
import Hero from "./Hero";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import OtherProjects from "./OtherProjects";
import ContactMe from "./ContactMe";
import Sidebar from "./Sidebar";
import Loading from "./loading";
import Slider from "./Slider";

function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <div className='homepage-body'>
      <Hero />
      <AboutMe className='gs_reveal' />
      <Projects />
      <OtherProjects />
      <Slider />
      <ContactMe />
      <Sidebar />
    </div>
  );
}

export default HomePage;
