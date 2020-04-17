/**
 * 项目默认配置项
 * title       项目标题
 * primaryColor - 默认主题色
 * cookieExpires - cookie保存的天数
 * api - 接口地址
 * publicPath - 发布目录
 * storageOptions: {} - Vue-ls 插件配置项 (localStorage/sessionStorage)
 *
 */
export default {
  title: '',
  color: {
    primary: '#1890ff',
    success: '#52c41a',
    error: '#f5222d',
    warning: '#faad14'
  },
  cookieExpires: 1,
  api: process.env.VUE_APP_BASE_API,
  storageOptions: {
    encodingType: 'aes',
    encryptionSecret: '_ovit_',
    namespace: 'ovit__'
  }
}
