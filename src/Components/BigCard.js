import { MainText, SubText } from "../Styles/Styles";

const BigCard = ({ text, secondaryText, imgText, imgSrc }) => {
  let url = `http://openweathermap.org/img/wn/${imgSrc}@2x.png`;
  return (
    <>
      <MainText>{text}</MainText>
      {secondaryText && (
        <>
          <SubText>{secondaryText}</SubText>
          <img src={url} />
        </>
      )}
    </>
  );
};
export default BigCard;
