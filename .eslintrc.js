module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['google', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
    'require-jsdoc': 'off',
    'new-cap': 'off',
    'react/display-name': 'off',
    'react/prop-types': 'off',
    // React 17
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};
