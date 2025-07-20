// @ts-check
import flandre from './dist/index.js';

/** @satisfies {import('eslint').Linter.Config[]} */
export default [
  ...flandre.preset,
  {
    files: ['src/**/*.ts', '**/*.config.js'],
  },
  {
    ignores: ['dist/*'],
  },
];
