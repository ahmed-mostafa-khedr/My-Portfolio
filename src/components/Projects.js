import React from 'react'
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import p1 from "../assets/img/p1.png";
import p2 from "../assets/img/p2.png";
import p3 from "../assets/img/p3.png";
import p4 from "../assets/img/p4.png";
import p5 from "../assets/img/p5.png";
import p6 from "../assets/img/p6.png";
import p7 from "../assets/img/p7.png";
import p8 from "../assets/img/p8.png";
import p9 from "../assets/img/p9.png";
import p10 from "../assets/img/p10.png";

import ProjectCard from './ProjectCard';

const Projects = () => {
  
const fProjects = [

    {
      title: "leon Template",
      description: "Web Template  To Display The Work Of An Agency Or Company Or Team",
      imgUrl: p1,
      link:'https://leon-test-template.netlify.app'
    
    },
    {
      title: "Kasper Template",
      description: " Responsive Web Template includes more animations and effects  To Display The Work Of An Agency Or Company Or Team ",
      imgUrl: p2,
      link:'https://kasper-test-template.netlify.app/'
    },    
    {
      title: "Special native-js",
      description: " Responsive Web Site includes more animations and effects  To Display The Work Of Team",
      imgUrl: p3,
      link:'https://kasper-test-template.netlify.app/'
    },    
    {
      title: "Shopping Cart",
      description: " Responsive Web Site  Through it you can view products or subscribe to add products to your Cart ",
      imgUrl: p4,
      link:'https://simple-a-shopping-cart.netlify.app/'
    },    
    {
      title: "Bondi Template",
      description: " Responsive Web Template includes more animations and effects  To Display The Work Of An Agency Or Company Or Team ",
      imgUrl: p5,
      link:'https://bondi-template.netlify.app/'
    },
    {
      title: "Playes Matching Game",
      description: "Simple Test Game  Depend on matching between the two players  ",
      imgUrl: p6,
      link:'https://players-game.netlify.app'
    
    },
    {
      title: "Dates Reminder",
      description: "Simple page make a simple dates reminder with ability to view or delete all dates",
      imgUrl: p7,
      link:'https://dates-reminder.netlify.app'
    
    },
    {
      title: "Resturant Menu",
      description: "Simple Resturant Menu to view many meals with ability to serarch about fav food or wiew menu depend on food type by filter",
      imgUrl: p8,
      link:'https://resturant-small-menu.netlify.app'
      
    },
    {
      title: "Cinema Store",
      description: "movies web site fetch data from real api and view all details about movie",
      imgUrl: p9,
      link:'https://cinemaa-store.netlify.app'
    
    },    
    {
      title: "Smart Shopping",
      description: "small E-commerce website view many products and enable visitor to subscribe to can buy a products",
      imgUrl: p10,
      link:'https://smartt-shopping.netlify.app'
    
    },
  ];
  const sProjects = [

    {
      title: "Dates Reminder",
      description: "Simple page make a simple dates reminder with ability to view or delete all dates",
      imgUrl: p7,
      link:'https://dates-reminder.netlify.app'
    
    },
    {
      title: "Resturant Menu",
      description: "Simple Resturant Menu to view many meals with ability to serarch about fav food or wiew menu depend on food type by filter",
      imgUrl: p8,
      link:'https://resturant-small-menu.netlify.app'
      
    },
    {
      title: "Cinema Store",
      description: "movies web site fetch data from real api and view all details about movie",
      imgUrl: p9,
      link:'https://cinemaa-store.netlify.app'
    
    },    
    {
      title: "Smart Shopping",
      description: "small E-commerce website view many products and enable visitor to subscribe to can buy a products",
      imgUrl: p10,
      link:'https://smartt-shopping.netlify.app'
    
    },

  ]; 
   const tProjects = [

    {
      title: "Playes Matching Game",
      description: "Simple Test Game  Depend on matching between the two players  ",
      imgUrl: p6,
      link:'https://players-game.netlify.app'
    
    },

  ];


  return (
   <section className="project" id="project">
   <Container>
   <Row>
   <Col size={12}>
  
     <div>
       <h2>Projects</h2>
       <p>I enjoy every step of the developement process, from discussion and collaboration to concept and execution</p>
       <Tab.Container id="projects-tabs" defaultActiveKey="first">
         <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
           <Nav.Item>
             <Nav.Link eventKey="first">All</Nav.Link>
           </Nav.Item>
           <Nav.Item>
             <Nav.Link eventKey="second">React Projects</Nav.Link>
           </Nav.Item>
           <Nav.Item>
             <Nav.Link eventKey="third">Games JS</Nav.Link>
           </Nav.Item>
           
         </Nav>
         <Tab.Content id="slideInUp" >
           <Tab.Pane eventKey="first">
             <Row className='d-flex justify-content-center'>
               {
                 fProjects.map((project, index) => {
                   return (
                     <ProjectCard
                       key={index}
                       {...project}
                       />
                   )
                 })
               }
             </Row>
           </Tab.Pane>
           <Tab.Pane eventKey="second">
           <Row  className='d-flex justify-content-center'>
               {
                 sProjects.map((project, index) => {
                   return (
                     <ProjectCard
                       key={index}
                       {...project}
                       />
                   )
                 })
               }
             </Row>
           </Tab.Pane>
           <Tab.Pane eventKey="third">
           <Row  className='d-flex justify-content-center'>
               {
                 tProjects.map((project, index) => {
                   return (
                     <ProjectCard
                       key={index}
                       {...project}
                       />
                   )
                 })
               }
             </Row>
           </Tab.Pane>
         </Tab.Content>
       </Tab.Container>
     </div>
 
 </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="" />
    </section>
  )
}
  
export default Projects
