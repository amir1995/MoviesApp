module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2021: true,
    'react-native/react-native': true,
    'jest/globals': true,
  },
  extends: [
    '@react-native-community',
    'plugin:react/recommended',
    'prettier',
    'eslint:recommended',
    'plugin:jest/recommended',
  ],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-native', 'unused-imports', 'simple-import-sort', 'import'],
  ignorePatterns: ['!.*', 'dist', 'node_modules'],
  rules: {
    'simple-import-sort/imports': 'error',
    'import/newline-after-import': ['error', {count: 1}],
    'no-multiple-empty-lines': ['error', {max: 1, maxEOF: 0}],
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'no-console': 0,
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'react/no-unescaped-entities': 'off',
    'linebreak-style': ['error', 'unix'],
    semi: ['error', 'always'],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
