/* eslint-disable */

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint'
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    '@typescript-eslint/camelcase': ['off', { properties: 'never' }],
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/quotes': ['error', 'single', { avoidEscape: true }],
    camelcase: 'off',
    'comma-dangle': 2,
    'no-extra-semi': 2,
    'no-irregular-whitespace': 2,
    'no-lonely-if': 2,
    'no-multi-spaces': 2,
    'no-multiple-empty-lines': 1,
    'no-trailing-spaces': 2,
    'no-unexpected-multiline': 2,
    'no-unreachable': 'error',
    'object-curly-spacing': ['error', 'always'],
    curly: 'error',
    semi: ['error', 'never']
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
