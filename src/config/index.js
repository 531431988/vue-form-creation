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
    namespace: 'ovit__', // key prefix
    name: 'ls', // name variable Vue.[ls] or this.[$ls],
    storage: 'local' // storage name session, local, memory
  }
}

// 表格配置
const formConfig = {
  size: 'small',
  formLayout: 'horizontal',
  width: 100,
  align: 'right',
  labelCol: 3,
  wrapperCol: 21,
  btns: [{
    icon: 'check',
    text: '提交',
    type: 'primary',
    htmlType: 'submit'
  }, {
    icon: 'sync',
    text: '重置',
    type: 'link'
    // }, {
    //   text: '查询',
    //   type: 'primary'
  }]
}
// 图标配置
const iconConfig = [{
  label: '刷新',
  value: 'sync'
}, {
  label: '新增',
  value: 'plus'
}, {
  label: '减少',
  value: 'minus'
}, {
  label: '删除',
  value: 'delete'
}, {
  label: '正确',
  value: 'check'
}, {
  label: '错误',
  value: 'close'
}, {
  label: '帮助',
  value: 'question-circle'
}, {
  label: '编辑',
  value: 'edit'
}, {
  label: '用户',
  value: 'user'
}, {
  label: '上传',
  value: 'upload'
}, {
  label: '搜索',
  value: 'search'
}, {
  label: '锁',
  value: 'lock'
}, {
  label: '图片',
  value: 'picture'
}, {
  label: '文件',
  value: 'file'
}, {
  label: '文件夹',
  value: 'folder'
}]
// 按钮主题配置

// 内置可选按钮样式
const btnTheme = [{
  label: '主色',
  value: 'primary'
}, {
  label: '默认',
  value: 'default'
}, {
  label: '虚线',
  value: 'dashed'
}, {
  label: '危险',
  value: 'danger'
}, {
  label: '链接',
  value: 'link'
}]

// 表单组件通用属性
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
  formConfig,
  iconConfig,
  btnTheme,
  antvComponents,
  customComponents,
  layoutComponents
}
