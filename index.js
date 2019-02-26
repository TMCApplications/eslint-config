module.exports = {
    plugins: [
        'react',
        'react-redux'
    ],
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-redux/recommended',
        ...[
            'eslint-config-airbnb',
            './rules/base',
            './rules/import',
            './rules/react',
            './rules/react-a11y',
            './rules/react-redux',
        ].map(require.resolve),
    ],
    rules: {}
};
