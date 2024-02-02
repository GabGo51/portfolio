import React from "react";
import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";

import Image1 from "./img/yeur.webp";
import Image3 from "./img/bout.webp";
import Image4 from "./img/gadgetgo.webp";
import Image5 from "./img/luigi.webp";
import Image6 from "./img/twitter.webp";
import Image7 from "./img/bloom1.webp";
import Image8 from "./img/bloom2.webp";
import Image9 from "./img/board.webp";
import Image10 from "./img/board2.webp";
import Image11 from "./img/board4.webp";
import Image12 from "./img/climb1.webp";
import Image13 from "./img/climb5.webp";
import Image14 from "./img/climb6.webp";
import Image15 from "./img/anime.webp";
import Image16 from "./img/climbb.webp";
import Image17 from "./img/climbbb.webp";
import Image18 from "./img/dimple.webp";
import Image19 from "./img/sanji.webp";

const imgs = [
  Image1,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
  Image9,
  Image10,
  Image11,
  Image12,
  Image13,
  Image14,
  Image15,
  Image16,
  Image17,
  Image18,
  Image19,
];

const Header2 = () => {
  const getRandomImage = () => imgs[Math.floor(Math.random() * imgs.length)];

  const [bubble1Src, setBubble1Src] = useState(getRandomImage());
  const [bubble2Src, setBubble2Src] = useState(getRandomImage());
  const [bubble3Src, setBubble3Src] = useState(getRandomImage());
  const [bubble4Src, setBubble4Src] = useState(getRandomImage());

  //state and timer for text animations probably a better way to go abt this
  const [showTitle, setShowTitle] = useState(false);
  const [showDelay, setShowDelay] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTitle(true);
    }, 250);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDelay(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const updateBubbles = () => {
      setBubble1Src(imgs[Math.floor(Math.random() * imgs.length)]);
      setTimeout(() => {
        setBubble2Src(imgs[Math.floor(Math.random() * imgs.length)]);
      }, 700);
      setTimeout(() => {
        setBubble3Src(imgs[Math.floor(Math.random() * imgs.length)]);
      }, 1400);
      setTimeout(() => {
        setBubble4Src(imgs[Math.floor(Math.random() * imgs.length)]);
      }, 2200);
    };

    const interval = setInterval(updateBubbles, 2500); // Update every second

    return () => {
      clearInterval(interval); // Clean up the interval when the component unmounts
    };
  }, []);

  const { scrollYProgress } = useScroll();

  const imageAnimation1 = useTransform(
    scrollYProgress,
    [0, 1],
    ["10px", "700px"]
  );
  const imageAnimation2 = useTransform(
    scrollYProgress,
    [0, 1],
    ["195px", "600px"]
  );
  const imageAnimation3 = useTransform(
    scrollYProgress,
    [0, 1],
    ["385px", "1000px"]
  );
  const imageAnimation4 = useTransform(
    scrollYProgress,
    [0, 1],
    ["560px", "1000px"]
  );

  const textAnimation1 = useTransform(scrollYProgress, [0, 1], [0, 3500]);
  const textAnimation2 = useTransform(scrollYProgress, [0, 1], [0, -3200]);
  const textAnimation3 = useTransform(scrollYProgress, [0, 1], [0, 3700]);
  const textAnimation4 = useTransform(scrollYProgress, [0, 1], [0, -3000]);
  const textSpring1 = useSpring(textAnimation1, { stiffness: 50, damping: 30 });
  const textSpring2 = useSpring(textAnimation2, { stiffness: 50, damping: 30 });
  const textSpring3 = useSpring(textAnimation3, { stiffness: 50, damping: 30 });
  const textSpring4 = useSpring(textAnimation4, { stiffness: 50, damping: 30 });

  return (
    <Container>
      <div className="box">
        <motion.img
          initial={{ scaleY: 0, width: 0 }}
          animate={{ scaleY: 1, width: "15vw" }}
          transition={{ duration: 1, delay:0.5 }}
          style={{
            left: "14vw",
            top: imageAnimation1,
          }}
          src={bubble1Src}
        />

        <motion.img
          initial={{ scaleY: 0, width: 0 }}
          animate={{ scaleY: 1, width: "15vw" }}
          transition={{ duration: 1, delay:0.5 }}
          style={{
            right: "22vw",
            top: imageAnimation2,
          }}
          src={bubble2Src}
        />
        <motion.img
          initial={{ scaleY: 0, width: 0 }}
          animate={{ scaleY: 1, width: "15vw" }}
          transition={{ duration: 1, delay:0.5 }}
          style={{
            left: "23vw",
            top: imageAnimation3,
          }}
          src={bubble3Src}
        />
        <motion.img
          initial={{ scaleY: 0, width: 0 }}
          animate={{ scaleY: 1, width: "15vw" }}
          transition={{ duration: 1, delay:0.5 }}
          style={{
            right: "10vw",
            top: imageAnimation4,
          }}
          src={bubble4Src}
        />
        <motion.div
          style={{
            translateX: textSpring1,
          }}
          className="name"
        >
          <motion.p className={`${showTitle ? " show" : ""}`}>Gabriel</motion.p>
        </motion.div>
        <motion.div
          className="lastname"
          style={{
            translateX: textSpring2,
          }}
        >
          <motion.p className={` ${showTitle ? " show" : ""}`}>
            Gosselin
          </motion.p>
        </motion.div>

        <motion.div
          style={{
            translateX: textSpring3,
          }}
          className="web"
        >
          <motion.p className={` ${showTitle ? " show" : ""}`}>Web</motion.p>
        </motion.div>
        <motion.div
          style={{
            translateX: textSpring4,
          }}
          className="dev"
        >
          <motion.p className={` ${showTitle ? " show" : ""}`}>
            DEVELOPER
          </motion.p>
        </motion.div>
      </div>
    </Container>
  );
};

const Container = styled.header`
  padding-top: 50px;
  background-color: black;
  color: white;
  height: 100vw;
  width: 100vw;
  line-height: 9.5vw;

  .box {
    position: fixed;
    mix-blend-mode: difference;
    z-index: 2;
    width: 100%;
  }
  img {
    mix-blend-mode: difference;
    position: absolute;
    background-color: white;
    object-fit: cover;
    background-position: top;

    height: 8vw;
    transform-origin: bottom;
  }

  p {
    mix-blend-mode: difference;
    text-transform: uppercase;
    font-size: 11vw;
    opacity: 0;
    transition: 1.2s;
    transform: translate3d(-15px, -15px, 100px) rotateX(90deg);
    &.show {
      opacity: 1;
      transform: translate3d(0, 0, 0) rotateX(0deg);
    }
  }

  .name {
    margin-left: 30vw;

    font-size: 11.5vw;

    p {
      font-family: Canter;
    }
  }
  .lastname {
    margin-left: 10vw;

    font-size: 11.5vw;
    p {
      font-family: Canter;
    }
  }
  .web {
    margin-left: 40vw;
  }

  .dev {
    margin-left: 15vw;
  }

  @media screen and (max-width: 600px) {
    height: 450px;
  }
`;

export default Header2;
