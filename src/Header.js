import React from 'react'
import { styled } from 'styled-components'

const Header = () => {
  return (
    <Box>
      <Container>
        <Name>GAB</Name>
        <LastName>GOSSELIN</LastName>
        <Digital>DIGITAL</Digital>
        <Portfoio>PORTFOLIO</Portfoio>
      </Container>
      <Bubble></Bubble>
      <Bubble2></Bubble2>
      <Bubble3></Bubble3>
      <Bubble4></Bubble4>
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
}
line-height: 9.5vw;
`

const Container = styled.div`
position: fixed;
z-index: 2;
`
const Name = styled.p`
margin-left: 30vw;
font-weight: 200;
font-family: Cormorant Garamond;
font-style: italic;
mix-blend-mode: difference;
`
const LastName = styled.p`
margin-left: 10vw;
font-weight: 200;
font-family: Cormorant Garamond;
font-style: italic;
mix-blend-mode: difference;
`
const Digital = styled.p`
margin-left: 40vw;
font-weight: 300;
mix-blend-mode: difference;

`
const Portfoio = styled.p`
margin-left: 20vw;
font-weight: 300;
mix-blend-mode: difference;
`

const Bubble = styled.div`
width: 15vw;
height: 8vw;
background-color: white;
position: absolute;
left: 12vw;
background-color: #ECECEC;
mix-blend-mode: difference;
`
const Bubble2 = styled.div`
width: 15vw;
height: 8vw;
background-color: white;
position: absolute;
left: 55vw;
top: 10vw;
background-color: #ECECEC;
`
const Bubble3 = styled.div`
width: 15vw;
height: 8vw;
background-color: white;
position: absolute;
left: 22vw;
top: 22.5vw;
background-color: #ECECEC;
mix-blend-mode: difference;
`
const Bubble4 = styled.div`
width: 15vw;
height: 8vw;
background-color: white;
position: absolute;
right: 10vw;
top: 32vw;
background-color: #ECECEC;
mix-blend-mode: difference;
`
export default Header