import React from "react";
import "./About.css";
import "animate.css";
import main from "../assets/img/main.png";
import { Container, Row, Col } from "react-bootstrap";

import { Zoom } from "react-reveal";
import { useState } from "react";
import Fade from "react-bootstrap/Fade";
function About() {
  const [open, setOpen] = useState(false);
  //  Up To Top Btn

  return (
    <Zoom>
      <div className="about component__space" id="about">
        <Container>
          <Row>
            <Col className="col__2 ">
              <img
                className="animate__backInLeft about__img"
                src={main}
                alt=""
              />
            </Col>
            <Col className="col__2">
              <h1 className="about__heading">About Me</h1>
              <ul className="about__meta">
                <li>
                  <h5 className="about__text p__color">
                    I'm a Front End Developer , always seeking a challenging job
                    with a progressive organization that provides an opportunity
                    to benefit from my technical skills as I can further develop
                    myself, gain more skills and learn more techniques.
                  </h5>
                </li>
                <li>
                  <h5 className="about__text p__color">
                    Proficient styling: CSS,Bootstrap,Material UI ,Tailwind
                    CSS,Recat-BootStrap-React Js
                    <br />
                    Have Ability To Complete Tasks On Time In Both Individual
                    and Team Settings. ready to learn and grow with your
                    company. executing with a plethora of diverse skills.
                  </h5>
                </li>

                <li>
                  <h5 className="about__text p__color">
                    I graduated from Banha University The College Of Computers
                    And Information with a Bachelor degree in Computer Science .
                  </h5>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </Zoom>
  );
}

export default About;
