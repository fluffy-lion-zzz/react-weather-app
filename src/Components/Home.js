import { useState, useRef, useEffect } from "react";
import Background from "./Background";


const Home = ({ input, setInput, suggest, updateInput, handleFetch }) => {
  
  return (
    <div>
      <Background />
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
