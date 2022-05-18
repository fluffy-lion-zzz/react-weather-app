import SmallCard from "./SmallCard";
import { WiSunrise, WiSunset, WiWindy } from 'react-icons/wi'
import styled from "styled-components";

const ExtraContainer = styled.div`
  border: solid azure 5px;
`;
const ExtraInfo = ({ wind, sunrise, sunset }) => {
  let timeConverter = (unix) => {
    let date = new Date(unix * 1000);
    let hours = "0" + date.getHours();
    let min = "0" + date.getMinutes();
    let fomattedTime = hours.slice(-2) + ":" + min.slice(-2);
    return fomattedTime;
  };
  let amTime = timeConverter(sunrise);
  let pmTime = timeConverter(sunset);
  return (
    <ExtraContainer>
      <SmallCard info={wind} icon={<WiWindy />}/>
      <SmallCard info={amTime} icon={<WiSunrise />}/>
      <SmallCard info={pmTime} icon={<WiSunset />}/>
    </ExtraContainer>
  );
};
export default ExtraInfo;
