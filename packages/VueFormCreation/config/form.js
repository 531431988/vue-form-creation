import { createUID, addCollapseFormChild } from '../libs/utils'
import iconConfig from './icon'
import btnTheme from './btnTheme'
import { antvComponents, customComponents } from './component'

// 通用表单属性
const commonFormConfig = {
  size: 'default',
  formLayout: 'horizontal',
  width: 100,
  align: 'right',
  labelCol: 3,
  wrapperCol: 21,
  btns: [{
    icon: '',
    text: '提交',
    type: 'primary',
    htmlType: 'submit'
  }, {
    icon: '',
    text: '取消'
  }]
}
// 基础表单配置
const baseFormConfig = JSON.parse(JSON.stringify(commonFormConfig))
// 嵌套表单配置
const collapseFormConfig = Object.assign(JSON.parse(JSON.stringify(commonFormConfig)), addCollapseFormChild(createUID('collapse')))

export {
  iconConfig,
  btnTheme,
  baseFormConfig,
  collapseFormConfig,
  antvComponents,
  customComponents
}
