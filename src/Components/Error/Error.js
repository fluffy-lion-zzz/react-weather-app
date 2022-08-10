// import styled from "styled-components";
import { ErrorContainer, EHeading } from "../../Styles/Styles.js";



const Error = ({ message }) => {
  return (
    <ErrorContainer>
      <EHeading>unfortunately there has been an error</EHeading>
      <EHeading message>{message}</EHeading>
      <EHeading>please try another city</EHeading>
    </ErrorContainer>
  );
};

export default Error;
