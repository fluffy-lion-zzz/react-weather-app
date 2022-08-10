import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { WiSunrise, WiSunset, WiWindy } from "react-icons/wi";
import Breakpoint from "./Breakpoint";

const shadow = "rgb(38, 57, 77) 0px 20px 30px -10px";
const background = "rgba(245, 245, 245, 0.7)";
const radius = "10px";
export const ContentStyled = styled.div`
  z-index: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${background};
  border-radius: ${radius};
  box-shadow: ${shadow};
  @media only screen and ${Breakpoint.device.xs} {
    // border: solid red 3px;
  }
  @media only screen and ${Breakpoint.device.md} {
    // border: solid green 3px;
  }
  @media only screen and ${Breakpoint.device.lg} {
    // border: solid blue 3px;
    // flex-direction: row;
  }
`;
export const ResultStyled = styled(motion.div)`
  // border: solid blue 3px;
  box-sizing: border-box;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  height: 50vh;
  @media only screen and ${Breakpoint.device.xs} {
    // border: solid red 3px;
  }
  @media only screen and ${Breakpoint.device.md} {
    // background-color: crimson;
  }
  @media only screen and ${Breakpoint.device.lg} {
    // border: solid yellow 3px;
    flex-direction: row;
    justify-content: center;
  }
`;

export const H2Content = styled.h2``;
export const FlexContainer = styled.div`
  // border: solid black 5px;
  box-sizing: border-box;
  border-radius: ${radius};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  margin: 10px;
  background-color: ${background};
  box-shadow: ${shadow};
  @media only screen and ${Breakpoint.device.md} {
    // background-color: blue;
  }
  @media only screen and ${Breakpoint.device.lg} {
    // border: solid pink 3px;
    max-height: 200px;
    justify-content: center;
  }
`;
export const SplitContainer = styled.div`
  // border: solid orange 5px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  @media only screen and ${Breakpoint.device.md} {
    // border: solid blue 5px;
    width: 100%;
  }
  @media only screen and ${Breakpoint.device.lg} {
    width: 30%;
    justify-content: center;
    // flex: ${(props) => (props.left ? 2 : 1)};
    // border: solid lime 3px;
  }
`;
export const Img = styled.img`
  width: 100px;
`;
export const FormContainer = styled.form`
  // border: solid black 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
`;
export const MainTextContainer = styled.div`
  // border: solid black 3px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  z-index: 1;
  width: ${(props) => (props.header ? "80vw" : "200px")};
  @media only screen and ${Breakpoint.device.md} {
    // border: solid green 3px;
  }
  @media only screen and ${Breakpoint.device.lg} {
    // border: solid yellow 3px;
    width: ${(props) => (props.header ? "50vw" : "200px")};
  }
`;
export const DisplaySearch = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px;
  @media only screen and ${Breakpoint.device.md} {
    // border: solid green 3px;
  }
  @media only screen and ${Breakpoint.device.lg} {
    // border: solid yellow 3px;
    flex-direction: row;
  }
`;
export const Heading = styled.h1`
  font-size: 1.5em;
  @media only screen and ${Breakpoint.device.md} {
    // border: solid green 3px;
  }
  @media only screen and ${Breakpoint.device.lg} {
    // border: solid blue 3px;
    font-size: 2em;
  }
`;

export const ResultLocationText = styled.h3`
  z-index: 1;
  margin-bottom: 8px;
  background-color: ${background};
  box-shadow: ${shadow};
  border-radius: ${radius};
`;
export const MainText = styled.h3`
  // background-color: red;
  padding: 5px;
  margin: 1px;
  text-align: center;
  // border: solid purple 2px;
  // width: 200px;
  // height: 20px;
  font-size: 1em;
  align-self: center;
  // z-index: 1;
  @media only screen and ${Breakpoint.device.lg} {
    // border: solid blue 3px;
    font-size: 130%;
    // height: 40px;
  }
`;
export const ExtraContainer = styled.div`
  // border: solid pink 5px;
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 110px;
  @media only screen and ${Breakpoint.device.lg} {
    flex-direction: column;
    align-items: center;
    height: 330px;
  }
`;
export const SmallContainer = styled.div`
  // border: solid black 1px;
  box-shadow: ${shadow};
  display: flex;
  flex-direction: column;
  // padding-top: 10px;
  align-items: center;
  justify-content: flex-end;
  width: 20%;
  background-color: ${background};
  border-radius: ${radius};
  @media only screen and ${Breakpoint.device.lg} {
    width: 40%;
    height: 30%;
  }
`;
export const SubText = styled.p`
  // background-color: green;
  // margin: 10px;
  font-size: 1em;
  @media only screen and ${Breakpoint.device.lg} {
    font-size: 1em;
  }
`;
export const InputContainer = styled.div`
  // border: solid red 3px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Input = styled.input`
  @media only screen and ${Breakpoint.device.md} {
    // border: solid green 3px;
  }
  @media only screen and ${Breakpoint.device.lg} {
    // border: solid blue 3px;
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
  box-shadow: ${shadow};
  width: ${(props) => (props.search ? "100px" : "25px")};
  @media only screen and ${Breakpoint.device.md} {
    // border: solid green 3px;
  }
  @media only screen and ${Breakpoint.device.lg} {
    // border: solid blue 3px;
    height: 40px;
    width: ${(props) => (props.search ? "200px" : "35px")};
    font-size: 1.5em;
  }
`;
export const UnorderedList = styled.ul`
  box-sizing: border-box;
  // border: solid salmon 2px;
  list-style: none;
  padding-left: 0;
  position: absolute;
  background-color: white;
  margin-top: 28px;
  margin-left: -20px;
  z-index: 1;
  box-shadow: ${shadow};
`;

export const ListItem = styled.li`
  box-sizing: border-box;
  border: solid black 1px;
  padding: 1px;
  margin: 1px;
  font-size: 1.3em;
  z-index: 1;
  &:hover {
    transform: scale(1.1);
  }
`;
const lgmargin = "20px";
export const WindyIcon = styled(WiWindy)`
  transform: scale(3);
  margin-top: 15px;
  @media only screen and ${Breakpoint.device.md} {
    transform: scale(4);
    margin-top: 18px;
  }
  @media only screen and ${Breakpoint.device.lg} {
    transform: scale(5);
    margin-top: ${lgmargin};
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
    margin-top: ${lgmargin};
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
    margin-top: ${lgmargin};
  }
`;

export const ErrorContainer = styled.div`
  background-color: ${background};
  border-radius: ${radius};
  box-shadow: ${shadow};
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  margin-top: 10px;
`;
export const EHeading = styled.h3`
  font-style: ${(props) => (props.message ? "italic" : "bold")};
  font-size: ${(props) => (props.message ? "2em" : "1em")};
`;