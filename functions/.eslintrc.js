module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  globals: [
    "describe",
    "it"
  ],
  parserOptions: {
    "ecmaVersion": 2018
  },
  extends: [
    "eslint:recommended",
  ],
  rules: {
    quotes: ["error", "double"],
  },
};
