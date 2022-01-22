import BigCard from "./BigCard";
import ExtraInfo from "./ExtraInfo";

const Result = ({ data }) => {
  return (
    <div label="result" style={{ backgroundColor: "rgb(205, 237, 246" }}>
      <div style={{ border: "solid red 5px" }}>
        <h1>{data.name}</h1>
        <h3>{data.sys.country}</h3>
        <div style={{ border: "solid aqua 5px" }}>
          <BigCard imgText="weatherlogo" text={data.weather[0].main} secondaryText={data.weather[0].description}/>
          <BigCard imgText="templogo" text={data.main.temp} />
        </div>
        <div>
          <ExtraInfo wind={data.wind.speed} sunrise={data.sys.sunrise} sunset={data.sys.sunset}/>
        </div>
      </div>
    </div>
  );
};
export default Result;
