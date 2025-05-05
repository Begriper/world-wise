module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es2022: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended",
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    settings: {
        react: {
            version: "18.2",
        },
    },
    rules: {
        "default-case": "warn",
        "no-fallthrough": "warn",
        "no-unused-vars": [
            "warn",
            { vars: "all", args: "after-used", ignoreRestSiblings: false },
        ],
        "no-console": "warn",
        "react/jsx-no-target-blank": "off",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "react/prop-types": "off",
    },
};
