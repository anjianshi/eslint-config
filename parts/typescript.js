module.exports = {
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
      },
      plugins: [
        '@typescript-eslint',
      ],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
      ],
      rules: {
        '@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: 'React' }],
        '@typescript-eslint/array-type': 'off',
        '@typescript-eslint/consistent-type-assertions': 'error',
        '@typescript-eslint/no-implied-eval': 'error',
        '@typescript-eslint/no-throw-literal': 'error',
        '@typescript-eslint/prefer-for-of': 'error',
        '@typescript-eslint/prefer-optional-chain': 'error',
        '@typescript-eslint/default-param-last': 'error',
        '@typescript-eslint/func-call-spacing': 'error',
        '@typescript-eslint/indent': ['error', 2],
        '@typescript-eslint/member-delimiter-style': ['error', {
          multiline: {
            delimiter: 'comma'
          },
          singleline: {
            delimiter: 'comma'
          }
        }],
        '@typescript-eslint/no-extra-parens': ['error', 'all', {
          nestedBinaryExpressions: false,
          ignoreJSX: 'multi-line',
          enforceForArrowConditionals: false,
        }],
        '@typescript-eslint/no-useless-constructor': 'error',
        '@typescript-eslint/quotes': ['error', 'single'],
        '@typescript-eslint/return-await': 'error',
        '@typescript-eslint/semi': ['error', 'never'],
        '@typescript-eslint/space-before-function-paren': ['error', 'never'],
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
      }
    },
  ]
}
