import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { MouseContext } from "./context/mouseContext";
import test from "./img/gogoseimg.png";
import cms from "./img/CMS.webp";
import alexe from "./img/alexe.PNG";
import wfu from "./img/wfu.PNG";
import { motion } from "framer-motion";

const Projects = () => {
  const { cursorChangeHandler } = useContext(MouseContext);
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
        <p className={`title2 ${showTitle ? "proj show" : " proj"}`}>
          PROJECTS &
        </p>
        <p className={`title2 ${showTitle ? "featured show" : "featured"}`}>
          FEATURED WORKS
        </p>
      </Title>
      <ProjectsBox>
        <div className="project">
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            GOGOSSE
          </motion.p>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="subtitle"
          >
            GRAPHIC DESIGN PORTFOLIO
          </motion.p>
          <a target="#" href="https://www.gogosse.space">
            <img
              onMouseEnter={() => cursorChangeHandler("hovered")}
              onMouseLeave={() => cursorChangeHandler("")}
              alt="project"
              src={test}
            />
          </a>
        </div>
        <div className="project">
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            ALEXANDRA NICOLOV
          </motion.p>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="subtitle"
          >
            PHOTOGRAPHY PORTFOLIO
          </motion.p>
          <a target="#" href="https://www.alexandranicolov.com">
            <div
              onMouseEnter={() => cursorChangeHandler("hovered")}
              onMouseLeave={() => cursorChangeHandler("")}
            >
              <img alt="project" src={alexe} />
            </div>
          </a>
        </div>
        <div className="project">
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            WEFINANCEU
          </motion.p>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="subtitle"
          >
            FINANCE STARTUP SHOWCASE WEBSITE
          </motion.p>
          <a target="#" href="https://wefinanceu.vercel.app">
            <div
              onMouseEnter={() => cursorChangeHandler("hovered")}
              onMouseLeave={() => cursorChangeHandler("")}
            >
              <img alt="project" src={wfu} />
            </div>
          </a>
        </div>
        <div className="project">
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            CMS LAURENTIDE
          </motion.p>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="subtitle"
          >
            HEALTCARE CLINIC WEBSITE WITH BOOKING FORM
          </motion.p>
          <a target="#" href="https://medecinesportivelaurentides.com">
            <div
              onMouseEnter={() => cursorChangeHandler("hovered")}
              onMouseLeave={() => cursorChangeHandler("")}
            >
              <img alt="project" src={cms} />
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
  padding-bottom: 200px;
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
    width: 50%;
    height: 35vw;
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
      font-size: clamp(10px, 2vw, 20px);

      font-weight: 300;
      margin-bottom: 20px;
      font-style: normal;
      font-family: PasCanter;
    }

    img {
      transition: 1s;
      width: 100%;
      height: 23.5vw;
      object-fit: contain;

      &:hover {
        scale: 1.05;
      }
    }

    a {
      width: 100%;
    }

    @media (max-width: 1100px) {
      width: 90%;
      img {
        height: auto;
        object-fit: cover;
      }

      margin: 15vw 0;
    }
  }
`;

export default Projects;
