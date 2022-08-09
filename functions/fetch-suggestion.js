require("dotenv").config();
const axios = require("axios");
const handler = async (event, context) => {
  const { input } = event.queryStringParameters;

  const key = process.env.REACT_APP_GEO_API_KEY;
  const url = `https://api.geoapify.com/v1/geocode/autocomplete?text=${input}&apiKey=${key}`;
  try {
    const { data } = await axios.get(url);
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    const { status, statusText, headers, data } = error.response;
    return {
      statusCode: status,
      body: JSON.stringify({ status, statusText, headers, data }),
    };
  }
};

module.exports = {
  handler,
};
