const indexRule = require("../../../lib/rules/no-invalid-suffix");
const RuleTester = require("eslint").RuleTester;

const testCode = "var bee = 'honey';";
const ruleTester = new RuleTester();

ruleTester.run("no-invalid-suffix", indexRule, {
  valid: [
    {
      code: testCode,
      filename: "equitybee.styles.js",
    },
    {
      code: testCode,
      filename: "equitybee.actions.js",
    },
    {
      code: testCode,
      filename: "equitybee.reducers.js",
    },
    {
      code: testCode,
      filename: "equitybee.router.js",
    },
    {
      code: testCode,
      filename: "equitybee.stories.js",
    },
    {
      code: testCode,
      filename: "/some/dir/equitybee.styles.js",
    },
  ],
  invalid: [
    {
      code: testCode,
      filename: "equitybee.style.js",
      errors: [{ message: "Files with suffix 'style' are not allowed", column: 1, line: 1 }],
    },
    {
      code: testCode,
      filename: "equitybee.action.js",
      errors: [{ message: "Files with suffix 'action' are not allowed", column: 1, line: 1 }],
    },
    {
      code: testCode,
      filename: "equitybee.reducer.js",
      errors: [{ message: "Files with suffix 'reducer' are not allowed", column: 1, line: 1 }],
    },
    {
      code: testCode,
      filename: "equitybee.routers.js",
      errors: [{ message: "Files with suffix 'routers' are not allowed", column: 1, line: 1 }],
    },
    {
      code: testCode,
      filename: "equitybee.story.js",
      errors: [{ message: "Files with suffix 'story' are not allowed", column: 1, line: 1 }],
    },
    {
      code: testCode,
      filename: "/some/dir/equitybee.story.js",
      errors: [{ message: "Files with suffix 'story' are not allowed", column: 1, line: 1 }],
    },
  ],
});
