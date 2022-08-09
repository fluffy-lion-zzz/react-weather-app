export const mockLondon = {
  coord: {
    lon: -0.1257,
    lat: 51.5085,
  },
  weather: [
    {
      id: 804,
      main: "Clouds",
      description: "overcast clouds",
      icon: "04d",
    },
  ],
  base: "stations",
  main: {
    temp: 289.82,
    feels_like: 289.42,
    temp_min: 287.94,
    temp_max: 291.01,
    pressure: 1018,
    humidity: 72,
  },
  visibility: 10000,
  wind: {
    speed: 3.6,
    deg: 220,
  },
  clouds: {
    all: 100,
  },
  dt: 1652730250,
  sys: {
    type: 2,
    id: 2019646,
    country: "GB",
    sunrise: 1652674048,
    sunset: 1652730388,
  },
  timezone: 3600,
  id: 2643743,
  name: "London",
  cod: 200,
};

export const mockSuggest = ["Llanuwchllyn", "City of London", "London"];
