// REACT ICONS INSTALLED!!!!

import "./App.css";
import { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// utils
import { collect } from "./utilities/collect";
import { suggestion } from "./utilities/suggestion";
// components
import Result from "./Components/Result";
import Home from "./Components/Home";
import { mockLondon, mockSuggest } from "./utilities/mock";
import Loader from "./Components/Loader";

require("dotenv").config();
function App() {
  const [data, setData] = useState("");
  const [error, setError] = useState({ error: false, status: "" });
  const [input, setInput] = useState("");
  const [suggest, setSuggest] = useState([]);
  const [suggestError, setSuggestError] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(true);
  const [clicked, setClicked] = useState(false)
  const search = useRef("")
  // >>> used for manual test
  const [test, setTest] = useState("");
  // >>> used for manual test
  const loader = () => {
    setTimeout(() => {
      setLoading(false);
    }, 100);
  };
  const getMocks = () => {
    setData(mockLondon);
    setSuggest(mockSuggest)
  };
  const handleFetch = async (e) => {
    e.preventDefault()
    console.log("fetched");
    try {
      let newData = await collect(input);
      setData(newData);
      setShowResult(true);
      setClicked(false)
      setInput("")
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
        let array = [...items]
        // let update = array.map(item => ({item: item, clicked: false}))
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
    loader(setLoading);
    // mock data
    getMocks()
  }, []);
  
  // useEffect(() => {
  //   search.current = input
  //  if(!clicked){
  //    handleSuggestion();
  //  }
  // }, [input]);

  return (
    <div className="App">
      <>
        {loading ? (
          <Loader />
        ) : (
          <>
            <Home
              input={input}
              setInput={setInput}
              suggest={suggest}
              updateInput={updateInput}
              handleFetch={handleFetch}
              setClicked={setClicked}
              search={search.current}
            />
            {data && (
              <Result
                loader={loader}
                setLoading={setLoading}
                loading={loading}
                data={data}
              />
            )}
          </>
        )}
      </>
      {/* <Back></Back> */}

      {/* <div class="bg"></div> */}

      {/* <button onClick={handleSuggestion}>suggest</button> */}
    </div>
  );
}

export default App;
