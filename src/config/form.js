import { createUID, addCollapseFormChild } from '@/libs/utils'
// 通用表单属性
const commonFormConfig = {
  size: 'default',
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
    text: '取消',
    type: 'link'
  }]
}
// 基础表单配置
const baseFormConfig = JSON.parse(JSON.stringify(commonFormConfig))
// 嵌套表单配置
const collapseFormConfig = Object.assign(JSON.parse(JSON.stringify(commonFormConfig)), addCollapseFormChild(createUID('collapse')))

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

// 组件通用属性
const commonComponentAttr = {
  readonly: false,
  disabled: false
}
// 基础组件
const antvComponents = [{
  name: '单行文本',
  type: 'input',
  icon: 'edit',
  options: {
    name: createUID('input'),
    label: '单行文本',
    placeholder: '请输入关键字',
    value: '',
    maxLength: null,
    prefix: null,
    suffix: null,
    addonBefore: null,
    addonAfter: null,
    width: {
      label: '200',
      value: 'px'
    },
    allowClear: null,
    required: false,
    valid: {
      label: '',
      value: '',
      pattern: '',
      message: ''
    },
    tooltip: null
  }
  // }, {
  //   name: '多行文本',
  //   type: 'textarea',
  //   icon: 'code',
  //   options: {
  //     placeholder: '',
  //     addonAfter: null,
  //     addonBefore: null,
  //     defaultValue: null,
  //     value: null,
  //     maxLength: null,
  //     prefix: null,
  //     suffix: null,
  //     autosize: false,
  //     allowClear: null
  //   }
}]
antvComponents.map(item => {
  item.options = Object.assign(item.options, commonComponentAttr)
})
// 自定义组件
const customComponents = []

// 布局组件
const layoutComponents = []

export {
  iconConfig,
  btnTheme,
  baseFormConfig,
  collapseFormConfig,
  antvComponents,
  customComponents,
  layoutComponents
}
