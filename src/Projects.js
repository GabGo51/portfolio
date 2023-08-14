import React from 'react'
import styled from "styled-components"
import proj1 from "./img/proj1.png"
import proj2 from "./img/proj2.PNG"
import proj3 from "./img/proj3.PNG"
import { useState, useEffect } from 'react'

const Projects = () => {
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      
      const scrollPosition = window.scrollY;
      console.log(scrollPosition);
      const triggerPosition = 3200; // Adjust this value to set the scroll amount for the title to appear

      if(scrollPosition >= triggerPosition){
        setShowTitle(true)
      };
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <Container>
      <Title>
        <Proj className={showTitle ? 'show' : ''}>PROJECTS &</Proj>
        <Feat className={showTitle ? 'show' : ''}>FEATURED WORKS</Feat>
      </Title>
      <Project1>
        <a target='#' href=''>
        <Bloom>BLOOM</Bloom>
        
          <Proj1 src={proj1}/>
        </a>
      </Project1>
      <Project1>
        <a target='#' href='https://meow-twitter.vercel.app/'>
        <Box>
          <GadgetGo>MEOW</GadgetGo>
        </Box>
        
          <Proj2 src={proj2}/>
        </a>
        
      </Project1>
      <Project1>
        <a target='#' href='https://gadgetgo.vercel.app/'>
        <Box>
          <Social>GADGETGO</Social>
        </Box>
        
          <Proj2 src={proj3}/>
        </a>
        
      </Project1>

      
      
      


    </Container>
  )
}

const Container = styled.div`
background-color:black;
width: 100vw;
color: white;
padding-bottom: 10vw;
padding-top: 200px;
z-index: 30;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const Title = styled.div`
font-size: 8vw;
line-height: 6.5vw;
margin-bottom: 8vw;

`
const Proj = styled.p`
font-family: Canter;
font-style: italic;
font-size: 9.1vw;
opacity: 0;
transition: 1.2s;
transform: translate3d(-15px, -15px, 100px) rotateX(90deg);
&.show{
  opacity: 1;
  transform: translate3d(0, 0, 0) rotateX(0deg);
}
`
const Feat = styled.p`
opacity: 0;
transition: 1.2s;
transform: translate3d(-15px, -15px, 100px) rotateX(90deg);
&.show{
  opacity: 1;
  transform: translate3d(0, 0, 0) rotateX(0deg);
}
`

const Project1 = styled.div`
position: relative;

`

const Proj1 = styled.img`
width: 100vw;
`
const Proj2 = styled.img`
margin-top: -10px;
width: 100vw;
`

const Bloom = styled.p`
position: absolute;
color: white;
right: 5vw;
font-size: 5.2vw;
border-bottom:0.5vw solid white ;

`
const Box = styled.div`
background-color: rgba(248, 248, 248, 1);

`

const GadgetGo = styled.p`
position: absolute;
color: white;
left: 5vw;
font-size: 5.2vw;
border-bottom:0.5vw solid white ;
transform: translateY(10%);


`

const Social = styled.p`
position: absolute;
color: black;
left: 5vw;
font-size: 5.2vw;
border-bottom:0.5vw solid black ;
transform: translateY(20%);


`
export default Projects