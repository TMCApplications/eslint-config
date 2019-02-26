module.exports = {
    plugins: [
        'jsx-a11y',
        'react'
    ],

    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },

    rules: {
        // Ensure <a> tags are valid - Disabled
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/0745af376cdc8686d85a361ce36952b1fb1ccf6e/docs/rules/anchor-is-valid.md
        'jsx-a11y/anchor-is-valid': 'off',

        // Require onClick be accompanied by onKeyUp/onKeyDown/onKeyPress - Disabled
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/click-events-have-key-events.md
        'jsx-a11y/click-events-have-key-events': 'off',

        // Enforce that a label tag has a text label and an associated control - Disabled
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/b800f40a2a69ad48015ae9226fbe879f946757ed/docs/rules/label-has-associated-control.md
        'jsx-a11y/label-has-associated-control': 'off',

        // Require that JSX labels use "htmlFor" - Disabled
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-for.md
        'jsx-a11y/label-has-for': 'off',

        // Enforce that DOM elements without semantic behavior not have interaction handlers - Disabled
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
        'jsx-a11y/no-static-element-interactions': 'off',
    },
};
