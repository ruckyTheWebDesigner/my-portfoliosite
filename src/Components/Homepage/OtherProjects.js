import React from "react";

// import { useRef, useEffect } from "react";
import OtherProject from "./OtherProject";
import OtherprojectsNotes from "./OtherProjectNotes";

function OtherProjects() {
  function openurl(url) {
    window.open(url, "_blank");
  }

  return (
    <>
      {" "}
      <h4 className='text-center others-heading'>Other Noteworthy Projects</h4>
      <h6 className='green-text text-center'>view the archive</h6>
      <div className='other-projects mt-5 others-section'>
        {OtherprojectsNotes.map((project) => {
          return (
            <>
              <div
                className=' project-contents other-projects mb-2'
                onClick={() => openurl(project.url)}>
                <OtherProject
                  key={project.toString()}
                  value={project}
                  className=''
                  github={project.github}
                  url={project.url}
                  name={project.name}
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
