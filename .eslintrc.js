module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
  ],
  plugins: ['react-hooks', 'prettier'],
  rules: {
    strict: 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-unused-vars': 'error',
    'react/prop-types': 0,
    'react/display-name': 0,
    'import/prefer-default-export': 0,
    'react/jsx-filename-extension': 0,
  },
  settings: {
    'import/resolver': {
      alias: [
        ['components', './src/components'],
        ['images', './src/images'],
        ['layouts', './src/layouts'],
        ['pages', './src/pages'],
      ],
    },
  },
}
