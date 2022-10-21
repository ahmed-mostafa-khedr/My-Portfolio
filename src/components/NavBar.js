import React from "react";
import { useState,useEffect } from 'react'
import { Navbar, Nav, Container } from "react-bootstrap";

import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'

import {BrowserRouter as Router} from "react-router-dom";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }
return (
  <Router>
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand className="  " style={{color:"white",borderRadius:"50%"}} href="/">
          <i class="fa-regular fa-file-code logo" style={{fontSize:"65px", color:" #fff" ,boxShadow: "0px 0px 50px white", borderRadius: "20px",backgroundColor:"rgba(204, 204, 204, 0.267)"}}></i>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Skills')}>Skills</Nav.Link>
            <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')} >About</Nav.Link>
                       <Nav.Link href="#project" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')} >Projects</Nav.Link>
            <Nav.Link href="#connect" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')} >Contact</Nav.Link>
            </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.facebook.com/profile.php?id=100020411474170"><img src={navIcon2} alt="" /></a>
              <a href="https://www.linkedin.com/in/ahmed-mostafa-777b64218/"><img src={navIcon1} alt="" /></a>
              <a href="https://github.com/ahmed-mostafa-khedr"><i style={{fontSize:"28px",color:"white" }}  class="fa-brands fa-github x"></i></a>
            </div>
            <OverlayTrigger  placement="bottom"  overlay={<Tooltip  id="tooltip"><b>01090723497</b></Tooltip>}>
              <button className="vvd"><span>Let’s Connect</span></button>
            </OverlayTrigger>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </Router>
)
}


