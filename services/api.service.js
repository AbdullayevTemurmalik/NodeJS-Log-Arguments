import https from "https";
import { getKeyValue, TOKEN_DICTIONARY } from "../services/storage.service.js";

const getWeather = async (city) => {
  const token = getKeyValue(TOKEN_DICTIONARY.token);
  if (!token) {
    throw new Error("API doen't exist, -t [API_KEY] for saving token");
  }

  const url = new URL(
    "https://api.openweathermap.org/data/2.5/weather?q=Tashkent&appid=83c3b71ca0e9968c63e6e736446e26a6"
  );
  url.searchParams.append("q", city);
  url.searchParams.append("appid", token);
  url.searchParams.append("lang", "en");
  url.searchParams.append("units", "metric");

  https.get(url, (response) => {
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
