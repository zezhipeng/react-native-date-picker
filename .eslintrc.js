module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true
  },
  "parser": "babel-eslint",
  "extends": "airbnb",
  "plugins": [
    "react",
    "react-native",
    "fp"
  ],
  "rules": {
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "never"
    ],
    'comma-dangle': [
      "error",
      "never"
    ],
    "react/jsx-filename-extension": [
      1, { "extensions": [".js", ".jsx"] }
    ],
    "jsx-quotes": [
      "error",
      "prefer-single"
    ],
    "no-console": 0,
    "react/prop-types": 0,
    "no-underscore-dangle": 0
  }
};