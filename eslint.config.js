import { ESLint } from "eslint";

/** @type {ESLint.Options} */
export default {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    // Adicione regras específicas ou customize conforme necessário
  },
};
