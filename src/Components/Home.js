import { useState, useRef, useEffect } from "react";
import img1 from "../images/clouds.jpg";
import img2 from "../images/clouds2.jpg";
import img3 from "../images/sun.jpg";
import img4 from "../images/wind.jpg";
import "../Styles/Home.css";
const Home = ({ input, setInput, suggest, updateInput, handleFetch }) => {
  const images = [img1, img2, img3, img4];
  const [currentSlide, setCurrentSlide] = useState(0);
  // useRef does not cause a re-render
  let sliderInterval = useRef();
  let switchImages = () => {
    if (currentSlide < images.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(0);
    }
  };
  useEffect(() => {
    sliderInterval = setInterval(() => {
      switchImages();
    }, 5000);
    return () => {
      clearInterval(sliderInterval);
    };
  });
  return (
    <div>
      <div className="imgWrapper">
        {images.map((img, index) => {
          return (
            <img
              src={img}
              className={
                index === currentSlide ? "imageActive homeImage" : "image"
              }
            />
          );
        })}
      </div>
      <div className="content">
        <h1>home</h1>
        <input
          className="userInput"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <ul>
          {suggest &&
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
      </div>
    </div>
  );
};
export default Home;
