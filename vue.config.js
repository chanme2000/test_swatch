const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  alias : {
    '@' : (new URL('./src', import.meta.url))
  },
  publicPath: '/test_swatch/'
  
})
