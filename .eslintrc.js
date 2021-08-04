/**
 * for import/no-resolved : https://stackoverflow.com/questions/55198502/using-eslint-with-typescript-unable-to-resolve-path-to-module/56696478#56696478
 */

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:import/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "google",
    "plugin:@next/next/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    "no-console": "warn",
    "import/first": "error",
    "react/prop-types": 0,
    "linebreak-style": ["error", "unix"],
    "prettier/prettier": "error",
    "linebreak-style": ["error", "unix"],
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",
  },
}
