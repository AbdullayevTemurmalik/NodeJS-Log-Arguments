import getArgs from "./helpers/args.js";
import { printError, printSuccess, printHelp } from "./services/log.service.js";
import { saveKeyValue, TOKEN_DICTIONARY } from "./services/storage.service.js";
import { getWeather } from "./services/weather.service.js";

const saveToken = async (token) => {
  if (!token) {
    printError("Token not provided");
    return;
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.token, token);
    printSuccess("Token saved successfully");
  } catch (error) {
    printError(error.message);
  }
};

const startCLI = () => {
  const args = getArgs(process.argv);

  if (args.h) printHelp();

  if (args.s) {
    // save city
  }

  if (args.t) {
    return saveToken(args.t);
  }

  getWeather("uzbekistan");
};

startCLI();
