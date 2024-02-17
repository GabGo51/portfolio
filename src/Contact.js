import React from "react";
import { styled } from "styled-components";
import { useState, useRef, useEffect } from "react";
import { useContext } from "react";
import { MouseContext } from "./context/mouseContext";
import PDF from "./img/CV.pdf";

const Contact = () => {
  const {cursorChangeHandler } = useContext(MouseContext);
  const iconRef = useRef(null);
  const [rotationAngle, setRotationAngle] = useState(0);

  const updateRotation = (event) => {
    const icon = iconRef.current;
    if (icon) {
      const { left, top, width, height } = icon.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height;
      const angle = Math.atan2(
        event.clientY - centerY,
        event.clientX - centerX
      );
      setRotationAngle((angle * 180) / Math.PI + 95);
    }
  };

  useEffect(() => {
    const icon = iconRef.current;

    if (!icon) return;

    // Create an Intersection Observer to check if the icon is in the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        const isIconOnScreen = entries[0].isIntersecting;
        if (isIconOnScreen) {
          // Attach the mousemove event listener when the icon is on the screen
          window.addEventListener('mousemove', updateRotation);
        } else {
          // Detach the mousemove event listener when the icon is not on the screen
          window.removeEventListener('mousemove', updateRotation);
        }
      },
      {
        root: null,
        threshold: 0.5, // Adjust this threshold as needed
      }
    );

    // Start observing the icon element
    observer.observe(icon);

    // Cleanup the observer when the component unmounts
    return () => observer.disconnect();
  }, []);

  const handleEmailButtonClick = () => {
    const email = "gosselin.gabriel@outlook.com";
    const subject = "Portfolio Contact";
    const body = "";

    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.open(mailtoUrl);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Container>
      <Box>
        <Title>LET'S GET</Title>
        <Title2>IN TOUCH</Title2>
      </Box>

      <Content>
        <button
          onClick={handleEmailButtonClick}
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}
        >
          E-mail
        </button>

        <a target="#" href={PDF}>
          <button
            onMouseEnter={() => cursorChangeHandler("hovered")}
            onMouseLeave={() => cursorChangeHandler("")}
          >
            CV
          </button>
        </a>
        <a
          target="#"
          href="https://www.linkedin.com/in/gabriel-gosselin-802bb5247/"
        >
          <button
            onMouseEnter={() => cursorChangeHandler("hovered")}
            onMouseLeave={() => cursorChangeHandler("")}
          >
            Linkedin
          </button>
        </a>
        <a target="#" href="https://github.com/GabGo51">
          <button
            onMouseEnter={() => cursorChangeHandler("hovered")}
            onMouseLeave={() => cursorChangeHandler("")}
          >
            GitHub
          </button>
        </a>
      </Content>

      <IconContainer ref={iconRef} rotation={rotationAngle}>
        <i className="fa-solid fa-hand-point-up"></i>
      </IconContainer>
      <Top
        onClick={scrollToTop}
        onMouseEnter={() => cursorChangeHandler("hovered")}
        onMouseLeave={() => cursorChangeHandler("")}
      >
        <i className="fa-solid fa-arrow-up"></i>
      </Top>
      <Footer>
        <p>Gabriel Gosselin</p>
        <p>gosselin.gabriel@outlook.com || +1 (450) 712 7842</p>
      </Footer>
    </Container>
  );
};
const Container = styled.div`
  position: relative;
  margin-top: -5vw;
  background-color: black;
  color: white;
  width: 100vw;
  transition: transform 0.2s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 200px;
  z-index: 99;
  i {
    scale: 5;

    @media (max-width: 1000px) {
      display: none;
    }
  }
  @media (max-width: 500px) {
  }
`;

const Box = styled.div`
  line-height: 6.5vw;
  margin-bottom: 5vw;
  @media (max-width: 500px) {
    line-height: 8.5vw;
    
  }
`;

const Title = styled.h3`
  font-family: Canter;
  font-size: 10vw;
  font-style: italic;
  font-weight: 200;
`;
const Title2 = styled.h3`
  font-size: 9.4vw;
  font-weight: 400;
`;

const Content = styled.section`
  margin-bottom: 10vw;
  width: 60vw;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 800px) {
    flex-direction: column;
    width: 100vw;
    align-items: center;
    justify-content: center;
  }
  button {
    height: 100px;
    width: 100px;
    border: 2px solid white;
    background-color: transparent;
    color: white;
    font-weight: bold;
    transition: 0.4s;
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
    border-top-right-radius: 30%;
    &:hover {
      background-color: white;
      color: black;
      border-top-left-radius: 50%;
      border-top-right-radius: 50%;
      border-bottom-right-radius: 0%;
      border-bottom-left-radius: 30%;
    }

    @media (max-width: 800px) {
      width: 40vw;
      margin: 3vw 0vw;
      border-radius: 0%;
      height: 50px;
      &:hover{
        border-radius: 0%;
      }

    }
  }
`;
const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.2s ease-out;
  transform-origin: bottom center;
  transform: rotate(${(props) => props.rotation}deg);
  i {
    font-size: 2rem;
  }

  @media (max-width: 500px) {
    font-size: 3vw;
    display: none;
  }
`;

const Top = styled.div`
  position: absolute;
  bottom: 5vw;
  right: 5vw;
  transition: 200ms;

  &:hover {
    transform: translateY(-60%);
  }

  @media (max-width: 500px) {
    scale: 0.4;
  }
`;

const Footer = styled.div`
  position: absolute;
  bottom: 1vw;
  left: 1vw;
  opacity: 0.5;
  font-size: 1vw;

  @media (max-width: 500px) {
    font-size: 3vw;
  }
`;

export default Contact;
