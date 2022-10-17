const fs = require("fs");

const saveDb = (DB) => {
  fs.writeFileSync("./src/database/data.json", JSON.stringify(DB, null, 2), {
    encoding: "UTF-8",
  });
};

module.exports = { saveDb };
