import React from "react";
import { useContext } from "react";
import { styled } from "styled-components";
import { MouseContext } from "./context/mouseContext";

const Nav = () => {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);
  return (
    <Container
      onMouseEnter={() => cursorChangeHandler("hovered")}
      onMouseLeave={() => cursorChangeHandler("")}
      target="#"
      href="https://www.linkedin.com/in/gabriel-gosselin-802bb5247/"
    >
      <i className="fa-brands fa-linkedin"></i>
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
  scale: 1.4;
`;

export default Nav;
