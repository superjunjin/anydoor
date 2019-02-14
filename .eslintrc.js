module.exports = {
  "extends": ["eslint:recommended"],
  "rules": {
    "no-console": ["error", {
      "allow": ["warn", "error", "info"]
    }]
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "script"
  },
  "globals": {
  },
  "env": {
    "node": true,
    "es6": true,
    "mocha": true
  },
  // add your custom rules here
  "rules": {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    //关闭禁止混用tab和空格
    "no-mixed-spaces-and-tabs": [0],
    "no-tabs": 'off',
    "no-trailing-spaces": 'off'
  }
};
