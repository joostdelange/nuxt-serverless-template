module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
  ],
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    semi: ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    quotes: [2, 'single', { avoidEscape: true }],
    'space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always',
    }],
    'no-console': ['error', { allow: ['log'] }],
  },
};
