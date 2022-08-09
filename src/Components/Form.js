import { Button, MainText, FormContainer, InputContainer, Input, DisplaySearch, UnorderedList, ListItem } from "../Styles/Styles";
const Form = ({
  handleFetch,
  input,
  setInput,
  updateInput,
  suggest,
  setClicked,
  search,
}) => {
  const handler = (item) => {
    updateInput(item);
    setClicked(true);
  };
  const clearSearch = () => {
    setInput("");
    setClicked(false);
  };
  const focused = () => {
    
    setClicked(false);
    
  };
  return (
    <FormContainer onSubmit={handleFetch}>
      <InputContainer>
        <Input
          className="userInput"
          value={input}
          type="text"
          onChange={(e) => setInput(e.target.value)}
          onFocus={focused}
          onClick={(e) => e.target.select()}
        />
        <Button clearSearch type="button" onClick={clearSearch}>
          &#10007;
        </Button>
      </InputContainer>
      <UnorderedList>
        {suggest &&
          suggest.map((item, index) => {
            return (
              item !== null && (
                <ListItem key={index} onClick={() => handler(item)}>
                  {item}
                </ListItem>
              )
            );
          })}
      </UnorderedList>
      <DisplaySearch>
        <MainText>searching in the city:</MainText>
        <MainText>{search}</MainText>
      </DisplaySearch>
      <Button search type="submit" value="submit">
        search
      </Button>
    </FormContainer >
  );
};
export default Form;
