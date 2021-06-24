import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript';

import pkg from './package.json';

export default {
  input: './packages/index.ts',
  output: {
    file: pkg.browser,
    format: 'umd'
  },
  plugins: [
    resolve(),
    commonjs(),
    typescript()
  ]
}
