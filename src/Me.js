import React from "react";
import { styled } from "styled-components";
import Marquee from "react-fast-marquee";
import Moi from "./img/boutme.jpg";
import { useContext } from "react";
import { MouseContext } from "./context/mouseContext";
import Music from "./img/music.PNG"
const Me = () => {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);
  const screeWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  let speed = 70
  if (screeWidth < 500){
    speed = 25
  }
  
  return (
    <>
      <Container>
        <Box
          target="#"
          href="https://www.instagram.com/gab_go_fast___/"
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}
        >
          <CustomMarquee speed={speed}>
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
          I'm a developer with a passion for Web Design, snowboard, rock climbing and
          gaming/anime. When I'm not geeking out online, you'll find me outside
          either climbing mountains or snowboarding down them. As a web
          developer, I'm fascinated by the intersection of technology and
          creativity. I strive to create seamless user experiences that
          captivate and engage users.
        </Text>
        <Round></Round>
        {/* <MusicBox>
          <Spotify src={Music}></Spotify>
        </MusicBox> */}
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

const Box = styled.a`
color: black;
text-decoration: none;
`;
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

const MusicBox = styled.div`
position: absolute;
bottom: 5vw;
`
const Spotify = styled.img`
border-radius: 30px;
scale: 0.6;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`
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
