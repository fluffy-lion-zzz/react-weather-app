require("dotenv").config();

// export const suggestion = async (input) => {
//     const key = process.env.REACT_APP_GEO_API_KEY
//     const res = await fetch (
//       `https://api.geoapify.com/v1/geocode/autocomplete?text=${input}&apiKey=${key}`
//     )
//     const data = await res.json()
//     if(res.status !== 200){
//       throw { message: data.message, status: data.statusCode }
//     }
//     return data
//   }

export const suggestion = async (input) => {
  const data = await fetch(
    `/.netlify/functions/fetch-suggestion?input=${input}`
  );
  return data.json();
};
