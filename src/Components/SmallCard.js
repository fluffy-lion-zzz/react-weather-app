import { SubText, SmallContainer, Icon, WindyIcon, SunsetIcon, SunriseIcon } from "../Styles/Styles.js";

const SmallCard = ({ info, icon }) => {
  return (
    <SmallContainer>
      {info && (
        <>
          {icon === "windy" && <WindyIcon />}
          {icon == "sunset" && <SunsetIcon />}
          {icon == "sunrise" && <SunriseIcon />}
          <SubText>{info}</SubText>
        </>
      )}
    </SmallContainer>
  );
};
export default SmallCard;
