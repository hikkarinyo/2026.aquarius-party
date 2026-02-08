import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import tseslint from 'typescript-eslint'
import {defineConfig, globalIgnores} from 'eslint/config'

export default defineConfig([globalIgnores(['dist']),

  {
    files: ['**/*.{ts,tsx}'],

    extends: [js.configs.recommended, ...tseslint.configs.recommended, reactHooks.configs.flat.recommended,],

    plugins: {
      'simple-import-sort': simpleImportSort,
    },

    languageOptions: {
      ecmaVersion: 2020, globals: globals.browser,
    },

    rules: {
      semi: ['error', 'never'],
      quotes: ['error', 'single'],
      'object-curly-spacing': ['error', 'always'],

      'simple-import-sort/imports': ['error', {
        groups: [['^react'], ['^@?\\w'], ['^(@|components)(/.*|$)'], ['^\\u0000'], ['^(common|components|pages|models|store|routes|services|utils|enums|hooks)(/.*|$)', '^\\.\\.(?!/?$)', '^\\.\\./?$',], ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'], ['^(ui|styles|img)(/.*|$)', '^.+\\.?(svg)$', '^.+\\.?(css)$'],],
      },],

      'simple-import-sort/exports': 'error',

      'import/no-unresolved': 'off',

      'eol-last': ['error', 'always'],

      'comma-dangle': ['error', {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },],
    },
  },])
