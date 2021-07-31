module.exports = {
  extends: 'stylelint-config-recommended',
  rules: {
    'at-rule-no-unknown': [true, { ignoreAtRules: ['use', 'include', 'mixin'] }],
  },
  ignoreFiles: 'src/reset.scss',
};
