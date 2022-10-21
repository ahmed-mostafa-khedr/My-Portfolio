import React,{useState,useEffect} from 'react'
import mainPic from '../assets/img/mainPic.svg'
import { ArrowRightCircle } from 'react-bootstrap-icons';
import { Container, Row, Col } from "react-bootstrap";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Jump from 'react-reveal/Jump'


const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = [ "Reactjs Developer", "front-end Developer" ];
    const period = 2000;
  
    useEffect(() => {
      let ticker = setInterval(() => {
        tick();
      }, delta);
  
      return () => { clearInterval(ticker) };
    }, [text])
  
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
  
      setText(updatedText);
  
      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
      }
  
      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setIndex(prevIndex => prevIndex - 1);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setIndex(1);
        setDelta(500);
      } else {
        setIndex(prevIndex => prevIndex + 1);
      }
    }
  

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
        <Col  xs={12} md={6} xl={7} >
        <Jump><span className="tagline"> Welcome to my Portfolio</span></Jump>
       <h1>{`Hi! I'm Ahmed`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "React/", "frot-end Developer" ]'><span className="wrap">{text}</span></span></h1>
       
       <p  className='col-5 w-100 text-start '><span className='col-1 text-light'><i class="fa-solid fa-bookmark"></i></span> I'm a Front-End Web Developer with +1 Year Of Experience Designing and Building Responsive Web Apps.
       </p>


       <OverlayTrigger overlay={<Tooltip id="tooltip-disabled" ><b>01090723497</b></Tooltip>}>
      
       <button onClick={()=>console.log('connect')}>Lets Connect  <a className='text-light' href="tel:0-109-072-3497"><ArrowRightCircle  size={25}/></a></button>
       
    </OverlayTrigger>
       
       
       </Col>
       <Col xs={12} md={6} xl={5}>
         <img src={mainPic} alt="Header Img" />
       </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Banner