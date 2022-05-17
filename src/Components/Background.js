import { useState, useRef, useEffect } from "react";
import img1 from "../images/clouds.jpg";
import img2 from "../images/clouds2.jpg";
import img3 from "../images/sun.jpg";
import img4 from "../images/wind.jpg";
import "../Styles/Background.css";
const Background = () => {
  const images = [img1, img2, img3, img4];
  const [currentSlide, setCurrentSlide] = useState(0);
  let animationTime = 6000;
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
    }, animationTime);
    return () => {
      clearInterval(sliderInterval);
    };
  });
  return (
    <div className="imgWrapper">
      {images.map((img, index) => {
        let top = index === 3 ? 0 : index + 1;
        return (
          <img
            src={img}
            className={
              index === currentSlide ? "imageActive homeImage" : "image"
            }
            style={{ animationDuration: `${animationTime}ms` }}
          />
        );
      })}
    </div>
  );
};

export default Background;
