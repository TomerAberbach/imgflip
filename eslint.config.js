module.exports = {
  extends: [`eslint:recommended`, `prettier`, `plugin:prettier/recommended`],
  plugins: [`prettier`],
  env: {
    es6: true,
    node: true
  },
  parserOptions: {
    sourceType: `module`,
    ecmaFeatures: {
      modules: true,
      impliedStrict: true
    }
  },
  parser: `babel-eslint`,
  rules: {
    quotes: [`error`, `backtick`]
  }
}
