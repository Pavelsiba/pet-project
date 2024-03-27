module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'plugin:i18next/recommended',
    'plugin:storybook/recommended'
  ],
  globals: {
    __IS_DEV__: true,
    __API__: true,
    __PROJECT__: true
  },
  overrides: [
    {
      files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 'off',
        'max-len': 'off'
      }
    }
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: true
  },
  plugins: ['react', 'i18next', '@typescript-eslint', 'react-hooks'],
  rules: {
    'i18next/no-literal-string': [
      'error',
      {
        markupOnly: true,
        ignoreAllAttributes: true
      }
    ],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'warn',
    '@typescript-eslint/prefer-nullish-coalescing': 'warn',
    '@typescript-eslint/no-dynamic-delete': 'off',
    /* '@typescript-eslint/no-floating-promises': { ignoreVoid: true }, */
    '@typescript-eslint/no-misused-promises': [
      'warn',
      {
        checksConditionals: false
      }
    ],
    '@typescript-eslint/naming-convention': 'off', /* [
      'warn',
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE', 'PascalCase']
      }
    ] */
    'react/prop-types': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    indent: [2, 2, { SwitchCase: 1 }],
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
    'no-unused-vars': 'warn',
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': ['warn',
      {
        html: 'ignore',
        exceptions: ['Link']
      }],
    'react/function-component-definition': 'off',
    'no-shadow': 'off',
    'no-underscore-dangle': 'off',
    'react/display-name': 'off',
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'error', // Checks effect dependencies
    'no-undef': 'off'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
