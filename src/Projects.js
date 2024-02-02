import React from "react";
import styled from "styled-components";
import alexe from './img/alexe.jpg'
import gogosse from './img/gogosse.gif'
import cms from "./img/CMS.webp"
import { useState, useEffect } from "react";
import { useContext } from "react";
import { MouseContext } from "./context/mouseContext";
import wfu from './img/wfu.PNG'

const Projects = () => {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    const titleElement = document.querySelector(".title2"); // Add class to your title element

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust this threshold as needed
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setShowTitle(true);
          }, 250);
          observer.disconnect(); // Stop observing once animation is triggered
        }
      });
    }, options);

    observer.observe(titleElement);

    return () => {
      observer.disconnect(); // Disconnect the observer when the component unmounts
    };
  }, []);
  return (
    <Container>
      <Title>
        <Proj className={`title2 ${showTitle ? "show" : ""}`}>PROJECTS &</Proj>
        <Feat className={`title2 ${showTitle ? "show" : ""}`}>FEATURED WORKS</Feat>
      </Title>
      <Project1
        onMouseEnter={() => cursorChangeHandler("hovered")}
        onMouseLeave={() => cursorChangeHandler("")}
      >
        <h2 className="gogosse"> GOGOSSE</h2>
        <a target="#" href="https://gogosse.vercel.app">
          

          <Proj4 controls autoplay  src={gogosse} />
        </a>
        <a
          target="#"
          href="https://github.com/GabGo51/gogosse"
          onMouseEnter={() => cursorChangeHandler("button")}
          onMouseLeave={() => cursorChangeHandler("hovered")}
        >
          <i className="one fa-brands fa-square-github"></i>
        </a>
      </Project1>
      <Project1
        onMouseEnter={() => cursorChangeHandler("hovered")}
        onMouseLeave={() => cursorChangeHandler("")}
      >
        <a target="#" href="https://wefinanceu.vercel.app">
          

          <Proj4 controls autoplay  src={alexe} />
        </a>

        <h2 className="alex"> ALEXANDRA NICOLOV</h2>
        <a
          target="#"
          href="https://github.com/GabGo51/wefinanceu"
          onMouseEnter={() => cursorChangeHandler("button")}
          onMouseLeave={() => cursorChangeHandler("hovered")}
        >
          <i className="one fa-brands fa-square-github"></i>
        </a>
      </Project1>
      <Project1
        onMouseEnter={() => cursorChangeHandler("hovered")}
        onMouseLeave={() => cursorChangeHandler("")}
      >
        <a target="#" href="alexandranicolov.com">
         
            
          

        <Proj4 controls autoplay  src={wfu} />
        </a>
        <h2 className="we"> WeFinanceU</h2>
        <a
          target="#"
          href="https://github.com/GabGo51/alexandranicolov"
          onMouseEnter={() => cursorChangeHandler("button")}
          onMouseLeave={() => cursorChangeHandler("hovered")}
        >
          <i className="alexe fa-brands fa-square-github"></i>
        </a>
      </Project1>
      <Project1
        onMouseEnter={() => cursorChangeHandler("hovered")}
        onMouseLeave={() => cursorChangeHandler("")}
      >
        <a target="#" href="https://medecinesportivelaurentides.com">
         
        <h2 className="cms"> CMS</h2>
          

          <Proj2 src={cms} />
        </a>
        <a
          target="#"
          href="https://github.com/GabGo51/cms-website"
          onMouseEnter={() => cursorChangeHandler("button")}
          onMouseLeave={() => cursorChangeHandler("hovered")}
        >
          <i className="two fa-brands fa-square-github"></i>
        </a>
      </Project1>
      
      
      
    </Container>
  );
};

//background attachement fixed for the cool img that stay

const Container = styled.div`
  background-color: black;
  width: 100vw;
  color: white;
  padding-bottom: 10vw;
  padding-top: 15vw;
  z-index: 30;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  i {
    position: absolute;
    top:30px;
    left: 30px;
    scale: 2;
    color: black;
    @media screen and (max-width: 1200px) {
      display: none;
    }
  }

  h2{
    z-index: 999;
    position: absolute;
    left: 50%;
    top:50%;
    transform: translate(-50%, -120%);
    font-size: clamp(30px,8vw , 150px);
    color: grey;
    
    text-align: center;
    ;
    
  }

  .gogosse{
    color: #b1f3a9;
    text-shadow: -1px 4px 11px rgba(118, 128, 125, 1);
  }

  .alex{
    color: white ;
  }

  .we{
    color: black;
    text-shadow: -1px 4px 11px rgba(118, 128, 125, 1);
  }

  .cms{
    color: #c7d324;
    
  }

  
  @media screen and (max-width: 500px) {
      padding-top: 25vw;
    }
`;

const Title = styled.div`
  font-size: 8vw;
  line-height: 6.5vw;
  margin-bottom: 8vw;
  @media screen and (max-width: 600px) {
    line-height:35px
  }
`;
const Proj = styled.p`
  font-family: Canter;
  font-style: italic;
  font-size: 9.1vw;
  opacity: 0;
  transition: 1.2s;
  transform: translate3d(-15px, -15px, 100px) rotateX(90deg);
  &.show {
    opacity: 1;
    transform: translate3d(0, 0, 0) rotateX(0deg);
  }
`;
const Feat = styled.p`
  opacity: 0;
  transition: 1.2s;
  transform: translate3d(-15px, -15px, 100px) rotateX(90deg);
  &.show {
    opacity: 1;
    transform: translate3d(0, 0, 0) rotateX(0deg);
  }
`;

const Project1 = styled.div`
mix-blend-mode: difference;
  position: relative;
  margin-top: -10px;
  .two {
    color: white;
  }
  .title1{
    position: absolute;
  color: white;
  font-weight: 200;
  left: 5vw;
  font-size: 5.2vw;
  border-bottom: 3px solid white;
  transform: translateY(10%);
  }
`;


const Proj2 = styled.img`
  
  width: 100vw;
`;
const Proj4 = styled.img`
  margin-top: 0px;
  width: 100vw;
  height: 60vw;
  object-fit: cover;

  .alex{
    color: black;
  }
`;








export default Projects;
