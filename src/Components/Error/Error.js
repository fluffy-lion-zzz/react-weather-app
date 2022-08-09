import styled from "styled-components";

const ErrorContainer = styled.div`
  background-color: blue;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  margin-top: 10px;
`;
const EHeading = styled.h3`
font-style: ${(props) => (props.message ? "italic" : "bold")};
`;

const Error = ({ message }) => {
  return (
    <ErrorContainer>
      <EHeading>unfortunately there has been an error</EHeading>
      <EHeading message>{message}</EHeading>
    </ErrorContainer>
  );
};

export default Error;
