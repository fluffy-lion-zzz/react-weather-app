// import { useState, useRef, useEffect } from "react";
import Background from "./Background";
import { ContentStyled, Heading, MainTextContainer } from "../Styles/Styles";
import Form from "./Form";

const Home = ({ input, setInput, suggest, updateInput, handleFetch, setClicked, search }) => {


  return (
    <div>
      <Background />
      <ContentStyled>
        <MainTextContainer header >
          <Heading>What's Weather Like?</Heading>
        </MainTextContainer>
        <Form 
        input={input}
        setInput={setInput}
        suggest={suggest}
        updateInput={updateInput}
        handleFetch={handleFetch}
        setClicked={setClicked}
        search={search}
        />
      </ContentStyled>
    </div>
  );
};
export default Home;
