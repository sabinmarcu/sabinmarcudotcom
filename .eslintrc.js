const rules = {
  'react/prop-types': [0],
  'react/jsx-filename-extension': [0],
  'react/jsx-props-no-spreading': [0],
  'react/react-in-jsx-scope': [0],
  'import/prefer-default-export': [0],
  'react/require-default-props': [0],
  'react/no-unused-prop-types': [0],
  semi: [2, 'always'],
  'no-bitwise': [0],
};

module.exports = {
  extends: 'airbnb',
  env: {
    browser: true,
    es6: true,
  },
  rules,
  plugins: [
    'formatjs',
  ],
  overrides: [
    {
      files: ['src/config/schema.d.ts'],
      rules: {},
    },
    {
      files: ['*.ts', '*.tsx'],
      extends: 'airbnb-typescript',
      parserOptions: {
        project: './tsconfig.json',
      },
      rules,
    },
    {
      files: ['./*.js'],
      rules: {
        'import/extensions': [0],
        'import/no-unresolved': [0],
        'import/no-extraneous-dependencies': [0],
        'global-require': [0],
        'import/no-dynamic-require': [0],
      },
    },
  ],
};
