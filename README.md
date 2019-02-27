# @spendology/eslint-config
[![npm version](https://img.shields.io/npm/v/@spendology/eslint-config.svg)](https://www.npmjs.com/package/@spendology/eslint-config)

This package provides Spendology's .eslintrc as an extensible shared config.

## Usage

We export one ESLint configuration for your usage.

Our default export contains all of our ESLint rules, including ECMAScript 6+, React and React Redux. It requires `eslint`, `eslint-config-airbnb`, `eslint-plugin-react` and `eslint-plugin-react-redux`.

If using **npm 5+**, use this shortcut

```sh
npx install-peerdeps --dev @spendology/eslint-config
```
  
**Or** install the correct versions of each package, which are listed by the command:

```sh
npm info "@spendology/eslint-config@latest" peerDependencies
```

If using **yarn**, you can also use the shortcut described above if you have npm 5+ installed on your machine, as the command will detect that you are using yarn and will act accordingly.
Otherwise, run `npm info "@spendology/eslint-config@latest" peerDependencies` to list the peer dependencies and versions, then run `yarn add --dev <dependency>@<version>` for each listed peer dependency.
