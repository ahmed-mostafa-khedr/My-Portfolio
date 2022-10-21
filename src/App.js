import React from 'react'
import './App.css'
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar }  from './components/NavBar'
import Banner from './components/Banner';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import { Footer } from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
    <NavBar />
    <Banner />
    <Skills />
    <About />
    
    <Projects />

    <Contact />
    <Footer />
    </div>
  )
}

export default App