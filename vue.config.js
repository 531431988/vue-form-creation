
const path = require('path')
const webpack = require('webpack')
const env = process.env.NODE_ENV === 'production'
const resolve = dir => path.join(__dirname, dir)
module.exports = {
  pages: {
    index: {
      entry: 'demo/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  chainWebpack: config => {
    // 添加别名
    config.resolve.alias.set('@', resolve('demo'))
      .set('@ant-design/icons/lib/dist$', resolve('./icons.js'))
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.externals = {
        // vue: 'Vue',
        // vuex: 'Vuex',
        // axios: 'axios',
        // 'secure-ls': 'SecureLS',
        // 'vuedraggable': 'draggable'
        'tinycolor2': 'tinycolor2'
      }
    }
  },
  css: {
    // 设置css: { extract: false },可以强制内联，就不会将css单独打包成一个文件，导致页面没有style
    // extract: false,
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  // LESS全局变量
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [resolve('./demo/less/theme.less')]
    }
  },
  publicPath: process.env.VUE_APP_PUBLIC_PATH,
  productionSourceMap: false,
  runtimeCompiler: true,
  lintOnSave: false
}
