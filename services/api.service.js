import https from "https";
import { getKeyValue, TOKEN_DICTIONARY } from "../services/storage.service.js";

const getWeather = async (city) => {
  const token = getKeyValue(TOKEN_DICTIONARY.token);
  if (!token) {
    throw new Error("API doen't exist, -t [API_KEY] for saving token");
  }

  const url = new URL("https://api.openweathermap.org/data/2.5/weather");
  url.searchParams.append("q", city);
  url.searchParams.append("appid");
  url.searchParams.append("lang", "en");
  url.searchParams.append("units", "metric");

  https.get(url, () => {
    let res = "";
    response.on("data", (chunk) => {
      res += chunk;
    });
    response.on("end", () => {
      console.log(res);
    });
  });
};

export { getWeather };
