import React from "react";
// import { Divider } from "@mui/material";
import { Row, Col } from "react-bootstrap";
import { MdPlayArrow } from "react-icons/md";
import photo from "./Assets/photo.png";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function AboutMe() {
  const revealRefs = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      revealRefs.current,
      { autoAlpha: 0 },
      {
        duration: 1,
        autoAlpha: 1,
        scrollTrigger: {
          trigger: revealRefs.current,
          start: "top center+=100",
          end: "bottom bottom",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, [revealRefs]);

  return (
    <div className='about-section ' id='about-me'>
      <div className='abouttitle d-flex align-items-center line' id='#About'>
        <h6 className='green-text me-2'>01.</h6>
        <h4 className='about'>About Us</h4>
      </div>
      <div
        className='about-content d-flex flex-column flex-md-row flex-lg-row'
        ref={revealRefs}>
        <div className='about-body'>
          <p>
            Hello! My name is Rukewe and i enjoy creating things that live on
            the internet, My interest in web development started few years ago
            when i decided to try editing custom WordPress themes -- turns out
            to become a passion i enjoy!
          </p>

          <p>
            Fast-forward to today, and I’ve had the privilege of working as a
            freelancer on my leisure time and contributed to several open-source
            projects. My main focus these days is solving day to day problems
            with modern technology.
          </p>

          <p>
            Here are a few technologies that I've been working with recently:
          </p>
          <div>
            <Row>
              <Col>
                <div className='d-flex'>
                  <MdPlayArrow className='green-text me-1' />
                  <p>Javascript (ES6+)</p>
                </div>
                <div className='d-flex'>
                  <MdPlayArrow className='green-text me-1' />
                  <p>React JS</p>
                </div>
                <div className='d-flex'>
                  <MdPlayArrow className='green-text me-1' />
                  <p>Node.js</p>
                </div>
                <div className='d-flex'>
                  <MdPlayArrow className='green-text me-1' />
                  <p>Git</p>
                </div>
              </Col>
              <Col>
                <div className='d-flex'>
                  <MdPlayArrow className='green-text me-1' />
                  <p>Express JS</p>
                </div>
                <div className='d-flex'>
                  <MdPlayArrow className='green-text me-1' />
                  <p>API</p>
                </div>
                <div className='d-flex'>
                  <MdPlayArrow className='green-text me-1' />
                  <p>Firebase</p>
                </div>
                <div className='d-flex'>
                  <MdPlayArrow className='green-text me-1' />
                  <p>MongoDB</p>
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
