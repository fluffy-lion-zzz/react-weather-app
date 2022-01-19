import './App.css';
import { useEffect, useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components';
import { collect } from './utilities/collect'
import { suggestion } from './utilities/suggestion'


import img1 from './images/clouds.jpg'
import img2 from'./images/clouds2.jpg'
import img3 from './images/sun.jpg'
import img4 from './images/wind.jpg'

import Result from './Components/Results';

require('dotenv').config()

// const move = keyframes`
//   from {
//     transform: translateX(0);
//   }
//   to { 
//     transform: translateX(-550px);
//   }
// `

// const Back = styled.div `
//   position: absolute;
//   left: 0;
//   right: -550px;
//   top: 0;
//   bottom: 0;
//   z-index: -1;
//   background: url(${img1}) 0% 0% repeat;
//   background-size: 100%;
//   animation-name: ${move};
//   animation-duration: 10s;
//   animation-timing-function: linear;
//   animation-iteration-count: infinite;
// `
function App() {
  const [data, setData] = useState("")
  const [error, setError] = useState({ error: false, status: "" })
  const [input, setInput] = useState("")
  const [suggest, setSuggest] = useState([])
  const [suggestError, setSuggestError] = useState("")
  const images = [img1, img2, img3, img4]

  const sliderPresentation = 3000
  const [currentSlide, setCurrentSlide] = useState(0)
  let sliderInterval = useRef()

  useEffect(() => {
    sliderInterval = setInterval(() => {
      setCurrentSlide((currentSlide  + 1) % images.length)
    }, sliderPresentation)

    return () => {
      clearInterval(sliderInterval)
    }
  })
  const handleFetch = async () => {
    try {
      let newData = await collect(input)
      setData(newData)
    } catch(e) {
      setError({ error: e.message, status: e.status })
    }
  }

  const handleSuggestion = async () => {
    if(input){
      try {
        let newData = await suggestion(input)
        let items = await newData.features.map((item, index) => {
          return item.properties.city ? item.properties.city : null
        })
        items = new Set(items)
        let array = [...items]
        setSuggest(array)
      } catch(e) {
        setSuggestError("error")
      }
    }
  }
// check
  const updateInput = (item) => {
    let value = item.toLowerCase()
    setInput(value)
    setSuggest([])
  }
  useEffect(() => {
    handleSuggestion()
  },[input])
  

  return (
    <div className="App">

      <div>
        <h1>weather</h1>
        <input value={input} onChange={(e) => setInput(e.target.value)}/>
        <ul>
          { suggest && 
              // suggest[0].toLowerCase() !== input.toLowerCase() &&
                suggest.map((item, index) => {
                  return item !== null && <li key={index} onClick={() => updateInput(item)}>{item}</li>
                }) 
          }
        </ul>
        <h2>searching in the city: {input}</h2>
        <button onClick={handleFetch}>fetch</button>

        {images.map((image, index) => (
          <img 
            id={index}
            key={index}
            className={index === currentSlide ? 'imageActive' : 'image'}
            src={image}
            style={{ zIndex: `-${index +1}`}}
            // style={{ zIndex: -1 }}
          />
        ))}

      </div>
      {/* <Back></Back> */}

      <div class="bg"></div>
      <Result />

      {/* <button onClick={handleSuggestion}>suggest</button> */}
    </div>
  );
}

export default App;
