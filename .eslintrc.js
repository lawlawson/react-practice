module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'react/prop-types': 0,
    'react/display-name': 0,
    'react/react-in-jsx-scope': 0,
    'jsx-quotes': ['error', 'prefer-single'],
  },
  settings: {
    react: {
      version: 'latest',
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',

    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
  ],
}
