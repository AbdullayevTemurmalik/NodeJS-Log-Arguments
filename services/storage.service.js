import os from "os";
import path from "path";

const saveKeyValue = (key, value) => {
  console.log(path.join(os.homedir(), "weather-dataq.json"));
};

export { saveKeyValue };
