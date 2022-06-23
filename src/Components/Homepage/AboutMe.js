import React from "react";
// import { Divider } from "@mui/material";
import { Row, Col } from "react-bootstrap";
import { MdPlayArrow } from "react-icons/md";
import photo from "./Assets/photo.png";
// import { useRef, useEffect } from "react";

function AboutMe() {
  return (
    <div className='about-section' id='about-me'>
      {/* <button onClick={executeScroll}>Click to scroll </button> */}
      <div
        className='abouttitle d-flex align-items-center line-through'
        id='#About'>
        <h6 className='green-text me-2'>01.</h6>
        <h4 className='about'>About Me</h4>
      </div>
      <div className='about-content d-flex flex-column flex-md-row flex-lg-row'>
        <div className='about-body'>
          <h6>
            Hello! My name is Rukewe and i enjoy creating things that live on
            the internet, My instrest in web development started in 2019 when i
            decided to try editing custom WordPress themes -- turns out to
            become a passion i enjoy!
          </h6>

          <h6>
            Fast-forward to today, and I’ve had the privilege of working at an
            advertising agency, a start-up, a huge corporation, and a
            student-led design studio. My main focus these days is building
            accessible, inclusive products and digital experiences at
            Upstatement for a variety of clients.
          </h6>

          <h6>
            Here are a few technologies that I've been working with recently:
          </h6>
          <div>
            <Row>
              <Col>
                <div className='d-flex'>
                  <MdPlayArrow className='green-text me-1' />
                  <h6>Javascript (ES6+)</h6>
                </div>
                <div className='d-flex'>
                  <MdPlayArrow className='green-text me-1' />
                  <h6>React JS</h6>
                </div>
                <div className='d-flex'>
                  <MdPlayArrow className='green-text me-1' />
                  <h6>Node.js</h6>
                </div>
              </Col>
              <Col>
                <div className='d-flex'>
                  <MdPlayArrow className='green-text me-1' />
                  <h6>Javascript (ES6+)</h6>
                </div>
                <div className='d-flex'>
                  <MdPlayArrow className='green-text me-1' />
                  <h6>React JS</h6>
                </div>
                <div className='d-flex'>
                  <MdPlayArrow className='green-text me-1' />
                  <h6>Node.js</h6>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div>
          <div class='container photo-content my-4'>
            <div class='box red'></div>
            <div class='box green'>
              <img src={photo} alt='' srcset='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
