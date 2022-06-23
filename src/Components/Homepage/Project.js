import { GoMarkGithub } from "react-icons/go";
import { VscOpenPreview } from "react-icons/vsc";

function Project(props) {
  return (
    <div className=''>
      <div className='project-header my-5'>
        <h5>
          Featured Project <hr />
        </h5>

        <h4 className='project-title'>{props.title}</h4>
      </div>
      <h6>{props.description}</h6>
      <h6 className='my-4'>{props.description2}</h6>
      <div className='d-flex mb-3'>
        <GoMarkGithub className='project-icons' />
        <VscOpenPreview className='ms-3 project-icons' />
      </div>
    </div>
  );
}

export default Project;
