/**
 * @fileoverview Ensure no file is named 'index'
 * @author Jonathan Levi
 */

const path = require("path");
const parseFilename = require("../utils/parse-filename");

module.exports = (context) => {
  return {
    Program: (node) => {
      const filename = context.getFilename();
      const absoluteFilename = path.resolve(filename);
      const parsed = parseFilename(absoluteFilename);

      if (parsed.name === "index") {
        context.report(node, "Files named 'index' are not allowed.");
      }
    },
  };
};
