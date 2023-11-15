import  styled  from "styled-components";
import { useEffect, useState, useRef } from "react";
import Gab from "./img/gab.webp"

const Pod = () => {
  const podRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMouseOnScreen, setIsMouseOnScreen] = useState(true);

  useEffect(() => {
    const handleMouseEnter = () => {
      setIsMouseOnScreen(true);
    };

    const handleMouseLeave = () => {
      setIsMouseOnScreen(false);
    };

    const handleMouse = (event) => {
      const { clientX, clientY } = event;
      setPosition({ x: clientX, y: clientY })
      setIsMouseOnScreen(true);
    };

    


    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener('mousemove',handleMouse)
    

    return () =>{
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener('mousemove',handleMouse)
    }
  }, []);

  useEffect(() => {
    const { current: podElement } = podRef;

    const movePod = () => {
      const { x, y } = position;
      // const podWidth = podElement.offsetWidth;
      // const podHeight = podElement.offsetHeight;
      const offsetX = (x- window.innerWidth / 2 ) / 6;
      const offsetY = (y-window.innerHeight / 2) / 6;

      if (isMouseOnScreen) {
        podElement.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      } else {
        podElement.style.transform = "none";
      }
    };

    movePod();

    return () => {
      podElement.style.transform = 'none';
    };
  }, [position, isMouseOnScreen]);


  return <Box ref={podRef}></Box>;
};

const Box = styled.div`
  height: 350px;
  width: 350px;
  border-radius: 50%;
  @media screen and (max-width: 600px) {
  height: 250px;
  width: 250px;
  margin-top: -150px;
  }
  background-image:url(${Gab}) ;
  
  filter: contrast(120%)grayscale(100%);
  background-size: cover;
  background-position: center;
  background-color: green;
  
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-weight: bold;
  font-size: 2em;
  position: absolute;
  z-index: 30;
  margin-top: -250px;
`;

export default Pod;
