import { FlexContainer, MainText, SubText, Img } from "../Styles/Styles";

const BigCard = ({ text, secondaryText, imgText, imgSrc, temp }) => {
  let url = `http://openweathermap.org/img/wn/${imgSrc}@2x.png`;
  return (
    <FlexContainer>
      {temp ? 
      <MainText>temp: {temp}</MainText>
      :
      <MainText>{text}</MainText>
    }
      {secondaryText && (
        <>
          <SubText>{secondaryText}</SubText>
          <Img src={url} />
        </>
      )}
    </FlexContainer>
  );
};
export default BigCard;
