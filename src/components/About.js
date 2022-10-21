import React from "react";
import './About.css'
import 'animate.css';
import main from '../assets/img/main.png'
import { Container, Row, Col } from "react-bootstrap";

import { Zoom } from "react-reveal";
import{ useState } from 'react';
import Fade from 'react-bootstrap/Fade';
function About() {
const [open, setOpen] = useState(false);
  //  Up To Top Btn

  return (
    <Zoom>
    <div className="about component__space" id="about">
      <Container>
        <Row >
          <Col className="col__2 ">
            <img className="animate__backInLeft about__img"  src={main} alt=""  />
          </Col>
          <Col className="col__2">
            <h1 className="about__heading">About Me</h1>
            <ul className="about__meta">
              <li>
              <h5 className="about__text p__color">
              I'm a Front-end web developer with +1 year of experience in designing and building responsive web apps. 
              </h5>
              </li>
              <li>
              <h5 className="about__text p__color">
              Proficient styling: CSS,Bootstrap,Material UI ,Tailwind CSS,Recat-BootStrap-React Js 
              <br/>Have Ability To Complete Tasks On Time In Both Individual and Team Settings. 
              ready to learn and grow with your company. executing with a plethora of diverse skills.
              </h5>
              </li>

           
              <Row className=" text-start  text-light ms-3 ">
      
                
                  <button 
                  onClick={() => setOpen(!open)}   
                  aria-controls="example-fade-text" 
                  aria-expanded={open}className="about text-light text-start  pointer pb-2"
                  ><u>see more...</u></button>
              

                
                <Fade in={open}>
        <li id="example-fade-text ">
          <h5>
          I graduated from Banha University The College Of Computers And Information 
          with a Bachelor degree in Computer Science . 
         
          </h5>
          <h5>
             I’ve been working as Customer Service Representation at We for 9 months which enhanced my experience in dealing with customers, analyzing their problems
          </h5>          
          <h5>
          I am currently looking for work in the Web-Development after more than one year of Learning and free work in the same field 
          which enabled me to do many projects 
          </h5>
        </li>        
        

        
      </Fade>
                

            </Row>
            </ul>
          </Col>
          </Row>
        </Container>
      

      
    </div>
    </Zoom>
  );
}

export default About;