export default {
  extends: ['stylelint-config-standard'],
  plugins: ['stylelint-less'],
  customSyntax: 'postcss-less',
  rules: {
    'no-descending-specificity': null,
    'no-empty-source': null,
    'no-irregular-whitespace': null,
    'function-url-quotes': 'always',
    'selector-attribute-quotes': 'always',
    'selector-class-pattern': null,
    'font-family-no-missing-generic-family-keyword': null,
    // 'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }],
    'selector-type-no-unknown': null,
    'value-keyword-case': ['lower', { ignoreProperties: ['composes'] }],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global']
      }
    ],
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen', 'global']
      }
    ]
  },
  overrides: [
    {
      files: ['*.scss', '**/*.scss'],
      customSyntax: 'postcss-scss'
    },
    {
      files: ['*.less', '**/*.less'],
      customSyntax: 'postcss-less'
    }
  ],
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts', '**/*.vue']
};
