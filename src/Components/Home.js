import { useState, useRef, useEffect } from "react";
import img1 from "../images/clouds.jpg";
import img2 from "../images/clouds2.jpg";
import img3 from "../images/sun.jpg";
import img4 from "../images/wind.jpg";

const Home = ({ input, setInput, suggest, updateInput, handleFetch }) => {
  const images = [img1, img2, img3, img4];
  const sliderPresentation = 3000;
  const [currentSlide, setCurrentSlide] = useState(0);
  let sliderInterval = useRef();

  useEffect(() => {
    sliderInterval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % images.length);
    }, sliderPresentation);

    return () => {
      clearInterval(sliderInterval);
    };
  });

  return (
    <div>
      <h1>home</h1>
      <input className="userInput" value={input} onChange={(e) => setInput(e.target.value)} />
      <ul>
        {suggest &&
          // suggest[0].toLowerCase() !== input.toLowerCase() &&
          suggest.map((item, index) => {
            return (
              item !== null && (
                <li key={index} onClick={() => updateInput(item)}>
                  {item}
                </li>
              )
            );
          })}
      </ul>
      <h2>searching in the city: {input}</h2>
      <button onClick={handleFetch}>fetch</button>

      {images.map((image, index) => (
        <img
          id={index}
          key={index}
          className={index === currentSlide ? "imageActive" : "image"}
          src={image}
          style={{ zIndex: `-${index + 1}` }}
          // style={{ zIndex: -1 }}
        />
      ))}
    </div>
  );
};
export default Home;
