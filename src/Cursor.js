import styled from "styled-components"
import useMousePosition from "./hooks/useMousePosition";
import { MouseContext } from "./context/mouseContext";
import { useContext } from "react";



const Cursor = () => {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);
  
    // 1.
  const { x, y } = useMousePosition();
  return (
    <Container>
            
      <Ring
        className={cursorType === 'hovered' || 'button' ? cursorType : ''}
        style={{ left: `${x}px`, top: `${y}px` }}
        
      ></Ring>
            
      <Dot
        className={cursorType === 'hovered' || 'button' ? cursorType : ''}
        style={{ left: `${x}px`, top: `${y}px` }}
      ></Dot>
    </Container>
  );
};

const Container = styled.div`
mix-blend-mode: difference;
z-index: 999;

`

const Ring = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 35px;
  height: 35px;
  border: 2px solid white;
  border-radius: 100%;
  transform: translate(-50%, -50%);
  -webkit-transition-duration: 100ms;
  transition-duration: 100ms;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
  will-change: width, height, transform, border;
  pointer-events: none;
  

  &.hovered{
    width: 60px;
    height: 60px;
    
    
    border-width: 3px;
  }

  &.button{
    width: 40px;
    height: 40px;
    border-radius: 0;
  }
`

const Dot = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 8px;
  height: 8px;
  background-color: white;
  mix-blend-mode: difference;
  border-radius: 100%;
  transform: translate(-50%, -50%);
  z-index: 999;
  pointer-events: none;

  &.hovered{
    display: none;
    
  }
  &.button{
    display: none;
  }
` 
  


export default Cursor;