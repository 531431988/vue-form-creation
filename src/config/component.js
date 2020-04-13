
import { createUID } from '@/libs/utils'
// 组件通用属性
const commonComponentAttr = {
  readonly: false,
  disabled: false,
  placeholder: '请输入关键字',
  value: '',
  required: false,
  validate: {
    type: null,
    label: '',
    value: '',
    pattern: '',
    message: ''
  },
  tooltip: null
}
// 基础组件
const antvComponents = [{
  name: '单行文本',
  type: 'input',
  icon: 'edit',
  options: {
    maxLength: null,
    prefix: null,
    suffix: null,
    addonBefore: null,
    addonAfter: null,
    width: {
      label: '300',
      value: 'px'
    },
    allowClear: null
  }
}, {
  name: '多行文本',
  type: 'textarea',
  icon: 'code',
  options: {
    maxLength: null,
    width: {
      label: '100',
      value: '%'
    },
    allowClear: null,
    autoSize: {
      minRows: 2
    }
  }
}, {
  name: '密码框',
  type: 'password',
  icon: 'lock',
  options: {
    maxLength: null,
    width: {
      label: '300',
      value: 'px'
    },
    allowClear: null,
    visibilityToggle: true
  }
}, {
  name: '数字输入框',
  type: 'inputNumber',
  icon: 'calculator',
  options: {
    min: 0,
    max: null,
    width: {
      label: '150',
      value: 'px'
    }
  }
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
    item.options = Object.assign(item.options, commonComponentAttr, {
      label: item.name,
      name: createUID(item.type),
    })
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
