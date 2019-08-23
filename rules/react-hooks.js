module.exports = {
    plugins: [
        'react-hooks',
        'react'
    ],

    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },

    rules: {
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
    },
};
