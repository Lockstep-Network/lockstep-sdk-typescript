// rollup.config.js
import { createBasicConfig } from '@open-wc/building-rollup';
import typescript from '@rollup/plugin-typescript';
import dts from "rollup-plugin-dts";

const baseConfig = createBasicConfig();

const config = [
  {
    input: 'build/compiled/index.js',
    output: {
      file: 'lockstep-api.js',
      format: 'cjs',
      sourcemap: true,
    },
    external: ['axios', 'os', 'url'],
    plugins: [typescript()]
  }, {
    input: 'build/compiled/index.d.ts',
    output: {
      file: 'lockstep-api.d.ts',
      format: 'es'
    },
    plugins: [dts()]
  }
];

export default config;