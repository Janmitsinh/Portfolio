import 'animate.css';
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';
import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  // Adjust the base typing speed here (lower value = faster)
  const baseTypingSpeed = 5; // milliseconds
  const [delta, setDelta] = useState(baseTypingSpeed + Math.random() * 100); // Add some variation

  const toRotate = [ "Web Developer", "Web Designer", "UI/UX Designer" ];

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
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
      setDelta(baseTypingSpeed); // Reset to base speed after typing
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(5000); // Pause delay after rotation
    } else {
      // No change to delta here (keeps typing speed consistent)
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>Hi! I'm Janmit <br/> <span class="wrap"> Full Stack Developer</span></h1>
                  <p>Highly motivated junior Software engineer with a strong foundation in computer science principles and proficiency in JavaScript, TypeScript, 
                    and modern web development concepts. Possess a solid understanding of React core concepts and experience building dynamic and user-friendly web 
                    applications using React components, JSX, and state management techniques (e.g., Redux, Context API). Eager to leverage this knowledge and contribute
                    to the development of innovative and performant user interfaces at your company. Seeking a challenging role where I can further refine my React skills, 
                    collaborate with talented developers, and contribute to building beautiful and engaging web experiences.</p>
                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
