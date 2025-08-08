import { fileURLToPath } from 'node:url';
const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  alias : {
    '@' : fileURLToPath(new URL('./src', import.meta.url))
  },
  publicPath: '/test_swatch/'
  
})
