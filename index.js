const getArgs = require("./helpers/args");

const startCLI = () => {
  const args = getArgs(process.argv);
  console.log(args);
};

startCLI();
