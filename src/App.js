import './App.css';
import { useEffect, useState } from 'react'
import { collect } from './utilities/collect'
import { suggestion } from './utilities/suggestion'
import Result from './Components/Results';
require('dotenv').config()

function App() {
  const [data, setData] = useState("")
  const [error, setError] = useState({ error: false, status: "" })
  const [input, setInput] = useState("")
  const [suggest, setSuggest] = useState([])
  const [suggestError, setSuggestError] = useState("")
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
      <div class="bg"></div>
      <Result />
      {/* <button onClick={handleSuggestion}>suggest</button> */}
    </div>
  );
}

export default App;
