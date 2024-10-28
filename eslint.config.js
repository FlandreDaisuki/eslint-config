// @ts-check
import flandre from './dist/index.js';

/** @satisfies {import('eslint').Linter.Config[]} */
export default [
  ...flandre.preset,
  {
    files: ['src/**/*.js', '**/*.config.js'],
  },
  {
    ignores: ['dist/*'],
  },
];
