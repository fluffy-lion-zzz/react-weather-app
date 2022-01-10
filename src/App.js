import './App.css';
import { useState } from 'react'
import { collect } from './utilities/collect'
require('dotenv').config()

function App() {
  const [data, setData] = useState("")
  const [error, setError] = useState({ error: false, message: "" })

  
  const handleFetch = async () => {
    try {
      let newData = await collect()
      setData(newData)
    } catch(e) {
      console.log(e)
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
