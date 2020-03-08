module.exports = {
    "extends": "standard",
    "env": {
      "browser": true,
      "mocha": true,
      "node": true
    },
    "rules": {
      "indent": [2, 2, {"SwitchCase": 1}],
      "no-new": 0,
      "react/jsx-uses-react": 2,
      "react/jsx-uses-vars": 2,
      "react/react-in-jsx-scope": 2,
      "react/sort-comp": 0,
      "react/no-multi-comp": 0,
      "comma-dangle": 0,
      "id-length": 0,
      "new-cap": 0,
      "eol-last": 0,
      "jsx-quotes": 0,
      "consistent-return": 0,
      "import/no-named-default": 0,
    },
    "parser": "babel-eslint",
    "plugins": [
        "standard",
        "react"
    ],
};
