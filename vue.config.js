
const path = require('path')
const webpack = require('webpack')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i
const env = process.env.NODE_ENV === 'production'
const resolve = dir => path.join(__dirname, dir)
module.exports = {
  chainWebpack: config => {
    // 来将 svg 图标作为 Vue 组件导入
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
    config.resolve.alias
      // 内部为正则表达式  vue结尾的
      .set('vue$', 'vue/dist/vue.esm.js')
      .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set('@ant-design/icons/lib/dist$', resolve('./icons.js'))
    if (env) {
      // 压缩图片
      config.module
        .rule('images')
        .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
        .use('image-webpack-loader')
        .loader('image-webpack-loader')
        .options({
          mozjpeg: { progressive: true, quality: 65 },
          optipng: { enabled: false },
          pngquant: { quality: [0.65, 0.90], speed: 4 },
          gifsicle: { interlaced: false }
        })
    }
    // 配置 externals 引入 cdn 资源
    const cdn = {
      js: [
        // 访问https://unpkg.com/vue/dist/vue.min.js获取最新版本
        '//cdn.bootcss.com/vue/2.6.11/vue.min.js',
        '//cdn.bootcss.com/vuex/3.1.3/vuex.min.js',
        '//cdn.bootcss.com/axios/0.19.2/axios.min.js'
      ]
    }
    config.plugin('html').tap(args => {
      // html中添加cdn
      args[0].cdn = cdn
      return args
    })
    return config
  },
  configureWebpack: config => {
    config.externals = {
      vue: 'Vue',
      vuex: 'Vuex',
      axios: 'axios'
    }
    config.resolve.extensions = ['.vue', '.js', '.jsx', '.json', '.less', '.css', '.scss', '.jpg', '.png', '.svg']
    if (env) {
      const plugins = []
      // 开启 gzip 压缩
      plugins.push(
        new CompressionWebpackPlugin({
          filename: '[path].gz[query]',
          algorithm: 'gzip',
          test: productionGzipExtensions,
          threshold: 10240,
          minRatio: 0.8
        })
      )
      config.plugins = [...config.plugins, ...plugins]

      // 利用splitChunks单独打包第三方模块
      config.optimization = {
        splitChunks: {
          cacheGroups: {
            common: {
              name: 'chunk-common',
              chunks: 'initial',
              minChunks: 2,
              maxInitialRequests: 5,
              minSize: 0,
              priority: 1,
              reuseExistingChunk: true,
              enforce: true
            },
            vendors: {
              name: 'chunk-vendors',
              test: /[\\/]node_modules[\\/]/,
              chunks: 'initial',
              priority: 2,
              reuseExistingChunk: true,
              enforce: true
            },
            antvUI: {
              name: 'chunk-antv',
              test: /[\\/]node_modules[\\/]ant-design-vue[\\/]/,
              chunks: 'all',
              priority: 3,
              reuseExistingChunk: true,
              enforce: true
            }
          }
        }
      }
    }
  },
  css: {
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
      patterns: [resolve('./src/less/theme.less')]
    }
  },
  outputDir: process.env.VUE_OUTPUTDIR,
  publicPath: process.env.VUE_APP_PUBLIC_PATH,
  productionSourceMap: false,
  runtimeCompiler: true,
  lintOnSave: false
}
