import { useState, useRef, useEffect } from "react";
import Background from "./Background";
import { ContentStyled } from "../Styles/Styles";

const Home = ({ input, setInput, suggest, updateInput, handleFetch }) => {
  return (
    <div>
      <Background />
      <ContentStyled>
        <h1>home</h1>
        <form onSubmit={handleFetch}>
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
          <button type="submit" value="submit">
            fetch
          </button>
        </form>
      </ContentStyled>
    </div>
  );
};
export default Home;
