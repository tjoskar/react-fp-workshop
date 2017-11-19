import cjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'vendors.js',
  output: {
    file: 'vendors.bundle.js',
    format: 'es'
  },
  plugins: [
    cjs({
      exclude: 'node_modules/process-es6/**',
      include: ['node_modules/**']
    }),
    replace({ 'process.env.NODE_ENV': JSON.stringify('development') }),
    resolve({
      browser: false,
      main: true,
      module: false,
      jsnext: false,
      preferBuiltins: false
    })
  ],
  sourcemap: false
};
