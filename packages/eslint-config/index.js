module.exports = {
    extends: [
        "next/core-web-vitals",
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "prettier"
    ],
    parserOptions: {
        "project": "./tsconfig.json",
    },
    plugins: [
        "@typescript-eslint",
    ],
    rules: {
        "indent": "off",
        "class-methods-use-this": "off",
        "react/prop-types": "off",
        "react/display-name": "off",
        "react/no-unescaped-entities": "off",
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": ["error"],
        "require-jsdoc": "off",
        "valid-jsdoc": "off",
        "max-len": "off",
        "new-cap": "off",
        "no-invalid-this": "off",
        "eqeqeq": "error",
        "object-curly-spacing": ["error", "always"],
        "space-before-function-paren": "off",
        "operator-linebreak": [
            "error",
            "after",
            { "overrides": { "?": "before", ":": "before" } }
        ],
        "import/no-anonymous-default-export": [
            "error",
            {
                "allowNew": true
            }
        ],
        "@typescript-eslint/no-unsafe-member-access": "off",
        "@typescript-eslint/no-unsafe-return": "off",
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-inferrable-types": "off",
        "@typescript-eslint/restrict-template-expressions": "off",
        "@typescript-eslint/ban-types": "off",
        "@typescript-eslint/no-floating-promises": "off",
        "@typescript-eslint/no-unsafe-call": "off",
        "@typescript-eslint/require-await": "off",
        "@typescript-eslint/restrict-plus-operands": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/no-misused-promises": "off",
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-unnecessary-type-assertion": "off",
        "react-hooks/rules-of-hooks": "off",
        "react-hooks/exhaustive-deps": "off",
        "@next/next/no-img-element": "off",
        "@typescript-eslint/no-unsafe-argument": "off",
        "jsx-a11y/alt-text": "off"
    },
};
