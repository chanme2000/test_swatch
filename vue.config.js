const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  alias : {
    '@' : FileReader(new URL('./src', import.meta.url))
  },
  publicPath: '/test_swatch/'
  
})
