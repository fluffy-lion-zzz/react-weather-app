import SmallCard from "./SmallCard"

const ExtraInfo = ({ wind, sunrise, sunset }) => {
    return (
        <div>
            <SmallCard info={wind}/>
            <SmallCard info={sunrise}/>
            <SmallCard info={sunset}/>
        </div>
    )
}
export default ExtraInfo