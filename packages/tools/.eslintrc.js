module.exports = {
  extends: [
    'eslint:recommended',
    'google',
    'prettier',
    'plugin:prettier/recommended',
  ],
  parser: 'babel-eslint',
  plugins: ['prettier'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2017,
  },
  env: {
    es6: true,
    node: true,
  },
  rules: {
    'prettier/prettier': 'error',
    'prefer-const': 'error',
    'require-jsdoc': 'off',
  },
};
