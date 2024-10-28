import jsonc from './config/jsonc';
import javascript from './config/javascript';
import stylistic from './config/stylistic';
import typescript from './config/typescript';
import sort from './config/sort';
import vue from './config/vue';

export const preset = [
  ...jsonc,
  ...javascript,
  ...stylistic,
  ...typescript,
  ...sort,
  ...vue,
];

export default {
  preset,

  jsonc,
  javascript,
  stylistic,
  typescript,
  sort,
  vue,
};
