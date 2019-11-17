const path = require("path");
const file = path.join(__dirname, "./client/index.html");

const options = {
  outDir: path.join(__dirname, "./dist"),
  outFile: "index.html",
  watch: true,
  hmr: true
};
module.exports = { file, options };
