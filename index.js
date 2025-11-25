import getArgs from "./helpers/args.js";
import { printError, printSuccess, printHelp } from "./services/log.service.js";
import { saveKeyValue } from "./services/storage.service.js";

const saveToken = async (token) => {
  try {
    await saveKeyValue("token", token);
    printSuccess("Token saved successfully");
  } catch (error) {
    printError(error.message);
  }
};

const startCLI = () => {
  const args = getArgs(process.argv);
  console.log(args);

  if (args.h) {
    printHelp();
    // help
  }
  if (args.s) {
    // save city
  }
  if (args.t) {
    return saveToken(args.t);
    // save token
  }
  //result
};

startCLI();
