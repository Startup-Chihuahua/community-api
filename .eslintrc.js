module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ['airbnb', 'prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: ['prettier'],
  rules: {
    'no-console': 'off',
    'no-throw-literal': 'off',
    'consistent-return': 'off',
    'no-useless-catch': 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        parser: 'flow',
        endOfLine: 'auto',
      },
    ],
  },
};
