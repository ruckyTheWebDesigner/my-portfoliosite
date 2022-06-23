import React from "react";

import { FiTwitter, FiGithub } from "react-icons/fi";

function Sidebar() {
  return (
    <>
      <div className='sidebar'>
        <a href='/'>rukewe@gmail.com</a>
      </div>

      <div className='sidebar-right'>
        <a href='/' className='my-3'>
          <FiTwitter />
        </a>
        <a href='/'>
          <FiGithub />
        </a>
      </div>

      <div className='footer'>
        <div className='footer-icons d-flex align-items-center justify-content-center'>
          <a href='/' className='my-2 mx-3'>
            <FiTwitter />
          </a>
          <a href='/'>
            <FiGithub />
          </a>
        </div>
        <h6 className='text-center'>Designed & Built by Rukewe Joseph</h6>
      </div>
    </>
  );
}

export default Sidebar;
