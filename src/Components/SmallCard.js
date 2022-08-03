import { SubText, SmallContainer, Icon, WindyIcon, SunsetIcon, SunriseIcon } from "../Styles/Styles";

const SmallCard = ({ info, icon }) => {
  return (
    <SmallContainer>
      {info && (
        <>
          <SubText>{info}</SubText>
          {icon === "windy" && <WindyIcon />}
          {icon == "sunset" && <SunsetIcon />}
          {icon == "sunrise" && <SunriseIcon />}
        </>
      )}
    </SmallContainer>
  );
};
export default SmallCard;
