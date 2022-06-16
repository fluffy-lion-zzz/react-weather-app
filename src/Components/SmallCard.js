import styled from "styled-components";
import { SubText } from "../Styles/Styles";
const SmallContainer = styled.div`
  border: solid purple 5px;
`;
const SmallCard = ({ info, icon }) => {
  return (
    <SmallContainer>
      {info && (
        <>
          <SubText>{info}</SubText>
          {icon}
        </>
      )}
    </SmallContainer>
  );
};
export default SmallCard;
