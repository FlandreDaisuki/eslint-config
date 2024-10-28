import stylistic from '@stylistic/eslint-plugin';

export default [
  {
    name: 'flandre/stylistic/rules',
    ...stylistic.configs.customize({
      flat: true,
      indent: 2,
      jsx: true,
      quotes: 'single',
      semi: true,
    }),
    rules: {
      '@stylistic/max-statements-per-line': ['error', { max: 2 }],
      '@stylistic/arrow-parens': ['error', 'always'],
    },
  },
];
