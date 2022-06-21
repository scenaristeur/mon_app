const publicPath = process.env.NODE_ENV === 'production' ? '/mon_app/' : '/' // <-- add this line



const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
	publicPath: publicPath,
  transpileDependencies: true
})
