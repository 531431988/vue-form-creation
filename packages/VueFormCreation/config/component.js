
import { createUID, hasOne } from '../libs/utils'
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
    allowClear: null
  }
}, {
  name: '多行文本',
  type: 'textarea',
  icon: 'code',
  attrs: {
    maxLength: null,
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
    allowClear: null,
    visibilityToggle: true
  }
}, {
  name: '数字框',
  type: 'inputNumber',
  icon: 'calculator',
  attrs: {
    placeholder: '只能输入数字',
    min: -Infinity,
    max: Infinity
  }
}, {
  name: '单选框',
  type: 'radio',
  icon: 'radio',
  attrs: {
    value: null,
    options: [{
      label: '选项1',
      value: createUID('radio')
    }],
    validate: {
      type: 'string'
    }
  }
}, {
  name: '复选框',
  type: 'checkbox',
  icon: 'check-square',
  attrs: {
    value: null,
    options: [{
      label: '选项1',
      value: createUID('checkbox')
    }],
    validate: {
      type: 'array'
    }
  }
}, {
  name: '开关',
  type: 'switch',
  icon: 'switch',
  attrs: {
    value: undefined,
    checkedChildren: '开启',
    unCheckedChildren: '关闭',
    validate: {
      type: 'boolean'
    }
  }
}, {
  name: '下拉选择器',
  type: 'select',
  icon: 'down-square',
  attrs: {
    value: undefined,
    allowClear: false,
    mode: 'default',
    options: [{
      label: '选项1',
      value: createUID('select')
    }],
    validate: {
      type: 'string'
    }
  }
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
  if (item.attrs) {
    item.attrs = Object.assign({}, commonComponentAttr, item.attrs, {
      label: item.name,
      name: createUID(item.type)
    },
      // 过滤无placeholder属性的字段
      hasOne(['radio', 'checkbox', 'switch'], item.type) ? {} : {
        placeholder: item.attrs.placeholder || '请输入关键字'
      },
      // 过滤设置宽度
      hasOne(['input', 'password', 'inputNumber', 'select'], item.type) ?
        {
          width: {
            label: '300',
            value: 'px'
          }
        } : hasOne(['radio', 'checkbox', 'switch'], item.type) ? {} : {
          width: {
            label: '100',
            value: '%'
          }
        }
    )
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
