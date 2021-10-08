/**
 * @fileoverview Ensure no file name ends with an invalid suffix
 * @author Jonathan Levi
 */

const path = require("path");
const parseFilename = require("../utils/parse-filename");

const FILETYPES = [".js", ".jsx", ".ts", ".tsx"];
const VALID_SUFFIXES = ["styles", "actions", "reducers", "router", "stories", "test", "tests"];

module.exports = (context) => {
  return {
    Program: (node) => {
      const filename = context.getFilename();
      const absoluteFilename = path.resolve(filename);
      const parsed = parseFilename(absoluteFilename);

      const chunks = parsed.name.split(".");

      if (chunks.length > 1) {
        const suffix = chunks[chunks.length - 1];

        if (FILETYPES.includes(parsed.ext) && !VALID_SUFFIXES.includes(suffix)) {
          context.report(node, `Files with suffix '${suffix}' are not allowed`);
        }
      }
    },
  };
};
