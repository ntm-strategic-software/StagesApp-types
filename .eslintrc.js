module.exports = {
  root: true,
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {},
  rules: {
    '@typescript-eslint/no-explicit-any': 0,
    'quotes': [1, "single", "avoid-escape"],
    'semi': 1,
    // "no-console": 0,
    // "no-alert": 2,
    // "no-unused-vars": 1,
    // "camelcase": 0,
    // "no-trailing-spaces": 0,
    // "no-loop-func": 1,
    // "eqeqeq": 2,
    // "no-eval": 2,
    // "no-fallthrough": 2,
    // "radix": 2,
    // "no-shadow": 1,
    // "strict": 1,
    // "comma-dangle": [1, "always-multiline"],
    // "eol-last": 1,
    // "func-call-spacing": [1, "never"],
    // "func-style": [1, "expression", { "allowArrowFunctions": true }],
    // "key-spacing": [1, {"beforeColon": false, "afterColon": true}],
    // "no-tabs": 1,
    // "arrow-spacing": [1, {"before": true, "after": true}],
    // "no-var": 2,
    // "prefer-const": [1, {"destructuring": "all"}],
    // "rest-spread-spacing": [2, "never"],
    // "yield-star-spacing": [2, "after"],
  },
};
