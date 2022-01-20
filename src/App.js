import "./App.css";
import { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { collect } from "./utilities/collect";
import { suggestion } from "./utilities/suggestion";

import Result from "./Components/Results";
import Home from "./Components/Home";

require("dotenv").config();

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
  const [data, setData] = useState("");
  const [error, setError] = useState({ error: false, status: "" });
  const [input, setInput] = useState("");
  const [suggest, setSuggest] = useState([]);
  const [suggestError, setSuggestError] = useState("");
  const [showResult, setShowResult] = useState(false)
  const handleFetch = async () => {
    try {
      let newData = await collect(input);
      setData(newData);
      setShowResult(true)
    } catch (e) {
      setError({ error: e.message, status: e.status });
    }
  };

  const handleSuggestion = async () => {
    if (input) {
      try {
        let newData = await suggestion(input);
        let items = await newData.features.map((item, index) => {
          return item.properties.city ? item.properties.city : null;
        });
        items = new Set(items);
        let array = [...items];
        setSuggest(array);
      } catch (e) {
        setSuggestError("error");
      }
    }
  };
  // check
  const updateInput = (item) => {
    let value = item.toLowerCase();
    setInput(value);
    setSuggest([]);
  };
  useEffect(() => {
    handleSuggestion();
  }, [input]);

  return (
    <div className="App">
      <div>
        {!showResult ? 
          <Home
          input={input}
          setInput={setInput}
          suggest={suggest}
          updateInput={updateInput}
          handleFetch={handleFetch}
          />
          :
          <Result data={data}/>
        }
      </div>
      {/* <Back></Back> */}

      {/* <div class="bg"></div> */}
      

      {/* <button onClick={handleSuggestion}>suggest</button> */}
    </div>
  );
}

export default App;
