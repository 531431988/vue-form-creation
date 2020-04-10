
import { createUID } from '@/libs/utils'
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
}, {
  name: '多行文本',
  type: 'textarea',
  icon: 'code',
  options: null
}]
antvComponents.map(item => {
  if (item.options) {
    item.options = Object.assign(item.options, commonComponentAttr)
  }
})
// 自定义组件
const customComponents = []

export {
  antvComponents,
  customComponents
}
