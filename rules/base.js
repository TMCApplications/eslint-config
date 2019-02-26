module.exports = {
    rules: {
        // Require array callbacks to return something - Disabled
        // https://eslint.org/docs/rules/array-callback-return
        'array-callback-return': 'off',

        // Require camel case names - Disabled
        // https://eslint.org/docs/rules/camelcase
        camelcase: 'off',

        // Require return statements to either always or never specify values - Disabled
        // https://eslint.org/docs/rules/consistent-return
        'consistent-return': 'off',

        // Require the use of === and !== - Disabled
        // https://eslint.org/docs/rules/eqeqeq
        eqeqeq: 'off',

        // This option sets a specific tab width for your code
        // https://eslint.org/docs/rules/indent
        indent: ['error', 4, {
            SwitchCase: 1,
            VariableDeclarator: 1,
            outerIIFEBody: 1,
            FunctionDeclaration: {
                parameters: 1,
                body: 1
            },
            FunctionExpression: {
                parameters: 1,
                body: 1
            },
            CallExpression: {
                arguments: 1
            },
            ArrayExpression: 1,
            ObjectExpression: 1,
            ImportDeclaration: 1,
            flatTernaryExpressions: false,
            ignoredNodes: ['JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild'],
            ignoreComments: false
        }],

        // Specify the maximum length of a line in your program
        // https://eslint.org/docs/rules/max-len
        'max-len': ['warn', 120, 4, {
            ignoreUrls: true,
            ignoreComments: false,
            ignoreRegExpLiterals: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true
        }],

        // Disallow mixed 'LF' and 'CRLF' as linebreaks - Disabled
        // https://eslint.org/docs/rules/linebreak-style
        'linebreak-style': 'off',

        // Disallow the use of alert, confirm, and prompt
        // https://eslint.org/docs/rules/no-alert
        'no-alert': 'error',

        // Disallow use of console
        // https://eslint.org/docs/rules/no-console
        'no-console': 'error',

        // Disallow adding to native types - Disabled
        // https://eslint.org/docs/rules/no-extend-native
        'no-extend-native': 'off',

        // Disallow use of unary operators, ++ and -- - Disabled
        // https://eslint.org/docs/rules/no-plusplus
        'no-plusplus': 'off',

        // Disallow use of Object.prototypes builtins directly - Disabled
        // https://eslint.org/docs/rules/no-prototype-builtins
        'no-prototype-builtins': 'off',

        // Disallow specific globals
        // https://eslint.org/docs/rules/no-restricted-globals
        'no-restricted-globals': 'off',

        // Disallow use of `javascript:` urls - Disabled
        // https://eslint.org/docs/rules/no-script-url
        'no-script-url': 'off',

        // Disallow dangling underscores in identifiers - disabled
        // https://eslint.org/docs/rules/no-underscore-dangle
        'no-underscore-dangle': 'off',

        // Disallow use of variables before they are defined - Disabled
        // https://eslint.org/docs/rules/no-use-before-define
        'no-use-before-define': 'off',

        // Disallow unnecessary string escaping - Disabled
        // https://eslint.org/docs/rules/no-useless-escape
        'no-useless-escape': 'off',

        // Require use of the second argument for parseInt()
        // https://eslint.org/docs/rules/radix
        radix: 'off',
    },
};
