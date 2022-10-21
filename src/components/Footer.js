import { Container, Row, Col } from "react-bootstrap";

import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import git from "../assets/img/git.png";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center d-flex justify-content-between">
        <Col size={12} sm={6} className=" d-flex justify-content-start">
          <OverlayTrigger  placement="top"  overlay={<Tooltip  id="tooltip"><b>01090723497</b></Tooltip>}>
              <a href="tel:0-109-072-3497" style={{textDecoration:"none"}} className="text-light justify-content-center d-flex flex-column "><i class="fa-solid fa-phone" style={{fontSize:"30px"}}></i></a>
            </OverlayTrigger>
            <div className="social-icon">
              <a href="https://www.facebook.com/profile.php?id=100020411474170"><img src={navIcon2} alt="" /></a>
            <a href="https://www.linkedin.com/in/ahmed-mostafa-777b64218/"><img src={navIcon1} alt="" /></a>
              <a href="https://github.com/ahmed-mostafa-khedr"><img style={{width:"50%" ,borderRadius:"50%",backgroundColor:"white"}} className="x" src={git} alt="" /></a>
            </div>
           
          </Col>
          <Col size={12} sm={6}  className="text-end">
          <p>Copyright 2022. All Rights Reserved</p>
          </Col>

        </Row>
      </Container>
    </footer>
  )
}