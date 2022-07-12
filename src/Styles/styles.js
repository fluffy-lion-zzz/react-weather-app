import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import Breakpoint from "./Breakpoint";
export const ContentStyled = styled.div`
  z-index: 1;
  position: relative;
  background-color: rgba(240, 248, 255, 0.621);
  // background-color: black;
  @media only screen and ${Breakpoint.device.xs}{
    border: solid red 3px;
  }
  @media only screen and ${Breakpoint.device.md}{
    border: solid green 3px;
  }
  @media only screen and ${Breakpoint.device.lg}{
    border: solid blue 3px;
  }
`;
export const ResultStyled = styled(motion.div)`
  border: solid blue 3px;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and ${Breakpoint.device.xs}{
    border: solid red 3px;
    // display: flex;
    // flex direction 
    // height: 60vh;
  }
`;

export const H2Content = styled.h2`

`;
export const MainTextContainer =  styled.div`
  border: solid white 3px;
  box-sizing: border-box;
  display: flex;
  width: 200px;
  justify-content: flex-start;
  @media only screen and ${Breakpoint.device.xs}{
    border: solid red 3px;

  }
`
export const MainText = styled.h3 `
  background-color: red;
  padding: 5px;
  margin: 1px;
  text-align: center;
`;
export const ExtraContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 90vw;
`
export const SmallContainer = styled.div`
  border: solid purple 5px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const SubText = styled.p `
  background-color: green;
`