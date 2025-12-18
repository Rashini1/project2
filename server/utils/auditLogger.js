const fs = require("fs");

module.exports = (message) => {
  fs.appendFileSync("logs/audit.log", `${new Date()} - ${message}\n`);
};
