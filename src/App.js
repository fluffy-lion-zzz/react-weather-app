import './App.css';
import { useState } from 'react'
import { collect } from './utilities/collect'
require('dotenv').config()

function App() {
  const [data, setData] = useState("")
  const [error, setError] = useState({ error: false, status: "" })
  const handleFetch = async () => {
    try {
      let newData = await collect()
      setData(newData)
    } catch(e) {
      setError({ error: e.message, status: e.status })
    }
  }
  return (
    <div className="App">
      <h1>weather</h1>
      <button onClick={handleFetch}>fetch</button>
    </div>
  );
}

export default App;
