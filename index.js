// Checks for a kebab-case string pre-pending at most one '.' with a lowercase string
// Refer to the internal "Client Style Guide" Google doc for more information
const VALID_FILENAME_REGEX = `^([a-z][a-z0-9]*)(-[a-z0-9]+)*(\.[a-z0-9]+)?$`;

module.exports = {
  extends: ["eslint:recommended", "prettier"],
  plugins: ["filenames", "react-hooks", "prettier"],
  rules: {
    "filenames/no-index": "warn",
    "filenames/match-regex": ["warn", VALID_FILENAME_REGEX, true],
    "import/no-extraneous-dependencies": "warn",
    "import/order": [
      "warn",
      {
        "newlines-between": "always",
      },
    ],
    "no-undef": "error",
    "no-case-declarations": "warn",
    "no-console": "warn",
    "no-debugger": "warn",
    "no-else-return": "warn",
    "no-extra-semi": 2,
    "no-param-reassign": "warn",
    "no-undef": "off",
    "no-useless-return": "warn",
    "arrow-body-style": "warn",
    "no-unneeded-ternary": "error",
    "no-unused-vars": ["error", { args: "none" }],
    "no-var": "warn",
    "object-shorthand": "warn",
    "prefer-const": "warn",
    "max-lines": ["warn", { skipBlankLines: true, skipComments: true }],
    "id-length": ["warn", { properties: "never" }],
    "prefer-destructuring": ["warn", { object: true }],
    "prefer-template": "warn",
    "react-hooks/exhaustive-deps": "off",
    camelcase: "off",
    curly: ["warn", "all"],
    yoda: "warn",
    semi: [2, "always"],
  },
};
