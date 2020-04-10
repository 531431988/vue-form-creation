
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
}, {
  name: '密码框',
  type: 'password',
  icon: 'lock',
  options: null
}, {
  name: '数字输入框',
  type: 'inputNumber',
  icon: 'calculator',
  options: null
}, {
  name: '单选框',
  type: 'radio',
  icon: 'radio',
  options: null
}, {
  name: '多选框',
  type: 'checkbox',
  icon: 'check-square',
  options: null
}, {
  name: '开关',
  type: 'switch',
  icon: 'switch',
  options: null
}, {
  name: '下拉选择器',
  type: 'select',
  icon: 'down-square',
  options: null
}, {
  name: '级联选择',
  type: 'cascader',
  icon: 'build',
  options: null
}, {
  name: '滑动输入条',
  type: 'slider',
  icon: 'sliders',
  options: null
}, {
  name: '评分',
  type: 'rate',
  icon: 'star',
  options: null
}, {
  name: '日期选择框',
  type: 'datePicker',
  icon: 'calendar',
  options: null
}, {
  name: '时间选择框',
  type: 'timePicker',
  icon: 'clock-circle',
  options: null
}, {
  name: '上传文件',
  type: 'upload',
  icon: 'upload',
  options: null
}]

antvComponents.map(item => {
  if (item.options) {
    item.options = Object.assign(item.options, commonComponentAttr)
  }
})
// 自定义组件
const customComponents = [{
  name: '富文本',
  type: 'quill',
  icon: 'font-colors',
  options: null
}]

export {
  antvComponents,
  customComponents
}
