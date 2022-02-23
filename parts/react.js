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
    'require-atomic-updates': 'off',        // 这个规则有 bug，在 async 方法里修改 react ref 会误报
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 'off',      // TypeScript 下有时 props 的类型是自动推导出来的，此 rule 不适配这种情况
    'react/display-name': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  }
}
