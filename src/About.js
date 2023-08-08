import React from "react";
import { styled } from "styled-components";
import TechStack from "./TechStack";
import Pod from "./Pod";
const About = () => {
  return (
    <>
      <Round></Round>
      <Box>
        <Pod></Pod>
        <Hello>hello</Hello>
        <TechStack />
      </Box>
    </>
  );
};

const Box = styled.div`
  background-color: #f0f0f0;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -50px;
  height: 600px;
  z-index: 2;
`;

const Hello = styled.p`
  font-family: Cherry Bomb One;
`;
const Round = styled.div`
  width: 100vw;
  height: 100px;
  background-color: #f0f0f0;
  border-radius: 100%;
  z-index: 2;
  margin-top: -100px;
`;

export default About;
