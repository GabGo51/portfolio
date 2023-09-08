import React from "react";
import { styled } from "styled-components";

//shitty way of importing xd
import Image1 from "./img/yeur.PNG";
import Image3 from "./img/bout.jpg";
import Image4 from "./img/gadgetgo.png";
import Image5 from "./img/luigi.PNG";
import Image6 from "./img/twitter.PNG";
import Image7 from "./img/bloom1.PNG";
import Image8 from "./img/bloom2.PNG";
import Image9 from "./img/board.PNG";
import Image10 from "./img/board2.PNG";
import Image11 from "./img/board4.PNG";
import Image12 from "./img/climb1.PNG";
import Image13 from "./img/climb5.PNG";
import Image14 from "./img/climb6.PNG";
import Image15 from "./img/anime.PNG";
import Image16 from "./img/climbb.PNG";
import Image17 from "./img/climbbb.PNG";
import Image18 from "./img/dimple.PNG";
import Image19 from "./img/sanji.PNG";

import { useState, useEffect } from "react";
//This compo has the main text and img
const Header = () => {
  //array of img to pick them randomly
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
  //radom picking
  const [bubble1Src, setBubble1Src] = useState(
    imgs[Math.floor(Math.random() * imgs.length)]
  );
  const [bubble2Src, setBubble2Src] = useState(
    imgs[Math.floor(Math.random() * imgs.length)]
  );
  const [bubble3Src, setBubble3Src] = useState(
    imgs[Math.floor(Math.random() * imgs.length)]
  );
  const [bubble4Src, setBubble4Src] = useState(
    imgs[Math.floor(Math.random() * imgs.length)]
  );

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

  //making the image change eache x amt of ml second
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

  //section for the movement on scroll
  const [scrollAmount, setScrollAmount] = useState(0);
  const updateScrollProgress = () => {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const currentScroll = window.scrollY;
    const progress = (currentScroll / maxScroll) * 100;
    if(progress>25){
      setScrollAmount(0)
    }else{
      setScrollAmount(progress*10);
    }
    
  };

  useEffect(() => {
    // Add the event listener to the 'scroll' event
    window.addEventListener("scroll", updateScrollProgress);

    // Remove the event listener when the component unmounts to prevent memory leaks
    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
    };
  }, []);

  
  const screeWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  let screenScrollNumber = 10;

  if (screeWidth < 1000) {
    screenScrollNumber = 5;
  }
  if (screeWidth < 500) {
    screenScrollNumber = 2;
  }

  return (
    <Box showDelay={showDelay} scrollAmount={scrollAmount}>
      <Container showDelay={showDelay} scrollAmount={scrollAmount}>
        <Name
          showDelay={showDelay}
          className={showTitle ? "show" : ""}
          scrollAmount={scrollAmount / screenScrollNumber}
        >
          GABRIEL
        </Name>
        <LastName
          showDelay={showDelay}
          className={showTitle ? "show" : ""}
          scrollAmount={scrollAmount / screenScrollNumber}
        >
          GOSSELIN
        </LastName>
        <Digital
          showDelay={showDelay}
          className={showTitle ? "show" : ""}
          scrollAmount={scrollAmount / screenScrollNumber}
        >
          WEB
        </Digital>
        <Portfoio
          showDelay={showDelay}
          className={showTitle ? "show" : ""}
          scrollAmount={scrollAmount / screenScrollNumber}
        >
          DEVELOPER
        </Portfoio>
        <i
          scrollAmount={scrollAmount}
          className="fa-solid fa-arrow-turn-down"
        ></i>
      </Container>
      <Bubble scrollAmount={scrollAmount * 1.8} src={bubble1Src}></Bubble>
      <Bubble2
        scrollAmount={126.5 + scrollAmount * 1.8}
        src={bubble2Src}
      ></Bubble2>
      <Bubble3
        scrollAmount={258 + scrollAmount * 1.8}
        src={bubble3Src}
      ></Bubble3>
      <Bubble4
        scrollAmount={386 + scrollAmount * 1.8}
        src={bubble4Src}
      ></Bubble4>
    </Box>
  );
};

const Box = styled.div`
  background-color: black;
  color: white;
  padding-top: 50px;
  padding-bottom: 100vw;
  width: 100vw;
  @media screen and (max-width: 600px) {
    padding-bottom: 500px;
  }

  img {
    object-fit: cover;
    background-position: top;
  }
  line-height: 9.5vw;
`;

const Container = styled.div`
  position: fixed;
  color: white;
  mix-blend-mode: difference;
  z-index: 2;
  i {
    position: absolute;
    right: -20px;
    top: 42vw;
    scale: 2.5;
    transform: ${({ scrollAmount }) =>
      scrollAmount ? `translateY(${scrollAmount}%)` : `translateX(0%)`};
  }

  @media screen and (max-width: 600px) {
    line-height: 45px;
  }
`;
const Name = styled.p`
  margin-left: 30vw;
  font-family: Canter;
  font-size: 12.8vw;
  font-style: italic;
  margin-bottom: 0.8vw;
  color: white;
  mix-blend-mode: difference;
  z-index: 20;
  opacity: 0;
  transition: ${({ showDelay }) => (showDelay ? `0.1s` : `1.2s`)};
  transform: translate3d(-15px, -15px, 0) rotate3d(1, 0.05, 0.03, 90deg);
  &.show {
    opacity: 1;
    transform: ${({ scrollAmount }) =>
      scrollAmount
        ? `translateX(${scrollAmount}%) translate3d(0, 0, 0) rotateX(0deg)`
        : `translateX(0%)`};
  }
`;
const LastName = styled.p`
  margin-left: 10vw;
  font-family: Canter;
  font-size: 12.8vw;
  font-style: italic;

  opacity: 0;
  transition: ${({ showDelay }) => (showDelay ? `0.1s` : `1.2s`)};
  transform: translate3d(-15px, -15px, 0) rotate3d(1, -0.05, -0.03, 90deg);
  &.show {
    opacity: 1;
    transform: ${({ scrollAmount }) =>
      scrollAmount
        ? `translateX(-${scrollAmount}%) translate3d(0, 0, 0) rotateX(0deg)`
        : `translateX(0%)`};
  }
`;
const Digital = styled.p`
  margin-left: 40vw;
  font-weight: 300;
  font-size: 11.6vw;
  margin-bottom: 0.8vw;
  opacity: 0;
  transition: ${({ showDelay }) => (showDelay ? `0.1s` : `1.2s`)};
  transform: translate3d(-15px, -15px, 0) rotate3d(1, 0.05, 0.03, 90deg);
  &.show {
    opacity: 1;
    transform: ${({ scrollAmount }) =>
      scrollAmount
        ? `translateX(${scrollAmount}%) translate3d(0, 0, 0) rotateX(0deg)`
        : `translateX(0%)`};
  }
`;
const Portfoio = styled.p`
  margin-left: 12vw;
  font-weight: 300;
  font-size: 11.6vw;
  opacity: 0;
  transition: ${({ showDelay }) => (showDelay ? `0.1s` : `1.2s`)};
  transform: translate3d(-15px, -15px, 0) rotate3d(1, -0.05, -0.03, 90deg);

  &.show {
    opacity: 1;
    transform: ${({ scrollAmount }) =>
      scrollAmount
        ? `translateX(-${scrollAmount}%) translate3d(0, 0, 0) rotateX(0deg)`
        : `translateX(0%)`};
  }
`;

const Bubble = styled.img`
  width: 15vw;
  height: 8vw;
  background-color: white;
  position: absolute;
  left: 12vw;
  background-color: #ececec;
  transform: ${({ scrollAmount }) =>
    scrollAmount ? `translateY(${scrollAmount}%)` : `translateY(0%)`};

  @media screen and (max-width: 600px) {
    width: 25vw;
    height: 15vw;
    top: 5vw;
    left: 4vw;
  }
`;
const Bubble2 = styled.img`
  width: 15vw;
  height: 8vw;
  background-color: white;
  position: absolute;
  right: 18vw;
  background-color: #ececec;
  transform: ${({ scrollAmount }) =>
    scrollAmount ? `translateY(${scrollAmount}%)` : `translateY(126.5%)`};
  @media screen and (max-width: 600px) {
    width: 25vw;
    height: 15vw;
    right: 5vw;
    top: 9vw;
  }
`;
const Bubble3 = styled.img`
  width: 15vw;
  height: 8vw;
  background-color: white;
  position: absolute;
  left: 22.5vw;
  transform: ${({ scrollAmount }) =>
    scrollAmount ? `translateY(${scrollAmount}%)` : `translateY(258%)`};
  /* transform:translateY(240%); */
  background-color: #ececec;
  @media screen and (max-width: 600px) {
    width: 25vw;
    height: 15vw;
    top: 20vw;
  }
`;
const Bubble4 = styled.img`
  width: 15vw;
  height: 8vw;
  background-color: white;
  position: absolute;
  right: 10vw;
  transform: ${({ scrollAmount }) =>
    scrollAmount ? `translateY(${scrollAmount}%)` : `translateY(386%)`};
  /* transform:translateY(360%); */
  background-color: #ececec;
  mix-blend-mode: difference;
  @media screen and (max-width: 600px) {
    width: 25vw;
    height: 15vw;
  }
`;
export default Header;
