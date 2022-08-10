import SmallCard from "./SmallCard";
// import { WiSunrise, WiSunset, WiWindy } from 'react-icons/wi'
import { ExtraContainer } from "../Styles/Styles";

const ExtraInfo = ({ wind, sunrise, sunset, timezone }) => {
  let timeConverter = (unix) => {
    unix = unix + timezone
    let date = new Date(unix * 1000);
    let hours = "0" + date.getHours();
    let min = "0" + date.getMinutes();
    let fomattedTime = (hours.slice(-2) - 1) + ":" + min.slice(-2);
    return fomattedTime;
  };
  let amTime = timeConverter(sunrise);
  let pmTime = timeConverter(sunset);
  return (
    <ExtraContainer>
      <SmallCard info={wind} icon="windy"/>
      <SmallCard info={amTime} icon="sunrise"/>
      <SmallCard info={pmTime} icon="sunset"/>
    </ExtraContainer>
  );
};
export default ExtraInfo;
