module.exports = {
    env: {
        es6: true,
    },

    plugins: [
        'import',
    ],

    rules: {
        // Ensure consistent use of file extension within the import path
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
        'import/extensions': 'off',

        // Forbid import of modules using absolute paths - Disabled
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-absolute-path.md
        'import/no-absolute-path': 'off',

        // Forbid the use of extraneous packages - Disabled
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
        // paths are treated both as absolute paths, and relative to process.cwd()
        'import/no-extraneous-dependencies': 'off',

        // Ensure imports point to files/modules that can be resolved - Disabled
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
        'import/no-unresolved': 'off',
    },
};
