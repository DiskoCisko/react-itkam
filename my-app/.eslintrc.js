module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  // parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  // babelOptions: {
  //   plugins: [['@babel/plugin-proposal-decorators', { legacy: true }]],
  // },
  plugins: ['react'],
  rules: {
    'linebreak-style': 0,
    'eslint linebreak-style': [0, 'error', 'windows'],
    'react/jsx-filename-extension': [1, { allow: 'as-needed' }],
    'arrow-body-style': ['error', 'always'],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'no-shadow': ['error', { allow: ['getUser', 'saveProfile'] }],
    'operator-linebreak': [
      'error',
      'after',
      { overrides: { '?': 'before', ':': 'before' } },
    ],
    'react/forbid-prop-types': [
      1,
      {
        forbid: ['any'],
      },
    ],
    'object-curly-newline': ['error', { consistent: true }],
    'no-unneeded-ternary': ['error', { defaultAssignment: true }],
    'no-param-reassign': ['error', { props: false }],
    'default-param-last': ['error'],
    'react/destructuring-assignment': [
      1,
      'always',
      { ignoreClassFields: true },
    ],
    'import/no-cycle': [2, { ignoreExternal: true }],
    'react/no-unused-prop-types': [2, { ignore: ['handleSubmit'] }],
    'react/jsx-props-no-spreading': [
      2,
      {
        custom: 'ignore',
        exceptions: ['input', 'textarea'],
      },
    ],
    'react/jsx-one-expression-per-line': [1, { allow: 'none' }],
    'no-unused-expressions': ['error', { allowTernary: true }],
    'no-debugger': 'error',
  },
};
