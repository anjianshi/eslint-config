const rules = {
  'comma-dangle': 'off',
  'comma-spacing': 'off',
  'default-param-last': 'off',
  'dot-notation': 'off',
  'func-call-spacing': 'off',
  'indent': 'off',
  'init-declarations': 'off',
  'keyword-spacing': 'off',
  'lines-between-class-members': 'off',
  'no-duplicate-imports': 'off',
  'no-empty-function': 'off',
  'no-extra-parens': 'off',
  'no-invalid-this': 'off',
  'no-loop-func': 'off',
  'no-loss-of-precision': 'off',
  'no-magic-numbers': 'off',
  'no-redeclare': 'off',
  'no-shadow': 'off',
  'no-throw-literal': 'off',
  'no-undefined': 'off',
  'no-unused-expressions': 'off',
  'no-use-before-define': 'off',
  'no-useless-constructor': 'off',
  'no-void': 'off',
  'quotes': 'off',
  'return-await': 'off',
  'semi': 'off',
  'space-before-function-paren': 'off',
  'space-infix-ops': 'off',


  'import/default': 'off',          // TypeScript 会自行检查这一项


  '@typescript-eslint/array-type': 'off',
  '@typescript-eslint/ban-ts-comment': 'off',
  '@typescript-eslint/ban-tslint-comment': 'off',
  '@typescript-eslint/class-literal-property-style': 'off',
  '@typescript-eslint/consistent-indexed-object-style': 'off',
  '@typescript-eslint/consistent-type-assertions': 'error',
  '@typescript-eslint/consistent-type-definitions': 'off',
  '@typescript-eslint/consistent-type-imports': 'error',
  '@typescript-eslint/explicit-function-return-type': 'off',
  '@typescript-eslint/explicit-member-accessibility': 'off',
  '@typescript-eslint/explicit-module-boundary-types': 'off',
  '@typescript-eslint/member-delimiter-style': ['error', {
    multiline: {
      delimiter: 'comma'
    },
    singleline: {
      delimiter: 'comma'
    }
  }],
  '@typescript-eslint/member-ordering': 'off',
  '@typescript-eslint/method-signature-style': 'off',
  '@typescript-eslint/naming-convention': 'off',
  '@typescript-eslint/no-base-to-string': 'off',
  '@typescript-eslint/no-confusing-non-null-assertion': 'error',
  '@typescript-eslint/no-confusing-void-expression': ['error', { ignoreArrowShorthand: true, ignoreVoidOperator: true }],
  '@typescript-eslint/no-dynamic-delete': 'off',
  '@typescript-eslint/no-explicit-any': 'off',
  '@typescript-eslint/no-extraneous-class': 'off',
  '@typescript-eslint/no-implicit-any-catch': 'off',
  '@typescript-eslint/no-invalid-void-type': 'off',
  '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: false }],
  '@typescript-eslint/no-non-null-assertion': 'off',
  '@typescript-eslint/no-parameter-properties': 'off',
  '@typescript-eslint/no-require-imports': 'off',
  '@typescript-eslint/no-this-alias': 'off',
  '@typescript-eslint/no-type-alias': 'off',
  '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
  '@typescript-eslint/no-unnecessary-condition': ['error', { allowConstantLoopConditions: true, }],
  '@typescript-eslint/no-unnecessary-qualifier': 'error',
  '@typescript-eslint/no-unnecessary-type-arguments': 'off',
  '@typescript-eslint/no-unnecessary-type-constraint': 'error',
  '@typescript-eslint/no-unsafe-assignment': 'off',
  '@typescript-eslint/no-unsafe-member-access': 'off',
  '@typescript-eslint/no-var-requires': 'off',
  '@typescript-eslint/non-nullable-type-assertion-style': 'error',
  '@typescript-eslint/prefer-enum-initializers': 'off',
  '@typescript-eslint/prefer-for-of': 'error',
  '@typescript-eslint/prefer-function-type': 'error',
  '@typescript-eslint/prefer-includes': 'error',
  '@typescript-eslint/prefer-literal-enum-member': 'error',
  '@typescript-eslint/prefer-nullish-coalescing': 'error',
  '@typescript-eslint/prefer-optional-chain': 'error',
  '@typescript-eslint/prefer-readonly': 'error',
  '@typescript-eslint/prefer-readonly-parameter-types': 'off',
  '@typescript-eslint/prefer-reduce-type-parameter': 'off',
  '@typescript-eslint/prefer-string-starts-ends-with': 'error',
  '@typescript-eslint/prefer-ts-expect-error': 'off',
  '@typescript-eslint/promise-function-async': 'error',
  '@typescript-eslint/require-array-sort-compare': ['error', { ignoreStringArrays: true }],
  '@typescript-eslint/strict-boolean-expressions': 'off',
  '@typescript-eslint/switch-exhaustiveness-check': 'error',
  '@typescript-eslint/type-annotation-spacing': 'error',
  '@typescript-eslint/typedef': 'off',
  '@typescript-eslint/unified-signatures': 'error',


  // Extension Rules
  '@typescript-eslint/comma-dangle': 'off',
  '@typescript-eslint/comma-spacing': 'error',
  '@typescript-eslint/default-param-last': 'error',
  '@typescript-eslint/dot-notation': 'off',
  '@typescript-eslint/func-call-spacing': 'error',
  // 解决 generic type 缩进判断不正确的问题
  // https://github.com/typescript-eslint/typescript-eslint/issues/1824
  // https://stackoverflow.com/a/59852368
  // 通过 (AST-Explorer)[https://astexplorer.net/] 可以分析出所需的 node 名称
  '@typescript-eslint/indent': ['error', 2, {
    ignoreComments: true,
    ignoredNodes: [
      // 'ArrowFunctionExpression[params]',
      // 'ArrowFunctionExpression[params] TSPropertySignature',
      // 'ArrowFunctionExpression Identifier',
      // 'ArrowFunctionExpression BlockStatement',

      // 'ArrowFunctionExpression > BlockStatement',
      // 'NoSubstitutionTemplateLiteral',
      // 'TemplateLiteral',
      // 'TSTypeAliasDeclaration *',

      'TSTypeParameterInstantiation[params]',
      'TSUnionType[types]',
    ],
  }],
  '@typescript-eslint/init-declarations': 'off',
  '@typescript-eslint/keyword-spacing': 'error',
  '@typescript-eslint/lines-between-class-members': 'off',
  '@typescript-eslint/no-duplicate-imports': 'error',
  '@typescript-eslint/no-empty-function': 'off',
  '@typescript-eslint/no-extra-parens': 'off',  // 为了代码容易懂，经常需要加额外的括号
  '@typescript-eslint/no-invalid-this': 'off',
  '@typescript-eslint/no-loop-func': 'error',
  '@typescript-eslint/no-loss-of-precision': 'error',
  '@typescript-eslint/no-magic-numbers': 'off',
  '@typescript-eslint/no-redeclare': 'error',
  '@typescript-eslint/no-shadow': 'error',
  '@typescript-eslint/no-throw-literal': 'error',
  '@typescript-eslint/no-unused-expressions': 'error',
  '@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: 'React|[iI]gnored' }],
  '@typescript-eslint/no-use-before-define': 'off',
  '@typescript-eslint/no-useless-constructor': 'error',
  '@typescript-eslint/quotes': ['error', 'single'],
  '@typescript-eslint/require-await': 'error',
  '@typescript-eslint/return-await': 'error',
  '@typescript-eslint/semi': ['error', 'never'],
  '@typescript-eslint/space-before-function-paren': ['error', {
    anonymous: 'never',
    named: 'never',
    asyncArrow: 'always',
  }],
  '@typescript-eslint/space-infix-ops': 'off',
}


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
        'plugin:@typescript-eslint/recommended',
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        'plugin:import/typescript',
      ],
      rules: rules,
    }
  ]
}
