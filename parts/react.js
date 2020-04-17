module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  plugins: [
    'react-hooks',
  ],
  extends: [
    'plugin:react/recommended',
  ],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  settings: {
    react: {
      version: 'detect',
    },
  }
}
