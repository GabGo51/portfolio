import React from 'react'
import { styled } from 'styled-components'
const About = () => {
  return (
    <>
    <Round></Round>
    <Box>
      
      <>yo</>
    </Box>
    
    </>
    
  )
}

const Box = styled.div`
background-color:#F0F0F0;
width: 100vw;


display: flex;
flex-direction: column;
align-items: center;
margin-top: -50px;
height: 600px;
z-index: 2;
`
const Round = styled.div`
width: 100vw;
height: 100px;
background-color:#F0F0F0;
border-radius: 100%;
z-index: 2;
margin-top: -100px;
`



export default About