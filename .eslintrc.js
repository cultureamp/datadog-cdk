module.exports = {
  env: {
    browser: false,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "sort-imports-es6-autofix"],
  rules: {
    "no-new": ["off"],
    "@typescript-eslint/explicit-function-return-type": ["off"],
    "@typescript-eslint/no-explicit-any": ["off"],
  },
  overrides: [],
  parserOptions: {
    project: [
      "tsconfig.json",
      "__tests__/tsconfig.json",
      "__integration__/tsconfig.json",
    ],
    ecmaVersion: "latest",
    sourceType: "module",
  },
}
