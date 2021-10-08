const indexRule = require("../../../lib/rules/no-index");
const RuleTester = require("eslint").RuleTester;

const testCode = "var bee = 'honey';";
const ruleTester = new RuleTester();

ruleTester.run("no-index", indexRule, {
  valid: [
    {
      code: testCode,
      filename: "equitybee.js",
    },
    {
      code: testCode,
      filename: "/some/dir/equitybee.js",
    },
    {
      code: testCode,
      filename: "/some/dir/index-equitybee.js",
    },
  ],
  invalid: [
    {
      code: testCode,
      filename: "index.js",
      errors: [{ message: "Files named 'index' are not allowed.", column: 1, line: 1 }],
    },
    {
      code: testCode,
      filename: "/some/dir/index.js",
      errors: [{ message: "Files named 'index' are not allowed.", column: 1, line: 1 }],
    },
  ],
});
