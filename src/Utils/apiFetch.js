import axios from "axios";

export const URL_DATA =
  "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=941";
export const URL_GEODECODING =
  "https://api.openweathermap.org/geo/1.0/direct?q=mexico&limit=5&appid=941fb36484e1d8d58679f540934568cb";
export const API_KEY = "941fb36484e1d8d58679f540934568cb";

export const weatherData = async (lat, lon) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    );
    return response.data;
  } catch (err) {
    return err;
  }
};


export const searchCountry = async (country) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/geo/1.0/direct?q=${country}&limit=&appid=${API_KEY}`
    );
    return response.data.length > 0
      ? response.data
      : "No se encontró la locación ingresada";
  } catch (err) {
    return "Error al buscar la locación"; 
  }
};

const prueba = await searchCountry("beijing")
console.log(prueba[0].name)
console.log(prueba[1])
console.log(prueba)
