const baseConfig = require('@rac/tools/.eslintrc.js');

module.exports = Object.assign({}, baseConfig, {
  extends: ['airbnb-base', 'prettier', 'plugin:prettier/recommended'],
});
