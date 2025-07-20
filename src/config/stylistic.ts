import stylistic from '@stylistic/eslint-plugin';

export default [
  {
    name: 'flandre/stylistic/rules',
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      ...stylistic.configs.customize({
        indent: 2,
        jsx: true,
        quotes: 'single',
        semi: true,
      }).rules,
      '@stylistic/max-statements-per-line': ['error', { max: 2 }],
      '@stylistic/arrow-parens': ['error', 'always'],
    },
  },
];
