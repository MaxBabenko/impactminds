module.exports = {
    "parser": "babel-eslint",
    "env": {
        "es6": true
    },
    "extends": "airbnb",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "react-native"
    ],
    "rules": {
        "react/jsx-filename-extension": 0,
        "react/destructuring-assignment": [0, "never", { "ignoreClassFields": true }],
        "no-use-before-define": ["error", { "variables": false }],
        "react/require-default-props": [0]
    }
};