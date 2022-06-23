import React from "react";
import { gsap } from "gsap";
// import { useRef, useEffect } from "react";
import OtherProject from "./OtherProject";
import OtherprojectsNotes from "./OtherProjectNotes";

function OtherProjects() {
  return (
    <>
      {" "}
      <h4 className='text-center others-heading'>Other Noteworthy Projects</h4>
      <div className='other-projects mt-5 others-section'>
        {OtherprojectsNotes.map((project) => {
          return (
            <>
              <div className=' project-contents other-projects mb-5'>
                <OtherProject
                  key={project.toString()}
                  value={project}
                  className=''
                  title={project.title}
                  subtitle={project.subtitle}
                  description={project.description}
                  description1={project.with[1]}
                  description2={project.with[2]}
                  description3={project.with[3]}
                />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default OtherProjects;
