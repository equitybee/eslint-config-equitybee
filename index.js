module.exports = {
  extends: ["semistandard", "prettier"],
  plugins: ["prettier"],
  rules: {
    curly: "error",
    camelcase: "off",
    "no-case-declarations": "warn",
    "no-console": "error",
    "no-debugger": "warn",
    "no-else-return": "warn",
    "no-undef": "off",
    "no-unused-vars": "off",
    "no-var": "warn",
    "no-param-reassign": "warn",
    "object-shorthand": "warn",
    "no-unneeded-ternary": "error",
    "prefer-destructuring": ["error", { object: true, array: true }],
    "prefer-template": "error",
    "prefer-const": "warn",
    "import/no-extraneous-dependencies": "warn",
    "import/order": [
      "warn",
      {
        "newlines-between": "always",
      },
    ],
    "padding-line-between-statements": [
      "warn",
      {
        blankLine: "always",
        prev: "*",
        next: "class",
      },
      {
        blankLine: "always",
        prev: "*",
        next: "for",
      },
      {
        blankLine: "always",
        prev: "*",
        next: "function",
      },
      {
        blankLine: "always",
        prev: "*",
        next: "if",
      },
      {
        blankLine: "always",
        prev: "*",
        next: "return",
      },
      {
        blankLine: "always",
        prev: "*",
        next: "switch",
      },
      {
        blankLine: "always",
        prev: "*",
        next: "try",
      },
      {
        blankLine: "always",
        prev: "*",
        next: "while",
      },
      {
        blankLine: "always",
        prev: "block-like",
        next: ["let", "const"],
      },
    ],
  },
};
