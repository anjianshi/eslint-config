const rules = {
  'import/default': 'off',      // TypeScript 会自行检查这一项
  'default-case': 'off',        // 交给 @typescript-eslint/switch-exhaustiveness-check 规则来检查 switch


  // Supported Rules
  '@typescript-eslint/array-type': 'error',
  '@typescript-eslint/ban-ts-comment': ['error', { 'ts-ignore': 'allow-with-description' }],
  '@typescript-eslint/ban-tslint-comment': 'off',
  '@typescript-eslint/class-literal-property-style': 'off',
  '@typescript-eslint/consistent-indexed-object-style': 'off',
  '@typescript-eslint/consistent-type-assertions': 'error',
  '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
  '@typescript-eslint/consistent-type-exports': ['error', { fixMixedExportsWithInlineTypeSpecifier: true }],
  '@typescript-eslint/consistent-type-imports': 'error',
  '@typescript-eslint/explicit-function-return-type': 'off',
  '@typescript-eslint/explicit-member-accessibility': ['error', { accessibility: 'no-public' }],
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
  '@typescript-eslint/no-dynamic-delete': 'error',
  '@typescript-eslint/no-explicit-any': ['error', { fixToUnknown: true, ignoreRestArgs: true }],
  '@typescript-eslint/no-extraneous-class': 'error',
  '@typescript-eslint/no-invalid-void-type': 'error',
  '@typescript-eslint/no-meaningless-void-operator': 'error',
  '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
  '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: false }],
  '@typescript-eslint/no-non-null-assertion': 'off',
  '@typescript-eslint/no-parameter-properties': 'off',
  '@typescript-eslint/no-require-imports': 'off',
  '@typescript-eslint/no-this-alias': 'off',
  '@typescript-eslint/no-type-alias': 'off',
  '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
  '@typescript-eslint/no-unnecessary-condition': ['error', { allowConstantLoopConditions: true, }],
  '@typescript-eslint/no-unnecessary-qualifier': 'error',
  '@typescript-eslint/no-unnecessary-type-arguments': 'error',
  '@typescript-eslint/no-unnecessary-type-constraint': 'error',
  '@typescript-eslint/no-unsafe-assignment': 'error',
  '@typescript-eslint/no-unsafe-member-access': 'error',
  '@typescript-eslint/no-var-requires': 'off',
  '@typescript-eslint/non-nullable-type-assertion-style': 'error',
  '@typescript-eslint/prefer-enum-initializers': 'error',
  '@typescript-eslint/prefer-for-of': 'error',
  '@typescript-eslint/prefer-function-type': 'error',
  '@typescript-eslint/prefer-includes': 'error',
  '@typescript-eslint/prefer-literal-enum-member': 'error',
  '@typescript-eslint/prefer-nullish-coalescing': 'error',
  '@typescript-eslint/prefer-optional-chain': 'error',
  '@typescript-eslint/prefer-readonly': 'error',
  '@typescript-eslint/prefer-readonly-parameter-types': 'off',
  '@typescript-eslint/prefer-reduce-type-parameter': 'error',
  '@typescript-eslint/prefer-regexp-exec': 'error',
  '@typescript-eslint/prefer-return-this-type': 'error',
  '@typescript-eslint/prefer-string-starts-ends-with': 'error',
  '@typescript-eslint/prefer-ts-expect-error': 'off',
  '@typescript-eslint/promise-function-async': 'error',
  '@typescript-eslint/require-array-sort-compare': ['error', { ignoreStringArrays: true }],
  '@typescript-eslint/sort-type-union-intersection-members': 'off',
  '@typescript-eslint/strict-boolean-expressions': 'error',
  '@typescript-eslint/switch-exhaustiveness-check': 'error',
  '@typescript-eslint/type-annotation-spacing': 'error',
  '@typescript-eslint/typedef': 'off',
  '@typescript-eslint/unified-signatures': 'error',


  // Extension Rules
  '@typescript-eslint/brace-style': ['error', '1tbs', { allowSingleLine: true }],
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
    SwitchCase: 1,
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
  '@typescript-eslint/no-dupe-class-members': 'error',
  '@typescript-eslint/no-duplicate-imports': 'error',
  '@typescript-eslint/no-empty-function': 'off',
  '@typescript-eslint/no-extra-parens': 'off',  // 为了代码容易懂，经常需要加额外的括号
  '@typescript-eslint/no-invalid-this': 'off',
  '@typescript-eslint/no-loop-func': 'error',
  '@typescript-eslint/no-loss-of-precision': 'error',
  '@typescript-eslint/no-magic-numbers': 'off',
  '@typescript-eslint/no-redeclare': 'error',
  '@typescript-eslint/no-restricted-imports': 'off',
  '@typescript-eslint/no-shadow': 'off',
  '@typescript-eslint/no-throw-literal': 'error',
  '@typescript-eslint/no-unused-expressions': 'error',
  '@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: 'React|[iI]gnored' }],
  '@typescript-eslint/no-use-before-define': ['error', {
    functions: false,
    classes: false,
    variables: true,
    enums: true,
    typedefs: true,
    ignoreTypeReferences: true,
  }],
  '@typescript-eslint/no-useless-constructor': 'error',
  '@typescript-eslint/object-curly-spacing': ['error', 'always'],
  '@typescript-eslint/padding-line-between-statements': 'off',
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
      extends: [
        // 此 config 涵盖了 @typescript-eslint/recommended, @typescript-eslint/recommended-requiring-type-checking 和所有非 recommended 的 rules。
        // 使用它是因为它同时禁用了被 typescript-eslint 禁用的 ESLint 原生规则，免去了自己禁用它们的麻烦。
        // 不过相对地需要手动指定所有非 recommended 规则的开启 / 关闭（因为原本就会这么做，所以没有任何影响）。
        'plugin:@typescript-eslint/all',
        'plugin:import/typescript',
      ],
      parserOptions: {
        project: './tsconfig.json',
      },
      rules: rules,
    }
  ]
}
