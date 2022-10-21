
import React, { useState } from "react";
import {Container,Row,Col} from'react-bootstrap'
import { MultiSelect } from "react-multi-select-component";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import html from "../assets/img/html.png";
import css from "../assets/img/css.png";
import sass from "../assets/img/sass.png";
import js from "../assets/img/js.png";
import bs from "../assets/img/bs.png";
import t from "../assets/img/t.png";
import g from "../assets/img/git.png";
import r from "../assets/img/r.png";

import colorSharp from "../assets/img/color-sharp.png"

import Jump  from 'react-reveal/Jump';


const skills = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

  return (
 <section className="skill " id='skills'>
 <Container>
 <Row>
 <Col>
<div className="skill-bx wow zoomIn">
<h2> Skills</h2>
<p>You Can Imagine,
I Can Do !
I have built more than 20 websites for practise myself, Excellent time management and organisational skills</p>
 <Jump >
<Carousel responsive={responsive} infinite={true} className="skill-slider">

<div className="item">
<img src={html} alt="Image" />
<h5>Html</h5>
</div>

<div className="item">
<img src={css} style={{width:"140px"}} alt="Image" />
<h5>Css</h5>
</div>

<div className="item">
<img src={sass} alt="Image" />
<h5>Sass</h5>
</div>

<div className="item">
<img src={bs}  alt="Image" />
<h5>Bootstrap</h5>
</div>

<div className="item">
<img src={t}  alt="Image" />
<h5>TailwindCss</h5>
</div>

<div className="item">
<img src={js} style={{width:"250px"}} alt="Image" />
<h5>JavaScript</h5>
<ul className="align-items-center d-flex flex-column mx-auto text-secondary" >
  <li>OOP&nbsp; </li>
  <li>API&nbsp; &nbsp; </li>
  <li>AJAX</li>
  <li>JSON</li>
</ul>
</div>

<div className="item">
<img src={g} style={{backgroundColor:"white",borderRadius:"50%",padding:" 0 0 2px"}} alt="Image" />
<h5>Git & Github</h5>
</div>


<div className="item">
<img src={r} alt="Image" />
<h5>React JS</h5>
<ul className="align-items-center d-flex flex-column mx-auto text-secondary" >
  <li>Hooks&nbsp;&nbsp; </li>
  <li>Redux &nbsp;</li>
</ul>
</div>




</Carousel>
</Jump>
</div>

 </Col>
 </Row>
 </Container>
 <img className="background-image-left" src={colorSharp} alt="Image" />
 </section>
  )
}

export default skills