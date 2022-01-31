// rollup.config.js
import { createBasicConfig } from '@open-wc/building-rollup';

const baseConfig = createBasicConfig();

export default {
    input: 'build/compiled/index.js',
    output: {
      file: 'lockstep-api.js',
      format: 'cjs'
    }
  };