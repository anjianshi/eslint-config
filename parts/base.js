module.exports = {
  root: true,
  plugins: [
    // 此插件若要识别 Webpack alias，需引入并配置 eslint-import-resolver-webpack
    'import',
  ],
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
  ],
  rules: {
    // Possible Problems
    'array-callback-return': 'error',
    'no-await-in-loop': 'warn',
    'no-constructor-return': 'error',
    'no-duplicate-imports': 'error',
    'no-promise-executor-return': 'error',
    'no-self-compare': 'error',
    'no-template-curly-in-string': 'error',
    'no-unmodified-loop-condition': 'off',
    'no-unreachable-loop': 'error',
    'no-unused-private-class-members': 'error',
    'no-unused-vars': ['error', { varsIgnorePattern: 'React' }],
    'no-use-before-define': ['error', 'nofunc'],
    'require-atomic-updates': 'error',

    // Suggestions
    'accessor-pairs': 'error',
    'arrow-body-style': 'off',
    'block-scoped-var': 'error',
    'camelcase': 'off',
    'capitalized-comments': 'off',
    'class-methods-use-this': 'off',
    'complexity': 'off',
    'consistent-return': 'off',
    'consistent-this': 'off',
    'curly': ['error','multi-line'],
    'default-case': 'error',
    'default-case-last': 'error',
    'default-param-last': 'error',
    'dot-notation': 'off',
    'eqeqeq': 'error',
    'func-name-matching': 'off',
    'func-names': 'off',
    'func-style': 'off',
    'grouped-accessor-pairs': 'error',
    'guard-for-in': 'error',
    'id-denylist': 'off',
    'id-length': 'off',
    'id-match': 'off',
    'init-declarations': 'off',
    'max-classes-per-file': 'off',
    'max-depth': 'off',
    'max-lines': 'off',
    'max-lines-per-function': 'off',
    'max-nested-callbacks': 'off',
    'max-params': 'off',
    'max-statements': 'off',
    'multiline-comment-style': 'off',
    'new-cap': 'off',
    'no-alert': 'warn',
    'no-array-constructor': 'off',
    'no-bitwise': 'off',
    'no-caller': 'error',
    'no-confusing-arrow': 'error',
    'no-console': 'off',
    'no-continue': 'off',
    'no-div-regex': 'off',
    'no-else-return': 'off',
    'no-empty-function': 'off',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-floating-decimal': 'error',
    'no-implicit-coercion': 'off',
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-inline-comments': 'off',
    'no-invalid-this': 'off',
    'no-iterator': 'off',
    'no-label-var': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-lonely-if': 'off',
    'no-loop-func': 'error',
    'no-magic-numbers': 'off',
    'no-mixed-operators': 'error',
    'no-multi-assign': 'error',
    'no-multi-str': 'error',
    'no-negated-condition': 'off',
    'no-nested-ternary': 'off',
    'no-new': 'off',
    'no-new-func': 'error',
    'no-new-object': 'off',
    'no-new-wrappers': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'no-proto': 'error',
    'no-restricted-exports': 'off',
    'no-restricted-globals': 'off',
    'no-restricted-imports': 'error',
    'no-restricted-properties': 'off',
    'no-restricted-syntax': 'off',
    'no-return-assign': 'error',
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-sequences': 'error',
    'no-shadow': 'off',
    'no-ternary': 'off',
    'no-throw-literal': 'error',
    'no-undef-init': 'error',
    'no-undefined': 'error',
    'no-underscore-dangle': 'off',
    'no-unneeded-ternary': 'error',
    'no-unused-expressions': 'error',
    'no-useless-call': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'no-void': ['error', { allowAsStatement: true }],
    'no-warning-comments': 'off',
    'object-shorthand': 'error',
    'one-var': 'off',
    'one-var-declaration-per-line': 'off',
    'operator-assignment': 'off',
    'prefer-arrow-callback': 'off',
    'prefer-const': 'error',
    'prefer-destructuring': 'off',
    'prefer-exponentiation-operator': 'off',
    'prefer-named-capture-group': 'off',
    'prefer-numeric-literals': 'error',
    'prefer-object-has-own': 'error',
    'prefer-object-spread': 'error',
    'prefer-promise-reject-errors': 'error',
    'prefer-regex-literals': 'off',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'off',   // 自行选择要不要用 template string
    'quote-props': ['error', 'as-needed'],
    'radix': 'error',
    'require-await': 'off',
    'require-unicode-regexp': 'off',
    'sort-imports': 'off',
    'sort-keys': 'off',
    'sort-vars': 'off',
    'spaced-comment': ['error', 'always'],
    'strict': 'off',
    'symbol-description': 'error',
    'vars-on-top': 'off',
    'yoda': 'error',

    // Layout & Formatting
    'array-bracket-newline': 'off',
    'array-bracket-spacing': 'error',
    'array-element-newline': 'off',
    'arrow-parens': ['error','as-needed'],
    'arrow-spacing': 'error',
    'block-spacing': 'off',
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'comma-dangle': 'off',
    'comma-spacing': 'error',
    'comma-style': 'error',
    'computed-property-spacing': 'error',
    'dot-location': ['error', 'property'],
    'eol-last': 'error',
    'func-call-spacing': 'error',
    'function-call-argument-newline': ['error', 'consistent'],
    'function-paren-newline': 'off',
    'generator-star-spacing': 'error',
    'implicit-arrow-linebreak': 'error',
    'indent': ['error', 2, { ignoreComments: true, SwitchCase: 1 }],
    'jsx-quotes': 'error',
    'key-spacing': 'error',
    'keyword-spacing': 'error',
    'line-comment-position': 'off',
    'linebreak-style': 'off',
    'lines-around-comment': 'off',
    'lines-between-class-members': 'off',
    'max-len': 'off',
    'max-statements-per-line': 'off',
    'multiline-ternary': 'off',
    'new-parens': ['error', 'always'],
    'newline-per-chained-call': 'off',
    'no-extra-parens': 'off', // 和 TypeScript 的 (value as SomeType).a.b.c 语法有冲突。且为了代码容易懂，经常需要加额外的括号
    'no-multi-spaces': ['error', { ignoreEOLComments: true }],
    'no-multiple-empty-lines': 'off',
    'no-tabs': 'error',
    'no-trailing-spaces': 'error',
    'no-whitespace-before-property': 'error',
    'nonblock-statement-body-position': 'error',
    'object-curly-newline': 'error',
    'object-curly-spacing': ['error', 'always'],
    'object-property-newline': 'off',
    'operator-linebreak': 'off',
    'padded-blocks': 'off',
    'padding-line-between-statements': 'off',
    'quotes': ['error', 'single', { avoidEscape: true }],
    'rest-spread-spacing': 'error',
    'semi': ['error', 'never'],
    'semi-spacing': 'off',
    'semi-style': 'off',
    'space-before-blocks': 'off',
    'space-before-function-paren': ['error', { anonymous: 'never', named: 'never', asyncArrow: 'always' }],
    'space-in-parens': 'error',
    'space-infix-ops': 'off',
    'space-unary-ops': 'off',
    'switch-colon-spacing': 'error',
    'template-curly-spacing': 'off',
    'template-tag-spacing': 'error',
    'unicode-bom': ['error', 'never'],
    'wrap-iife': 'error',
    'wrap-regex': 'off',
    'yield-star-spacing': 'error',
  },
}
