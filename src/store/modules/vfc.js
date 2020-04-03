import { antvComponents, customComponents } from '@/config/form'
import validRulesList from '@/config/validator'

const vfc = {
  state: {
    antvComponents,
    customComponents,
    // 表单视图
    formView: [],
    // 属性面板
    attrPanelShow: false,
    // 当前编辑组件
    activeComponent: {
      index: 0,
      name: '',
      item: null
    },
    // 内置的验证规则列表
    validRulesList
  },
  mutations: {
    // 添加校验规则
    ADD_VALID_RULE (state, params) {
      state.validRulesList[params.value] = params
    },
    // 初始化表单数据
    INIT_FORM_VIEW (state, params = []) {
      state.formView = params
    },
    // 添加组件
    ADD_COMPONENT (state, params) {
      params = JSON.parse(JSON.stringify(params))
      params.options.name = `input_${new Date().valueOf()}`
      state.formView.push(params)
    },
    // 设置编辑的组件
    SET_ACTIVE (state, index) {
      const item = state.formView[index]
      const name = `${item.type.substr(0, 1).toUpperCase()}${item.type.substr(1)}Panel`
      state.activeComponent = {
        index,
        name,
        item
      }
    },
    // 设置组件面板状态
    SET_ATTR_PANEL_STATE (state, params) {
      state.attrPanelShow = params
    },
    // 更新组件
    UPDATE_COMPONENT (state, { index, item }) {
      console.log(index, item)
      state.formView[index] = Object.assign(item)
    }
  },
  actions: {},
  getters: {

  }

}
export default vfc
