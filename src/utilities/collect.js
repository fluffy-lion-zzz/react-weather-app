// require('dotenv').config()

// export const collect = async () => {
//     const key = process.env.REACT_APP_API_KE
//     // try{
//       const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=london&appid=${key}`)
//       if(res.status !== 200){
//         // throw new Error(res.status)
//         const error = await res.json()

//         throw { message: error.message, status: error.cod }
//       }
//         const data = await res.json()
//         return data 
// }

require("dotenv").config();

export const collect = async () => {
  const key = process.env.REACT_APP_API_KEY;
  const res = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=london&appid=${key}`
  );
  const data = await res.json();
  if (res.status !== 200) {
    throw { message: data.message, status: res.status };
  }
  return data;
};