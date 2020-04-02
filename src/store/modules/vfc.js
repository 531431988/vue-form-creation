import { antvComponents, customComponents } from '@/config'

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
    }
  },
  mutations: {
    // 初始化表单数据
    INIT_VFC (state, params) {
      state.formView = params
    },
    // 添加组件
    ADD_COMPONENT (state, params) {
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
      state.formView[index] = item
    }
  },
  actions: {},
  getters: {

  }

}
export default vfc
