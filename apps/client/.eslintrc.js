module.exports = {
  extends: ['custom/next'],
  ignorePatterns: ['src/api'],
  rules: {
    // Function component is not a function declaration
    'react/function-component-definition': 'off',
    // Missing return type on function.
    '@typescript-eslint/explicit-function-return-type': 'off',
    // Props should be sorted alphabetically
    'react/jsx-sort-props': 'off',
    'unicorn/filename-case': 'off',
    'no-irregular-whitespace': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    camelcase: 'off',
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: 'apps/client/tsconfig.json',
      },
    },
  },
}
