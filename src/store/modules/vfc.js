import { randomName } from '@/libs/utils'
import { antvComponents, customComponents } from '@/config/form'
import { getValidRulesList, addValidRule } from '@/api/vfc'
import message from 'ant-design-vue/es/message'

const vfc = {
  state: {
    // 表单模式（0:基础 1: 高级）
    type: 0,
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
    validRulesList: []
  },
  mutations: {
    // 设置表单模式
    SET_TYPE (state, params) {
      state.type = params
    },
    // 设置校验规则列表数据
    SET_VALID_RULE_LIST (state, params) {
      state.validRulesList = params
    },
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
      // 基础模式
      if (state.type === 0) {
        console.log('添加基础表单组件')
        params = JSON.parse(JSON.stringify(params))
        params.options.name = randomName('input')
        state.formView.push(params)
      } else {
        console.log('添加高级表单组件')
      }
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
    UPDATE_COMPONENT (state, { value, index, item }) {
      item = JSON.parse(JSON.stringify(item))
      item.options.valid = state.validRulesList[value]
      state.formView[index] = item
    }
  },
  actions: {
    // 获取自定义校验规则
    GetvalidRulesList ({ commit }) {
      getValidRulesList().then(res => {
        const { data } = res
        commit('SET_VALID_RULE_LIST', data)
      })
    },
    // 新增自定义校验规则
    AddValidRule ({ commit }, params) {
      addValidRule().then(res => {
        const { data } = res
        if (data) {
          commit('ADD_VALID_RULE', params)
          message.success('添加成功')
        } else {
          message.error('添加失败')
        }
      })
    }
  },
  getters: {

  }

}
export default vfc
