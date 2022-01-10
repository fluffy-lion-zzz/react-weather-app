require('dotenv').config()

export const collect = async () => {
    const key = process.env.REACT_APP_API_KEY
    try {
      const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=london&appid=${key}`)
      if(res.status !== 200){
        throw new Error("oops")
      }
      const data = await res.json()
      return data
    } catch(error){
      // setError({ error: true, message: error.message})
      console.log("error")
    }  
}