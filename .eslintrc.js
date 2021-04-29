const rules = {
  'react/prop-types': [0],
  'react/jsx-filename-extension': [0],
  'react/jsx-props-no-spreading': [0],
  'react/react-in-jsx-scope': [0],
  'import/prefer-default-export': [0],
};

module.exports = {
  extends: 'airbnb',
  env: {
    browser: true,
    es6: true,
  },
  rules,
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: 'airbnb-typescript',
      parserOptions: {
        project: './tsconfig.json',
      },
      rules,
    },
  ],
};
