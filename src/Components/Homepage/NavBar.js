// eslint-disable-next-line no-unused-vars

import { Offcanvas, Nav } from "react-bootstrap";
import { useState, useEffect } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import logo from "./Assets/Logo.png";

export default function BasicCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function scrollToSection(id) {
    setShow(false);
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    // scrollToAbout();
  }, []);

  return (
    <>
      <div className='navbar-mobile d-flex justify-content-between px-4 pt-4'>
        <Link to='/'>
          <img src={logo} className='green-text logo' alt='' srcset='' />
        </Link>
        <div className='left'>
          <BiMenuAltRight
            className='green-text offcanvas-icon'
            onClick={handleShow}
          />
        </div>
      </div>

      <div className='navbar-desktop px-5 d-flex justify-content-between'>
        <Link to='/'>
          <img src={logo} className='green-text logo' alt='' srcset='' />
        </Link>

        <div className='right-nav  d-flex justify-content-around align-items-center'>
          <Nav.Link
            className='d-flex nav-link mt-1'
            onClick={() => scrollToSection("about-me")}>
            <h5 className='green-text me-2'>01.</h5>
            <h4>About Me</h4>
          </Nav.Link>
          <Nav.Link
            className='d-flex nav-link me-2'
            href='#action2'
            onClick={() => scrollToSection("projects")}>
            <h4 className='green-text me-2'>02.</h4>
            <h4>Projects</h4>
          </Nav.Link>
          <Nav.Link
            className='d-flex nav-link me-3'
            href='#action2'
            onClick={() => scrollToSection("contact-me")}>
            <h4 className='green-text me-2'>03.</h4>
            <h4>Contact</h4>
          </Nav.Link>
          <button className='button btn-desktop '>Resume</button>
        </div>
      </div>

      <Offcanvas show={show} placement='end' onHide={handleClose}>
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body>
          <div className='offcanvas-nav nav-mobile'>
            <Nav.Link
              className='nav'
              onClick={() => scrollToSection("about-me")}>
              <h5 className='green-text'>01.</h5>
              <h4>About Me</h4>
            </Nav.Link>
            <Nav.Link
              href='#action2'
              onClick={() => scrollToSection("projects")}>
              <h4 className='green-text'>02.</h4>
              <h4>Projects</h4>
            </Nav.Link>
            <Nav.Link
              href='#action2'
              onClick={() => scrollToSection("contact-me")}>
              <h4 className='green-text'>03.</h4>
              <h4>Contact</h4>
            </Nav.Link>

            <button className='button mt-4 py-3 mx-auto w-50'>Resume</button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
