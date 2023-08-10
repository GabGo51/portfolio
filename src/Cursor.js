import styled from "styled-components"
import useMousePosition from "./hooks/useMousePosition";

const Cursor = () => {
    // 1.
  const { x, y } = useMousePosition();
  return (
    <Container>
            {/* 2. */}
      <Ring
        style={{ left: `${x}px`, top: `${y}px` }}
        
      ></Ring>
            {/* 3. */}
      <Dot
        
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
` 
  


export default Cursor;