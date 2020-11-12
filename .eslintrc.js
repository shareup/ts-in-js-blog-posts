module.exports = {
  root: true,
  env: { browser: true },
  extends: ['standard'],
  rules: {
    'no-use-before-define': ['error', { functions: false, classes: true, variables: true }]
  }
}
