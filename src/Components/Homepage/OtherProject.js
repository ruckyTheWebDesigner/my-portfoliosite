import { FaRegWindowRestore } from "react-icons/fa";
import { AiOutlineFolder } from "react-icons/ai";

function OtherProject(props) {
  return (
    <div className=''>
      <div className='d-flex justify-content-between my-4'>
        <AiOutlineFolder className='others-icon1' />
        <FaRegWindowRestore className='others-icon2' />
      </div>
      <div className=''>
        <h4>{props.title}</h4>
        <h6>{props.subtitle}</h6>
        <p className='on-active'>{props.description}</p>
      </div>
      <div className='d-flex'>
        <p>{props.description1}</p>
        <p className='mx-2'>{props.description2}</p>
        <p>{props.description3}</p>
      </div>
    </div>
  );
}

export default OtherProject;
