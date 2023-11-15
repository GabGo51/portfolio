import React from "react";
import styled from "styled-components";
import proj1 from "./img/proj1.webp";
import proj3 from "./img/proj3.webp";
import cms from "./img/CMS.webp"
import { useState, useEffect } from "react";
import { useContext } from "react";
import { MouseContext } from "./context/mouseContext";

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
        <a target="#" href="https://cms-website-pi.vercel.app/">
         
            <h3 className="title1">CMS</h3>
          

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
      <Project1
        onMouseEnter={() => cursorChangeHandler("hovered")}
        onMouseLeave={() => cursorChangeHandler("")}
      >
        <a target="#" href="https://plant-care-app.vercel.app/">
          <Bloom>BLOOM</Bloom>

          <Proj1 src={proj1} />
        </a>
        <a
          target="#"
          href="https://github.com/GabGo51/plant-care-app"
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
        <a target="#" href="https://gadgetgo.vercel.app/">
          
            <Social>GADGETGO</Social>
          

          <Proj2 src={proj3} />
        </a>
        <a
          target="#"
          href="https://github.com/jasmineplqn/E-commerce-Website"
          onMouseEnter={() => cursorChangeHandler("button")}
          onMouseLeave={() => cursorChangeHandler("hovered")}
        >
          <i className="three fa-brands fa-square-github"></i>
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
    top: 1vw;
    left: 2vw;
    scale: 2;
    color: black;
    @media screen and (max-width: 1200px) {
      display: none;
    }
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

const Proj1 = styled.img`
  width: 100vw;
`;
const Proj2 = styled.img`
  margin-top: -10px;
  width: 100vw;
`;

const Bloom = styled.p`
  position: absolute;
  color: black;
  right: 5vw;
  font-size: 5.2vw;
  border-bottom: 0.5vw solid black;
`;




const Social = styled.p`
  position: absolute;
  color: black;
  left: 5vw;
  top: -1.5vw;
  font-size: 5.2vw;
  border-bottom: 0.5vw solid black;
  transform: translateY(20%);
`;

export default Projects;
