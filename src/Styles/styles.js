import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { WiSunrise, WiSunset, WiWindy } from "react-icons/wi";
import Breakpoint from "./Breakpoint";

const shadow = "rgb(38, 57, 77) 0px 20px 30px -10px"
export const ContentStyled = styled.div`
  z-index: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(240, 248, 255, 0.621);
  @media only screen and ${Breakpoint.device.xs} {
    border: solid red 3px;
  }
  @media only screen and ${Breakpoint.device.md} {
    border: solid green 3px;
  }
  @media only screen and ${Breakpoint.device.lg} {
    border: solid blue 3px;
    // flex-direction: row;
  }
`;
export const ResultStyled = styled(motion.div)`
  border: solid blue 3px;
  box-sizing: border-box;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  height: 50vh;
  @media only screen and ${Breakpoint.device.xs} {
    border: solid red 3px;
  }
  @media only screen and ${Breakpoint.device.md} {
    background-color: crimson;
  }
  @media only screen and ${Breakpoint.device.lg} {
    border: solid yellow 3px;
    flex-direction: row;
    justify-content: center;
  }
`;

export const H2Content = styled.h2``;
export const FlexContainer = styled.div`
  border: solid black 5px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  @media only screen and ${Breakpoint.device.md} {
    background-color: blue;
  }
  @media only screen and ${Breakpoint.device.lg} {
    border: solid black 3px;
    height: 100%;
    justify-content: center;
  }
`;
export const SplitContainer = styled.div`
  border: solid orange 5px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  @media only screen and ${Breakpoint.device.md} {
    border: solid blue 5px;
    width: 100%;
  }
  @media only screen and ${Breakpoint.device.lg} {
    width: 30%;
    justify-content: center;
    // flex: ${(props) => (props.left ? 2 : 1)};
    border: solid lime 3px;
  }
`;
export const Img = styled.img`
  width: 100px;
`;
export const FormContainer = styled.form`
  border: solid black 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
`;
export const MainTextContainer = styled.div`
  border: solid black 3px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  z-index: 1;
  width: ${(props) => (props.header ? "80vw" : "200px")};
  @media only screen and ${Breakpoint.device.md} {
    border: solid green 3px;
  }
  @media only screen and ${Breakpoint.device.lg} {
    border: solid yellow 3px;
    width: ${(props) => (props.header ? "50vw" : "200px")};
  }
`;
export const DisplaySearch = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and ${Breakpoint.device.md} {
    border: solid green 3px;
  }
  @media only screen and ${Breakpoint.device.lg} {
    border: solid yellow 3px;
    flex-direction: row;
  }
`;
export const Heading = styled.h1`
  font-size: 1.5em;
  @media only screen and ${Breakpoint.device.md} {
    border: solid green 3px;
  }
  @media only screen and ${Breakpoint.device.lg} {
    border: solid blue 3px;
    font-size: 2em;
  }
`;
export const MainText = styled.h3`
  background-color: blue;
  padding: 5px;
  margin: 1px;
  text-align: center;
  border: solid purple 2px;
  width: 200px;
  height: 20px;
  // z-index: 1;
`;
export const ExtraContainer = styled.div`
  border: solid pink 5px;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 90%;
  @media only screen and ${Breakpoint.device.lg} {
    flex-direction: column;
    align-items: center;
  }
`;
export const SmallContainer = styled.div`
  border: solid purple 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  @media only screen and ${Breakpoint.device.lg} {
    width: 100%;
    height: 30%;
  }
`;
export const SubText = styled.p`
  // background-color: green;
  margin: 0;
  font-size: 1.2em;
`;
export const InputContainer = styled.div`
  border: solid red 3px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Input = styled.input`
  @media only screen and ${Breakpoint.device.md} {
    border: solid green 3px;
  }
  @media only screen and ${Breakpoint.device.lg} {
    border: solid blue 3px;
    width: 200px;
    font-size: 2em;
  }
`;
export const Button = styled.button`
  border: solid black 2px;
  border-radius: 5px;
  margin: 0px;
  color: black;
  font-size: 1em;
  font-weight: bold;
  background-color: rgba(245, 245, 250, 0.1);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  width: ${(props) => (props.search ? "100px" : "25px")};
  @media only screen and ${Breakpoint.device.md} {
    border: solid green 3px;
  }
  @media only screen and ${Breakpoint.device.lg} {
    border: solid blue 3px;
    height: 40px;
    width: ${(props) => (props.search ? "200px" : "35px")};
    font-size: 1.5em;
  }
`;
export const UnorderedList = styled.ul`
  box-sizing: border-box;
  border: solid salmon 2px;
  list-style: none;
  padding-left: 0;
  position: absolute;
  background-color: white;
  margin-top: 28px;
  margin-left: -20px;
  z-index: 1;
  box-shadow: ${shadow};
  `

export const ListItem = styled.li `
  box-sizing: border-box;
  border: solid black 1px;
  padding: 1px;
  margin: 1px;
  font-size: 1.3em;
  &:hover {
    transform: scale(1.1);
  }
`
export const WindyIcon = styled(WiWindy)`
  transform: scale(3);
  margin-top: 15px;
  @media only screen and ${Breakpoint.device.md} {
    transform: scale(4);
    margin-top: 18px;
  }
  @media only screen and ${Breakpoint.device.lg} {
    transform: scale(5);
    margin-top: 20px;
  }
`;
export const SunsetIcon = styled(WiSunset)`
  transform: scale(3);
  margin-top: 15px;
  @media only screen and ${Breakpoint.device.md} {
    transform: scale(4);
    margin-top: 18px;
  }
  @media only screen and ${Breakpoint.device.lg} {
    transform: scale(5);
    margin-top: 30px;
  }
`;
export const SunriseIcon = styled(WiSunrise)`
  transform: scale(3);
  margin-top: 15px;
  @media only screen and ${Breakpoint.device.md} {
    transform: scale(4);
    margin-top: 18px;
  }
  @media only screen and ${Breakpoint.device.lg} {
    transform: scale(5);
    margin-top: 30px;
  }
`;
