const BigCard = ({ text, secondaryText, imgText, imgSrc }) => {
  let url = `http://openweathermap.org/img/wn/${imgSrc}@2x.png`;
  return (
    <div>
      <h2>{text}</h2>
      {secondaryText && (
        <>
          <h3>{secondaryText}</h3>
          <img src={url} />
        </>
      )}
    </div>
  );
};
export default BigCard;
