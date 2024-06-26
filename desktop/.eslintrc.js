/* eslint-env node */
module.exports = {
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        /* What we really want eventually */
        // "plugin:@typescript-eslint/strict-type-checked",
        // "plugin:@typescript-eslint/stylistic-type-checked",
    ],
    plugins: ["@typescript-eslint"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: true,
    },
    root: true,
    ignorePatterns: [".eslintrc.js", "app", "out", "dist"],
    env: {
        es2022: true,
        node: true,
    },
};
