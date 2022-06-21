import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import Breakpoint from "./Breakpoint";
export const ContentStyled = styled.div`
  z-index: 1;
  position: relative;
  background-color: rgba(240, 248, 255, 0.621);

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
`;
export const SmallContainer = styled.div`
  border: solid purple 5px;
`;
export const H2Content = styled.h2`

`;

export const MainText = styled.h3 `
  background-color: red;
`;
export const SubText = styled.p `
  background-color: green;
`