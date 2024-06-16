module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base', 'prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'no-console': 'off',
    'no-promise-executor-return': 'off',
    'no-await-in-loop': 'off',
    'consistent-return': 'off',
  },
};
