import BigCard from "./BigCard";
import ExtraInfo from "./ExtraInfo";
import styled, { keyframes } from "styled-components";
import { ContentStyled } from "../Styles/Styles";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
const ResultStyled = styled(motion.div)`
  border: solid blue 3px;
  position: relative;
  z-index: 1;
`;

const Result = ({ data }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div label="result" style={{ backgroundColor: "rgb(205, 237, 246" }}>
      {!loading && data ? (
        // <ContentStyled>
        <ResultStyled>
          <h1>{data.name}</h1>
          <h3>{data.sys.country}</h3>
          <div style={{ border: "solid aqua 5px" }}>
            <BigCard
              imgText="weatherlogo"
              imgSrc={data.weather[0].icon}
              text={data.weather[0].main}
              secondaryText={data.weather[0].description}
            />
            <BigCard imgText="templogo" text={data.main.temp} />
          </div>
          <div>
            <ExtraInfo
              wind={data.wind.speed}
              sunrise={data.sys.sunrise}
              sunset={data.sys.sunset}
            />
          </div>
        </ResultStyled>
      ) : (
        // </ContentStyled>
        <p>loading...</p>
      )}
    </div>
  );
};
export default Result;
