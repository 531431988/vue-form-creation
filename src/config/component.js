
import { createUID, hasOne } from '@/libs/utils'
// 组件通用属性
const commonComponentAttr = {
  disabled: false,
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
  attrs: {
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
  attrs: {
    maxLength: null,
    width: {
      label: '100',
      value: '%'
    },
    allowClear: null,
    autoSize: {
      minRows: 2,
      maxRows: 6
    }
  }
}, {
  name: '密码框',
  type: 'password',
  icon: 'lock',
  attrs: {
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
  attrs: {
    placeholder: '只能输入数字',
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
  attrs: {
    value: '',
    options: [{
      label: '选项1',
      value: createUID('radio')
    }],
    validate: {
      type: 'string'
    }
  }
}, {
  name: '多选框',
  type: 'checkbox',
  icon: 'check-square',
  attrs: null
}, {
  name: '开关',
  type: 'switch',
  icon: 'switch',
  attrs: {
    value: '',
    validate: {
      type: 'boolean'
    }
  }
}, {
  name: '下拉选择器',
  type: 'select',
  icon: 'down-square',
  attrs: null
}, {
  name: '级联选择',
  type: 'cascader',
  icon: 'build',
  attrs: null
}, {
  name: '滑动输入条',
  type: 'slider',
  icon: 'sliders',
  attrs: null
}, {
  name: '评分',
  type: 'rate',
  icon: 'star',
  attrs: null
}, {
  name: '日期选择框',
  type: 'datePicker',
  icon: 'calendar',
  attrs: null
}, {
  name: '时间选择框',
  type: 'timePicker',
  icon: 'clock-circle',
  attrs: null
}, {
  name: '上传文件',
  type: 'upload',
  icon: 'upload',
  attrs: null
}]

antvComponents.map(item => {
  // 过滤无placeholder属性的字段
  let obj = {}
  if (item.attrs) {
    obj = hasOne(['radio', 'checkbox'], item.type) === -1 ? {} : {
      placeholder: item.attrs.placeholder || '请输入关键字'
    }
    item.attrs = Object.assign({}, commonComponentAttr, item.attrs, {
      label: item.name,
      name: createUID(item.type)
    }, obj)
  }
})
// 自定义组件
const customComponents = [{
  name: '富文本',
  type: 'quill',
  icon: 'font-colors',
  attrs: null
}]

export {
  antvComponents,
  customComponents
}
