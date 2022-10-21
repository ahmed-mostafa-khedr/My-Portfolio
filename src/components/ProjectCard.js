import React from 'react'
import { Col,Button } from "react-bootstrap";
import { Zoom } from 'react-reveal';
const ProjectCard = ({ title, description, imgUrl,link}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <Zoom>
    <div className="proj-imgbx">
    <img src={imgUrl} style={{height:"100%"}} alt=""/>
    <div className="proj-txtx">
      <h4>{title}</h4>
      <p className="text-light text-center w-100 mx-1" style={{fontSize:"10px"}}>{description}</p>
      <Button  href={link} className="btn-Card">view</Button>
      
     </div>

    
  </div>
  </Zoom>

    </Col>
  )
}

export default ProjectCard
