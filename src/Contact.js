import React from 'react'
import { styled } from 'styled-components'
import { useState } from 'react';
import keyframes from 'styled-components';

const Wave = keyframes`
0%, 100% {
    transform: translateY(0) scaleY(1);
  }
  50% {
    transform: translateY(-10px) scaleY(0.9);
  }

`



const Container = styled.div`

background-color: black;
color: white;
width: 100vw;
padding: 20px;
`

const Water = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 50%;
  animation: ${Wave} 2s infinite;

`
const Contact = () => {
  const [bubbles, setBubbles] = useState([]);

  const animateBubble = (x) => {
    const newBubble = {
      id: Math.random()*1000000000000,
      left: x,
    };
    
    

    setBubbles((prevBubbles) => [...prevBubbles, newBubble]);

    setTimeout(() => {
      setBubbles((prevBubbles) => prevBubbles.filter((bubble) => bubble.id !== newBubble.id));
    }, 2000);
  };
  console.log(bubbles);
  return (
    <Container onMouseMove={(e) => animateBubble(e.clientX)}>
      
      <p>
        E-MAIL: gosseling.gab@gmail.com
      </p>
      <p>
        PHONE: 450-712-7842
      </p>
      {bubbles.map((bubble) => (
        <Water key={bubble.id} className="bubble" style={{ left: bubble.left }} />
      ))}
      
    </Container>
  )
}



export default Contact