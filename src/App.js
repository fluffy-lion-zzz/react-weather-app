import './App.css';
import { useEffect, useState } from 'react'
import { collect } from './utilities/collect'
import { suggestion } from './utilities/suggestion'
require('dotenv').config()

function App() {
  const [data, setData] = useState("")
  const [error, setError] = useState({ error: false, status: "" })
  const [input, setInput] = useState("manchester")
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
    try {
      let newData = await suggestion(input)
      setSuggest(newData)
    } catch(e) {
      setSuggestError("error")
    }
  }
  // useEffect(() => {
  //   handleSuggestion()
  // },[input])
  return (
    <div className="App">
      <h1>weather</h1>
      <input onChange={(e) => setInput(e.target.value)}/>
      <h2>searching in the city: {input}</h2>
      <button onClick={handleFetch}>fetch</button>
      <button onClick={handleSuggestion}>suggest</button>
    </div>
  );
}

export default App;
