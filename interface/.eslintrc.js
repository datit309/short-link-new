module.exports = {
    root: true,
    env: {
        node: true,
        browser: true,
    },
    extends: [
        "@nuxtjs/eslint-config-typescript",
        'prettier',
        "eslint:recommended"
    ],
    plugins: ['prettier'],
    rules: {
        "no-console": "off",
        "no-debugger": "off",
        "no-unused-vars": "off",
        "vue/multi-word-component-names": "off",
        "no-undef": "off",
        "no-import-assign": "off",
        "vue/valid-template-root": "off",
        "prettier/prettier": ['error'],
        "require-await": "off",
        "eqeqeq": "off",
        'vue/script-setup-no-uses-vars': 'off',
    },
};
