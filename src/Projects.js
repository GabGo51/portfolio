import React from 'react'
import styled from "styled-components"
import proj1 from "./img/proj1.png"
import proj2 from "./img/proj2.PNG"
import proj3 from "./img/proj3.PNG"

const Projects = () => {
  return (
    <Container>
      <Title>
        <Proj>PROJECTS &</Proj>
        <p>FEATURED WORKS</p>
      </Title>
      <Project1>
        <Bloom>BLOOM</Bloom>
        <Proj1 src={proj1}/>
      </Project1>
      <Project1>
        <Box>
          <GadgetGo>MEOW</GadgetGo>
        </Box>
        
        <Proj2 src={proj2}/>
      </Project1>
      <Project1>
        <Box>
          <Social>GADGETGO</Social>
        </Box>
        
        <Proj2 src={proj3}/>
      </Project1>

      
      
      


    </Container>
  )
}

const Container = styled.div`
background-color:black;
width: 100vw;
color: white;
padding-bottom: 400px;
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