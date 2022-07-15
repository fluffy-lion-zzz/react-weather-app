import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import Breakpoint from "./Breakpoint";
export const ContentStyled = styled.div`
  z-index: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
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
    // flex-direction: row;
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

export const FormContainer = styled.form `
  border: solid black 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
`
export const MainTextContainer =  styled.div`
  border: solid black 3px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  width: ${props => props.header ? '80vw' : '200px'};
  @media only screen and ${Breakpoint.device.md}{
    border: solid green 3px;
  }
  @media only screen and ${Breakpoint.device.lg}{
    border: solid yellow 3px;
    width: ${props => props.header ? '50vw' : '200px'};
  }
`
export const DisplaySearch = styled.div `
  display: flex;
  flex-direction: column;
  @media only screen and ${Breakpoint.device.md}{
    border: solid green 3px;
  }
  @media only screen and ${Breakpoint.device.lg}{
    border: solid yellow 3px;
    flex-direction: row;
  }
`
export const Heading = styled.h1 `
  font-size: 1.5em;
  @media only screen and ${Breakpoint.device.md}{
    border: solid green 3px;
  }
  @media only screen and ${Breakpoint.device.lg}{
    border: solid blue 3px;
    font-size: 2em;
  }
`
export const MainText = styled.h3 `
  background-color: red;
  padding: 5px;
  margin: 1px;
  text-align: center;
  border: solid purple 2px;
  width: 200px;
  height: 20px;
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
export const InputContainer = styled.div `
  border: solid red 3px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Input = styled.input `
@media only screen and ${Breakpoint.device.md}{
  border: solid green 3px;
}
@media only screen and ${Breakpoint.device.lg}{
  border: solid blue 3px;
  width: 200px;
  font-size: 2em;
}
`
export const Button = styled.button `
  border: solid black 2px;
  border-radius: 5px;
  margin: 0px;
  color: black;
  font-size: 1em;
  font-weight: bold;
  background-color: rgba(245,245,250, 0.1);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  width: ${props => props.search ? '100px' : '25px'};
  @media only screen and ${Breakpoint.device.md}{
    border: solid green 3px;
  }
  @media only screen and ${Breakpoint.device.lg}{
    border: solid blue 3px;
    height: 40px;
    width: ${props => props.search ? '200px' : '35px'};
    font-size: 1.5em;
  }
`