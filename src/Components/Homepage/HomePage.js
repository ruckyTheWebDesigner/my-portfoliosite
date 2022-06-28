import React, { useState, useEffect } from "react";
// import ResponsiveAppBar from "./NavBar";
import Hero from "./Hero";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import OtherProjects from "./OtherProjects";
import ContactMe from "./ContactMe";
import Sidebar from "./Sidebar";
import ResponsiveAppBar from "./NavBar";
import Loading from "./loading";

function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <ResponsiveAppBar />
          <div className='homepage-body'>
            <Hero />
            <AboutMe className='gs_reveal' />
            <Projects />
            <OtherProjects />
            <ContactMe />
            <Sidebar />
          </div>
        </>
      )}
    </div>
  );
}

export default HomePage;
