import './App.css';
import { useState } from 'react'
require('dotenv').config()

function App() {
  const [data, setData] = useState("")
  const [error, setError] = useState({ error: false, message: "" })

  
  const handleFetch = async () => {
    const key = process.env.REACT_APP_API_KEY
    try {
      const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=london&appid=${key}`)
      
      if(res.status !== 200){
        throw new Error("oops")
      }
      const data = await res.json()
      setData(data)
      console.log(data)
    } catch(error){
      setError({ error: true, message: error.message})
    }
    
  }
  return (
    <div className="App">
      <h1>quote</h1>
      <button onClick={handleFetch}>fetch</button>
    </div>
  );
}

export default App;
