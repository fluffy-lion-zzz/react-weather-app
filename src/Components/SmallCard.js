import { SubText, SmallContainer } from "../Styles/Styles";

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
