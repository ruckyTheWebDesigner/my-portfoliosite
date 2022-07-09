// eslint-disable-next-line no-unused-vars

import { Offcanvas, Nav } from "react-bootstrap";
import { useState, useEffect } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import logo from "./Assets/Logo.png";

function scrollToSection(id) {
  const element = document.getElementById(id);
  element.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
}

const openPdf = () => {
  window.open(process.env.PUBLIC_URL + "/resume.pdf");
};

function DesktopNav() {
  return (
    <div className='navbar-desktop d-flex justify-content-between'>
      <Link to='/'>
        <img src={logo} className='green-text logo' alt='' srcset='' />
      </Link>

      <div className='right-nav  d-flex justify-content-between align-items-center'>
        <Nav.Link
          className='d-flex nav-link me-3 align-items-center'
          onClick={() => scrollToSection("about-me")}>
          <h5 className='green-text'>01.</h5>
          <h4>About Me</h4>
        </Nav.Link>
        <Nav.Link
          className='d-flex nav-link me-3 align-items-center'
          onClick={() => scrollToSection("projects")}>
          <h5 className='green-text'>02.</h5>
          <h4>Projects</h4>
        </Nav.Link>
        <Nav.Link
          className='d-flex nav-link me-4 align-items-center'
          onClick={() => scrollToSection("contact-me")}>
          <h5 className='green-text'>03.</h5>
          <h4>Contact</h4>
        </Nav.Link>
        <button className='button btn-desktop' onClick={() => openPdf()}>
          Resume
        </button>
      </div>
    </div>
  );
}

function MobileNav() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function scrollToSection(id) {
    const element = document.getElementById(id);
    setShow(false);
    element.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }

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
            <Nav.Link onClick={() => scrollToSection("projects")}>
              <h4 className='green-text'>02.</h4>
              <h4>Projects</h4>
            </Nav.Link>
            <Nav.Link onClick={() => scrollToSection("contact-me")}>
              <h4 className='green-text'>03.</h4>
              <h4>Contact</h4>
            </Nav.Link>

            <button
              className='button mt-4 py-3 mx-auto w-50'
              onClick={() => openPdf()}>
              Resume
            </button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default function BasicCard() {
  const [resolution, setResolution] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", (event) => {
      setResolution(event.target.innerWidth);
    });
  }, []);

  if (resolution > 768) {
    return <DesktopNav />;
  } else if (resolution < 768) {
    return <MobileNav />;
  }
}
