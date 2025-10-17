import tsParser from '@typescript-eslint/parser'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import reactHooks from 'eslint-plugin-react-hooks'
import vuePlugin from 'eslint-plugin-vue'
import cypressPlugin from 'eslint-plugin-cypress'
import importPlugin from 'eslint-plugin-import'

export default [
  {
    files: ['./**/*.ts', './**/*.tsx', './**/*.js', './**/*.jsx'],
    plugins: {
      'react-hooks': reactHooks,
    },
    rules: reactHooks.configs.recommended.rules,
  },
  {
    files: ['./**/*.ts', './**/*.tsx', './**/*.js', './**/*.jsx', './**/*.vue'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        sourceType: 'module',
      },
      globals: {
        document: false,
        window: false,
        'cypress/globals': true,
      },
      ecmaVersion: 'latest',
    },
    plugins: {
      cypress: cypressPlugin,
      '@typescript-eslint': tsParser,
      'simple-import-sort': simpleImportSort,
      vue: vuePlugin,
      import: importPlugin,
    },
    rules: {
      curly: ['error', 'all'],
      'no-continue': 'off',
      'no-alert': 'off',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      semi: ['error', 'never'],
      'import/order': 'off',
      'import/extensions': ['error', 'ignorePackages'],
      'no-restricted-imports': [
        'error',
        {
          paths: [
            {
              name: '..',
              message: 'Import from ../index.js instead.',
            },
            {
              name: '.',
              message: 'Import from ./index.js instead.',
            },
          ],
        },
      ],
      'import/no-extraneous-dependencies': 'off',
      'import/no-unresolved': 'off',
      'import/no-dynamic-require': 'off',
      'arrow-parens': ['error', 'as-needed'],
      'padded-blocks': 'off',
      'class-methods-use-this': 'off',
      'global-require': 'off',
      'func-names': ['error', 'never'],
      'arrow-body-style': 'off',
      'max-len': 'off',
      'no-return-assign': 'off',
      'vue/one-component-per-file': 'off',
      'vue/this-in-template': ['error', 'never'],
      'vue/multi-word-component-names': 'off',
      'vue/singleline-html-element-content-newline': 'off',
      'no-param-reassign': 'off',
      'import/prefer-default-export': 'off',
      'consistent-return': 'off',
      'prefer-destructuring': 'off',
      'no-redeclare': 'off',
      'no-unused-vars': 'off',
      'no-use-before-define': 'off',
      'no-dupe-class-members': 'off',
      'lines-between-class-members': 'off',
      'no-shadow': 'off',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
    },
  },
  {
    ignores: ['**/node_modules/**', '**/dist/**', '**/*.d.ts'],
  },
]
