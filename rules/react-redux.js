module.exports = {
    plugins: [
        'react-redux',
        'react'
    ],

    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },

    rules: {
        // Enforces that all connected components are defined in a separate file
        // https://github.com/DianaSuvorova/eslint-plugin-react-redux/blob/master/docs/rules/prefer-separate-component-file.md
        'react-redux/prefer-separate-component-file': 'error',
    },
};
