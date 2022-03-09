module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ["plugin:react/recommended", "standard"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    indent: ["error", 2],
    semi: [2, "always"],
    "space-before-function-paren": [
      "error",
      { anonymous: "always", named: "never" }
    ],
    quotes: [
      "error",
      "single",
      {
        allowTemplateLiterals: true,
        avoidEscape: true
      }],
    "computed-property-spacing": ["error", "never"],
    "comma-dangle": ["error", "never"],
    "multiline-ternary": 0,
    "operator-linebreak": [
      "error",
      "after",
      { overrides: { "?": "ignore", ":": "ignore" } }
    ],
    "object-curly-spacing": ["error", "always"],
    "indent": ['error', 2, {"SwitchCase": 1 }]
  }
};
