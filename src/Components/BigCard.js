const BigCard = ({ text, secondaryText, imgText }) => {
    return (
        <div>
            {/* <img alt={imgText} /> */}
            <h2>{text}</h2>
            {secondaryText && <h3>{secondaryText}</h3>}
        </div>
    )
}
export default BigCard