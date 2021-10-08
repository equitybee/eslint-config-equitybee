const path = require("path");

module.exports = parseFilename = (filename) => {
  const ext = path.extname(filename);
  return {
    dir: path.dirname(filename),
    base: path.basename(filename),
    ext,
    name: path.basename(filename, ext),
  };
};
