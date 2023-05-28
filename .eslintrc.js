module.exports = {
  env: {
    browser: false,
    es2021: true,
  },
  extends: ["standard-with-typescript", "prettier"],
  plugins: ["sort-imports-es6-autofix"],
  rules: {
    "no-new": ["off"],
    "@typescript-eslint/explicit-function-return-type": ["off"],
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
