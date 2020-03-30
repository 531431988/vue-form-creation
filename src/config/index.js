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
  primaryColor: '#52C41A',
  cookieExpires: 1,
  api: process.env.VUE_APP_BASE_API,
  storageOptions: {
    namespace: 'ovit__', // key prefix
    name: 'ls', // name variable Vue.[ls] or this.[$ls],
    storage: 'local' // storage name session, local, memory
  }
}

// 表单元素通用属性
const common = {
  disabled: false,
  size: [{
    label: '大',
    value: 'large'
  }, {
    label: '正常',
    value: 'default'
  }, {
    label: '小',
    value: 'small'
  }]
}
// 基础组件
const antvComponents = [{
  name: '单行文本',
  type: 'input',
  icon: 'edit',
  options: {
    placeholder: '',
    addonAfter: null,
    addonBefore: null,
    defaultValue: null,
    value: null,
    maxLength: null,
    prefix: null,
    suffix: null,
    allowClear: null
  }
}, {
  name: '多行文本',
  type: 'textarea',
  icon: 'code',
  options: {
    placeholder: '',
    addonAfter: null,
    addonBefore: null,
    defaultValue: null,
    value: null,
    maxLength: null,
    prefix: null,
    suffix: null,
    autosize: false,
    allowClear: null
  }
}]
antvComponents.map(item => {
  item.options = Object.assign(item.options, common)
})
// 自定义组件
const customComponents = []

// 布局组件
const layoutComponents = []

export {
  antvComponents,
  customComponents,
  layoutComponents
}
