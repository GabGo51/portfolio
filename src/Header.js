import React from 'react'
import { styled } from 'styled-components'
import Image1 from "./img/yeur.PNG"
import { useState, useEffect } from 'react'
const Header = () => {
  const [scrollAmount, setScrollAmount] = useState(0);
  // console.log(scrollAmount);
  // This useEffect hook will be called once when the component mounts
  // and then every time the scroll position changes.
  useEffect(() => {
    // Function to update the scroll amount state whenever the user scrolls.
    const handleScroll = () => {
      setScrollAmount(window.scrollY / 5);
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
        <Name scrollAmount = {scrollAmount/10}>GABRIEL</Name>
        <LastName scrollAmount = {scrollAmount/10}>GOSSELIN</LastName>
        <Digital scrollAmount = {scrollAmount/10}>DIGITAL</Digital>
        <Portfoio scrollAmount = {scrollAmount/10}>PORTFOLIO</Portfoio>
        <i scrollAmount = {scrollAmount} className="fa-solid fa-arrow-turn-down"></i>
      </Container>
      <Bubble></Bubble>
      <Bubble2 scrollAmount = {130 + scrollAmount} src={Image1}></Bubble2>
      <Bubble3 scrollAmount = {240 + scrollAmount} src={Image1}></Bubble3>
      <Bubble4 scrollAmount = {360 + scrollAmount} ></Bubble4>
    </Box>
  )
}

const Box = styled.div`
background-color: black;
color: white;
padding-top: 50px;
padding-bottom: 1500px;
width: 100vw;
p{
  font-size: 10vw;
  mix-blend-mode: difference;
}
img{
  object-fit: cover;
}
line-height: 9.5vw;
`

const Container = styled.div`
position: fixed;
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
font-weight: 300;
font-family: Raleway;
font-style: italic;
transform: ${({ scrollAmount }) => (scrollAmount? `translateX(${scrollAmount}%)` : `translateX(0%)`)};


`
const LastName = styled.p`
margin-left: 10vw;
font-weight: 300;
font-family: Raleway;
font-style: italic;
transform: ${({ scrollAmount }) => (scrollAmount? `translateX(-${scrollAmount}%)` : `translateX(0%)`)};

`
const Digital = styled.p`
margin-left: 40vw;
font-weight: 300;
transform: ${({ scrollAmount }) => (scrollAmount? `translateX(${scrollAmount}%)` : `translateX(0%)`)};

`
const Portfoio = styled.p`
margin-left: 20vw;
font-weight: 300;
transform: ${({ scrollAmount }) => (scrollAmount? `translateX(-${scrollAmount}%)` : `translateX(0%)`)};

`

const Bubble = styled.img`
width: 15vw;
height: 8vw;
background-color: white;
position: absolute;
left: 12vw;
background-color: #ECECEC;
transform: ${({ scrollAmount }) => (scrollAmount? `translateY(${scrollAmount}%)` : `translateX(0%)`)};

`
const Bubble2 = styled.img`
width: 15vw;
height: 8vw;
background-color: white;
position: absolute;
left: 60vw;
transform: translateY(130%);
background-color: #ECECEC;
transform: ${({ scrollAmount }) => (scrollAmount? `translateY(${scrollAmount}%)` : `translateY(130%)`)};
`
const Bubble3 = styled.img`
width: 15vw;
height: 8vw;
background-color: white;
position: absolute;
left: 22vw;
transform: ${({ scrollAmount }) => (scrollAmount? `translateY(${scrollAmount}%)` : `translateY(240%)`)};
background-color: #ECECEC;

`
const Bubble4 = styled.img`
width: 15vw;
height: 8vw;
background-color: white;
position: absolute;
right: 10vw;
transform: ${({ scrollAmount }) => (scrollAmount? `translateY(${scrollAmount}%)` : `translateY(360%)`)};
background-color: #ECECEC;
mix-blend-mode: difference;
`
export default Header