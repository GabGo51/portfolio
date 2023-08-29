import React from "react";
import { useContext } from "react";
import { styled } from "styled-components";
import { MouseContext } from "./context/mouseContext";

const Nav = () => {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);
  return (
    <Container>
      <a
        onMouseEnter={() => cursorChangeHandler("button")}
        onMouseLeave={() => cursorChangeHandler("")}
        target="#"
        href="https://www.linkedin.com/in/gabriel-gosselin-802bb5247/"
      >
        <i className="fa-brands fa-linkedin"></i>
      </a>

      {/* <Box
        onMouseEnter={() => cursorChangeHandler("button")}
        onMouseLeave={() => cursorChangeHandler("")}
        target="#"
        href=""
        download={true}
      >
        <CV>CV</CV>
      </Box> */}
    </Container>
  );
};

const Container = styled.a`
  position: fixed;
  top: 10px;
  right: 15px;
  color: white;
  mix-blend-mode: difference;
  z-index: 100;
  scale: 1.6;
  display: flex;
  justify-content: center;
  align-items: center;

  i {
    margin-right: 5px;
    scale: 1.1;
  }

  a{
    color: white;
    text-decoration: none;
    height: 10px;
  }
`;

const Box = styled.a`
  background-color: white;
 
`;
const CV = styled.p`
  color: black;
  padding: 1px 2px;
  font-size: 0.6em;
  font-weight: bold;
  
`;
export default Nav;
