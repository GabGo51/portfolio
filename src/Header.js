import React from 'react'
import { styled } from 'styled-components'
import Image1 from "./img/yeur.PNG"

import Image3 from "./img/bout.jpg"
import Image4 from "./img/gadgetgo.png"
import Image5 from "./img/luigi.PNG"
import Image6 from "./img/twitter.PNG"
import Image7 from "./img/bloom1.PNG"
import Image8 from "./img/bloom2.PNG"
import Image9 from "./img/board.PNG"
import Image10 from "./img/board2.PNG"
import Image11 from "./img/board4.PNG"
import Image12 from "./img/climb1.PNG"
import Image13 from "./img/climb5.PNG"
import Image14 from "./img/climb6.PNG"
import Image15 from "./img/anime.PNG"
import Image16 from "./img/climbb.PNG"
import Image17 from "./img/climbbb.PNG"
import Image18 from "./img/dimple.PNG"
import Image19 from "./img/sanji.PNG"

import { useState, useEffect } from 'react'
const Header = () => {
  const imgs = [Image1, Image3, Image4, Image5, Image6, Image7, Image8, Image9, Image10, Image11, Image12, Image13,Image14,Image15, Image16, Image17, Image18, Image19] 

  const [bubble1Src, setBubble1Src] = useState(imgs[Math.floor(Math.random() * imgs.length)]);  
  const [bubble2Src, setBubble2Src] = useState(imgs[Math.floor(Math.random() * imgs.length)]);
  const [bubble3Src, setBubble3Src] = useState(imgs[Math.floor(Math.random() * imgs.length)]);
  const [bubble4Src, setBubble4Src] = useState(imgs[Math.floor(Math.random() * imgs.length)]);

  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTitle(true);
    }, 500);

    
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

  const [scrollAmount, setScrollAmount] = useState(0);
  
  useEffect(() => {
    // Function to update the scroll amount state whenever the user scrolls.
    const handleScroll = () => {
      // Use requestAnimationFrame to throttle the updates
      requestAnimationFrame(() => {
        setScrollAmount(window.scrollY / 5);
      });
    };
    // Add the event listener to the 'scroll' event
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component unmounts to prevent memory leaks
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  
  return (
    <Box scrollAmount = {scrollAmount}>
      <Container scrollAmount = {scrollAmount}>
        <Name className={showTitle ? 'show' : ''} scrollAmount = {scrollAmount/10}>GABRIEL</Name>
        <LastName className={showTitle ? 'show' : ''} scrollAmount = {scrollAmount/10}>GOSSELIN</LastName>
        <Digital className={showTitle ? 'show' : ''} scrollAmount = {scrollAmount/10}>WEB</Digital>
        <Portfoio className={showTitle ? 'show' : ''} scrollAmount = {scrollAmount/10}>DEVELOPER</Portfoio>
        <i scrollAmount = {scrollAmount} className="fa-solid fa-arrow-turn-down"></i>
      </Container>
      <Bubble scrollAmount = {scrollAmount*1.8} src={bubble1Src}></Bubble>
      <Bubble2 scrollAmount = {126.5 + scrollAmount*1.8}  src={bubble2Src}></Bubble2>
      <Bubble3 scrollAmount = {258 + scrollAmount*1.8}   src={bubble3Src}></Bubble3>
      <Bubble4 scrollAmount = {386 + scrollAmount*1.8} src={bubble4Src} ></Bubble4>
    </Box>
  )
}

const Box = styled.div`
background-color: black;
color: white;
padding-top: 50px;
padding-bottom: 1700px;
width: 100vw;
@media screen and (max-width: 600px) {
  padding-bottom: 650px;
}
img{
  object-fit: cover;
  background-position: top;
}
line-height: 9.5vw;
`

const Container = styled.div`
position: fixed;
color: white;
mix-blend-mode: difference;
z-index: 2;
i{
  position: absolute;
  right:-20px;
  top: 41vw;
  scale: 2.5;
  transform: ${({ scrollAmount }) => (scrollAmount? `translateY(${scrollAmount}%)` : `translateX(0%)`)};
}
`
const Name = styled.p`
margin-left: 30vw;
font-family: Canter;
font-size: 12.8vw;
font-style: italic;
margin-bottom: 0.8vw;
color: white;
mix-blend-mode: difference;
z-index:20;
opacity: 0;
transition: 0.6s;
transform: translate3d(-15px, -15px, 100px) rotateX(70deg);
&.show{
  opacity: 1;
  
  transform: ${({ scrollAmount }) => (scrollAmount? `translateX(${scrollAmount}%) translate3d(0, 0, 0) rotateX(0deg)` : `translateX(0%)`)};
}
`
const LastName = styled.p`
margin-left: 10vw;
font-family: Canter;
font-size: 12.8vw;
font-style: italic;
transform: ${({ scrollAmount }) => (scrollAmount? `translateX(-${scrollAmount}%)` : `translateX(0%)`)};
opacity: 0;
transition: 0.6s;
transform: translate3d(-15px, -15px, 100px) rotateX(70deg);
&.show{
  opacity: 1;
  
  transform: ${({ scrollAmount }) => (scrollAmount? `translateX(-${scrollAmount}%) translate3d(0, 0, 0) rotateX(0deg)` : `translateX(0%)`)};
}
`
const Digital = styled.p`
margin-left: 40vw;
font-weight: 300;
font-size: 11.6vw;
margin-bottom: 0.8vw;
transform: ${({ scrollAmount }) => (scrollAmount? `translateX(${scrollAmount}%)` : `translateX(0%)`)};
opacity: 0;
transition: 0.6s;
transform: translate3d(-15px, -15px, 100px) rotateX(70deg);
&.show{
  opacity: 1;
  
  transform: ${({ scrollAmount }) => (scrollAmount? `translateX(${scrollAmount}%) translate3d(0, 0, 0) rotateX(0deg)` : `translateX(0%)`)};
}
`
const Portfoio = styled.p`
margin-left: 12vw;
font-weight: 300;
font-size: 11.6vw;
transform: ${({ scrollAmount }) => (scrollAmount? `translateX(-${scrollAmount}%)` : `translateX(0%)`)};
opacity: 0;
transition: 0.6s;
transform: translate3d(-15px, -15px, 100px) rotateX(70deg);
&.show{
  opacity: 1;
  
  transform: ${({ scrollAmount }) => (scrollAmount? `translateX(-${scrollAmount}%) translate3d(0, 0, 0) rotateX(0deg)` : `translateX(0%)`)};
}
`

const Bubble = styled.img`
width: 15vw;
height: 8vw;
background-color: white;
position: absolute;
left: 12vw;
background-color: #ECECEC;
transform: ${({ scrollAmount }) => (scrollAmount? `translateY(${scrollAmount}%)` : `translateY(0%)`)};
`
const Bubble2 = styled.img`
width: 15vw;
height: 8vw;
background-color: white;
position: absolute;
right: 18vw;
background-color: #ECECEC;
transform: ${({ scrollAmount }) => (scrollAmount? `translateY(${scrollAmount}%)` : `translateY(126.5%)`)};
/* transform:translateY(130%); */
`
const Bubble3 = styled.img`
width: 15vw;
height: 8vw;
background-color: white;
position: absolute;
left: 22.5vw;
transform: ${({ scrollAmount }) => (scrollAmount? `translateY(${scrollAmount}%)` : `translateY(258%)`)};
/* transform:translateY(240%); */
background-color: #ECECEC;

`
const Bubble4 = styled.img`
width: 15vw;
height: 8vw;
background-color: white;
position: absolute;
right: 10vw;
transform: ${({ scrollAmount }) => (scrollAmount? `translateY(${scrollAmount}%)` : `translateY(386%)`)};
/* transform:translateY(360%); */
background-color: #ECECEC;
mix-blend-mode: difference;
`
export default Header