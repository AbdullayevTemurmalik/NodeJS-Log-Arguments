import getArgs from "./helpers/args.js";
import { printHelp, printError, printSuccess } from "./services/log.service.js";
import { saveKeyValue, TOKEN_DICTIONARY } from "./services/storage.service.js";
import { getWeather } from "./services/api.service.js";

const saveToken = async (token) => {
  if (!token.length) {
    printError("Token not provided");
    return;
  }

  try {
    await saveKeyValue(TOKEN_DICTIONARY.token, token);
    printSuccess("Token saved successfully");
  } catch (err) {
    printError(err.message);
  }
};

const saveCity = async (city) => {
  if (!city.length) {
    printError("City not provided");
    return;
  }

  try {
    await saveKeyValue(TOKEN_DICTIONARY.city, city);
    printSuccess("City saved successfully");
  } catch (err) {
    printError(err.message);
  }
};

const startCLI = () => {
  const args = getArgs(process.argv);

  if (args.h) return printHelp();
  if (args.t) return saveToken(args.t);
  if (args.s) return saveCity(args.s);

  getWeather();
};

startCLI();
