import Project from "./Project";
import Projectsinfo from "./Projectsinfo";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const revealRefs = useRef([]);
  revealRefs.current = [];

  const addtoRefs = (el) => {
    // revealref.current.push(element);
    // console.log(element);
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  useEffect(() => {
    revealRefs.current.forEach((el) => {
      gsap.fromTo(
        el,
        { autoAlpha: 0 },
        {
          duration: 1,
          autoAlpha: 1,
          scrollTrigger: {
            trigger: el,
            start: "top center+=100",
            end: "bottom bottom",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, [revealRefs]);

  return (
    <>
      <div
        className='abouttitle d-flex align-items-center line-through'
        id='projects'>
        <h6 className='green-text me-2'>02.</h6>
        <h4 className='about'>Some Things I've Built</h4>
      </div>

      <div className='project-section'>
        {Projectsinfo.map((project) => {
          return (
            <div className='project-contents mb-2' ref={addtoRefs}>
              <Project
                key={project.toString()}
                value={project}
                className='project-1'
                url={project.url}
                github={project.github}
                name={project.name}
                description={project.description}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Projects;
