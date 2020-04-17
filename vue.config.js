
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
    //   // 来将 svg 图标作为 Vue 组件导入
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader')

    // 删除moment除zh-cn中文包外的其它语言包，无需在代码中手动引入zh-cn语言包。
    config
      .plugin('ignore')
      .use(
        new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn$/)
      )
    // 添加别名
    config.resolve.alias.set('@', resolve('demo'))
      // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set('@ant-design/icons/lib/dist$', resolve('./icons.js'))
    //   if (env) {
    //     // 压缩图片
    //     config.module
    //       .rule('images')
    //       .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
    //       .use('image-webpack-loader')
    //       .loader('image-webpack-loader')
    //       .options({
    //         mozjpeg: { progressive: true, quality: 65 },
    //         optipng: { enabled: false },
    //         pngquant: { quality: [0.65, 0.90], speed: 4 },
    //         gifsicle: { interlaced: false }
    //       })
    //   }
    //   return config
    // },
    // configureWebpack: config => {
    //   // config.externals = {
    //   //   vue: 'Vue',
    //   //   vuex: 'Vuex',
    //   //   axios: 'axios',
    //   //   'secure-ls': 'secure-ls',
    //   //   'vuedraggable': 'vuedraggable',
    //   // }
    //   config.resolve.extensions = ['.vue', '.js', '.jsx', '.json', '.less', '.css', '.scss', '.jpg', '.png', '.svg']
  },
  css: {
    // 设置css: { extract: false },可以强制内联，就不会将css单独打包成一个文件，导致页面没有style
    extract: false,
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  // // LESS全局变量
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [resolve('./demo/less/theme.less')]
    }
  },
  // outputDir: process.env.VUE_OUTPUTDIR,
  // publicPath: process.env.VUE_APP_PUBLIC_PATH,
  productionSourceMap: false,
  runtimeCompiler: true,
  lintOnSave: false
}
