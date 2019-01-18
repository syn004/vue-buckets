module.exports = {
  "root": true,
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "extends": [
    "plugin:vue/essential",
    "eslint:recommended"
  ],
  "parserOptions": {
    "parser": "babel-eslint"
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    "no-const-assign": 2,
    "no-var": 0,
    "arrow-spacing": 1,
    "comma-spacing": 2,
    "eqeqeq": 2,
    "indent": 0,
    "key-spacing": [0, { "beforeColon": false, "afterColon": true }],
    "quotes": [1, "single"],
    "semi": [0]
  }
}