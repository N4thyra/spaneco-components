const { defineConfig } = require('@vue/cli-service')
const CopyWebpackPlugin = require("copy-webpack-plugin")

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin({
        patterns: [{
          from: "./src/components",
          to: 'components'
        }]
      })
    ],
    module: {
      rules:[],
    },
  },
})
