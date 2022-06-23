import Project from "./Project";
import Projectsinfo from "./Projectsinfo";

function Projects() {
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
            <div className='project-contents mb-4'>
              <Project
                key={project.toString()}
                value={project}
                className='project-1'
                title={project.name}
                description={project.description}
                description2={project.description2}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Projects;
