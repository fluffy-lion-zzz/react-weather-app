import styled from "styled-components";
const SmallContainer = styled.div`
  border: solid purple 5px;
`;
const SmallCard = ({ info, icon }) => {
  return (
    <SmallContainer>
      {info && (
        <>
          <h3>{info}</h3>
          {icon}
        </>
      )}
    </SmallContainer>
  );
};
export default SmallCard;
