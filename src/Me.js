import React from "react";
import { styled } from "styled-components";
import Marquee from "react-fast-marquee";
import Moi from "./img/boutme.jpg";
const Me = () => {
  return (
    <>
      <Container>
        <Box>
          <CustomMarquee speed={70}>
            <p>ABOUT</p>
            <span>-</span>
            <p>ME</p>
            <span>-</span>
            <p>ABOUT</p>
            <span>-</span>
            <p>ME</p>
            <span>-</span>
            <p>ABOUT</p>
            <span>-</span>
            <p>ME</p>
            <span>-</span>
          </CustomMarquee>
        </Box>
        <img src={Moi} />
        <Text>
          I'm a dev with a passion for Web Design, snowboard, rock climbing and
          gaming/anime. When I'm not geeking online, you'll find me outside
          either climbing up the mountains or snowboarding down them. As a web
          developer, I'm fascinated by the intersection of technology and
          creativity. I strive to create seamless user experiences that
          captivate and engage users.
        </Text>
        <Round></Round>
      </Container>
    </>
  );
};

const Container = styled.div`
  background-color: #f0f0f0;
  width: 100vw;
  z-index: 40;
  padding-top: 100px;
  padding-bottom: 150px;
  position: relative;

  p {
    font-size: 10vw;
    margin-right: 30px;
    transition: 0.2s;
  }
  span {
    font-size: 10vw;
    margin-right: 30px;
    transition: 0.5s;
  }

  img {
    width: 70vw;
    margin-top: -9vw;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    transform: translateX(20%);
    @media screen and (max-width: 1200px) {
      width: 100vw;
      transform: translateX(0%);
    }
  }
`;

const Box = styled.div``;
const CustomMarquee = styled(Marquee)`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  transition: 1s;
  height: 9vw;
  z-index: 40;
  & .child {
    display: flex;
    align-items: center;
  }
  &:hover {
    cursor: pointer;
    p {
      transform: rotate(-0.5deg);
    }
    span {
      transform: rotate(90deg);
    }
    opacity: 0.64;
  }
`;
const Text = styled.h4`
  position: absolute;
  left: 20px;
  width: 28vw;
  font-weight: 400;
  font-size: 1.2vw;
  transform: translate3d(180%, -420%, 0);

  @media screen and (max-width: 1200px) {
    transform: translate3d(11.5vw, -130%, 0);
    background-color: white;
    padding: 20px;
    font-size: 1.8vw;
    width: 64vw;
  }
`;
const Round = styled.div`
  width: 100vw;
  height: 100px;
  background-color: #f0f0f0;
  border-radius: 70%;
  z-index: 20;
  margin-bottom: -200px;
  z-index: 40;
`;

export default Me;
