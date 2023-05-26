module.exports = {
  env: {
    browser: false,
    es2021: true,
  },
  extends: ["standard-with-typescript", "prettier"],
  overrides: [],
  parserOptions: {
    project: ["tsconfig.json", "__tests__/tsconfig.json"],
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {},
}
