import BigCard from "./BigCard";
import ExtraInfo from "./ExtraInfo";

import { MainText, ResultStyled, SplitContainer, ResultLocationText } from "../Styles/Styles";
import { useEffect, useState } from "react";
import Loader from "./Loader";

const Result = ({ data }) => {
  const [loading, setLoading] = useState(true);
  const loader = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  useEffect(() => {
    loader()
  }, [data]);

  return (
    // <div label="result" style={{ backgroundColor: "rgb(205, 237, 246" }}>
    <>
      {!loading && data ? (
        // <ContentStyled>
        <>
         <ResultLocationText location>
              <MainText>{data.name}</MainText>
              <MainText>{data.sys.country}</MainText>
          </ResultLocationText>
        <ResultStyled>
          <SplitContainer left>
            <BigCard
              imgText="weatherlogo"
              imgSrc={data.weather[0].icon}
              text={data.weather[0].main}
              secondaryText={data.weather[0].description}
            />
            <BigCard imgText="templogo" temp={data.main.temp} />
          </SplitContainer>
          <SplitContainer>
            <ExtraInfo
              wind={data.wind.speed}
              sunrise={data.sys.sunrise}
              sunset={data.sys.sunset}
              timezone={data.timezone}
            />
          </SplitContainer>
        </ResultStyled>
        </>
      ) : (
        // </ContentStyled>
        <Loader loading={loading} />
      )}
    </>
    // </div>
  );
};
export default Result;
