module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'svelte3',
    '@typescript-eslint',
  ],
  settings: {
    // https://github.com/sveltejs/eslint-plugin-svelte3
    'svelte3/typescript': true, // load TypeScript as peer dependency
    // https://www.npmjs.com/package/eslint-import-resolver-webpack
    'import/resolver': 'webpack',
  },
  overrides: [
    {
      files: ['**/*.svelte'],
      processor: 'svelte3/svelte3',
    },
  ],
  rules: {
    'import/prefer-default-export': 0,
    'import/no-mutable-exports': 0,
  },
};