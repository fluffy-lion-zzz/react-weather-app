require("dotenv").config();

// export const collect = async (input) => {
//   const key = process.env.REACT_APP_API_KEY;
//   const res = await fetch(
//     `http://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${key}&units=metric`
//   );
//   const data = await res.json();
//   if (res.status !== 200) {
//     throw { message: data.message, status: res.status };
//   }
//   return data;
// };

export const collect = async (input) => {
  const data = await fetch(`/.netlify/functions/fetch-weather?input=${input}`);
  if(data.status === 500){
    return {
      message: data.statusText,
      status: data.status,
      error: true,
    }
  }
  return data.json();
};
