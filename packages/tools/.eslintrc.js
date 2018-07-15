module.exports = {
  root: true,

  parser: 'babel-eslint',

  plugins: ['prettier'],

  parserOptions: {
    jest: true,
    sourceType: 'module',
    ecmaVersion: 2018,
  },

  env: {
    es6: true,
    node: true,
    jest: true,
  },

  rules: {
    'prettier/prettier': 'error',
    'require-jsdoc': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    // turn off rules to be handled by prettier
    quotes: 0,
    semi: 0,
    'comma-dangle': 0,
  },
};
