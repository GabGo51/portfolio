import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { MouseContext } from "./context/mouseContext";
import test from "./img/gogoseimg.png";
import cms from "./img/CMS.webp";
import alexe from "./img/alexe.PNG";
import wfu from "./img/wfu.PNG";

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
        <p className={`title2 ${showTitle ? "proj show" : " project"}`}>
          PROJECTS &
        </p>
        <p className={`title2 ${showTitle ? "featured show" : "featured"}`}>
          FEATURED WORKS
        </p>
      </Title>
      <ProjectsBox>
        <div className="project">
          <p>GOGOSSE</p>
          <p className="subtitle">GRAPHIC DESIGN PORTFOLIO</p>
          <a target="#" href="https://gogosse.vercel.app">
            <div
              onMouseEnter={() => cursorChangeHandler("hovered")}
              onMouseLeave={() => cursorChangeHandler("")}
            >
              <img src={test} />
            </div>
          </a>
        </div>
        <div className="project">
          <p>ALEXANDRA NICOLOV</p>
          <p className="subtitle">PHOTOGRAPHY PORTFOLIO</p>
          <a target="#" href="https://www.alexandranicolov.com">
            <div
              onMouseEnter={() => cursorChangeHandler("hovered")}
              onMouseLeave={() => cursorChangeHandler("")}
            >
              <img src={alexe} />
            </div>
          </a>
        </div>
        <div className="project">
          <p>WEFINANCEU</p>
          <p className="subtitle">FINANCE</p>
          <a target="#" href="https://wefinanceu.vercel.app">
            <div
              onMouseEnter={() => cursorChangeHandler("hovered")}
              onMouseLeave={() => cursorChangeHandler("")}
            >
              <img src={wfu} />
            </div>
          </a>
        </div>
        <div className="project">
          <p>CMS LAURENTIDE</p>
          <p className="subtitle">HEALT CARE</p>
          <a target="#" href="https://medecinesportivelaurentides.com" >
            <div
            onMouseEnter={() => cursorChangeHandler("hovered")}
            onMouseLeave={() => cursorChangeHandler("")}
          >
            <img src={cms} />
          </div>
          </a>
          
        </div>
      </ProjectsBox>
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

  @media screen and (max-width: 500px) {
    padding-top: 25vw;
  }
`;

const Title = styled.div`
  font-size: 8vw;
  line-height: 6.5vw;
  margin-bottom: 8vw;
  @media screen and (max-width: 600px) {
    line-height: 35px;
  }

  .proj {
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
  }

  .featured {
    opacity: 0;
    transition: 1.2s;
    transform: translate3d(-15px, -15px, 100px) rotateX(90deg);
    &.show {
      opacity: 1;
      transform: translate3d(0, 0, 0) rotateX(0deg);
    }
  }
`;

const ProjectsBox = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  .project {
    width: 47%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;

    p {
      font-size: clamp(10px, 5vw, 60px);
      text-align: center;
      font-family: Canter;
      font-style: italic;
    }

    .subtitle {
      font-size: clamp(10px, 2vw, 24px);
      font-family: PasCanter;
      font-style: normal;
      font-weight: 300;
      margin-bottom: 20px;
    }

    div {
      width: 100%;
      
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    img {
      transition: 1s;
      width: 100%;
      

      &:hover {
        scale: 1.1;
      }
    }

    a{
      width: 100%;
    }
  }
`;

export default Projects;
