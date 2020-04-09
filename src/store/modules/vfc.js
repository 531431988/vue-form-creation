import { createUID, recursCollapseForm } from '@/libs/utils'
import { antvComponents, baseFormConfig, collapseFormConfig, iconConfig, btnTheme } from '@/config/form'
import { getValidRulesList, addValidRule } from '@/api/vfc'
import message from 'ant-design-vue/es/message'

const vfc = {
  state: {
    iconConfig,
    btnTheme,
    // 表单模式（0:基础 1: 高级）
    type: null,
    antvComponents,
    // 基础表单
    baseForm: [],
    baseFormConfig,
    // 高级表单
    collapseFormConfig,
    collapseForm: collapseFormConfig.collapse,
    // 当前选择的折叠面板
    activeCollapse: null,
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
    INIT_FORM_VIEW (state, { component = [], type = '' }) {
      // 切换表单模式
      if (type === 'change') {
        state.baseForm = []
        state.collapseForm = component.length ? component : collapseFormConfig.collapse
      } else {
        // 初始化
        state.baseForm = component
      }
      state.activeCollapse = null
      state.activeComponent = {
        index: 0,
        name: '',
        item: null
      }
    },
    // 添加组件
    ADD_COMPONENT (state, params) {
      params = JSON.parse(JSON.stringify(params))
      params.options.name = createUID('form')
      state.baseForm.push(params)
      // 基础表单
      if (state.type === 0) {
        state.activeCollapse = null
      } else {
        // 嵌套表单
        if (state.activeCollapse) {
          recursCollapseForm(state.collapseForm, state.activeCollapse, item => {
            item.view.push(params)
          })
        } else {
          message.error('请选择要添加的位置')
        }
      }
    },
    // 删除组件
    DEL_COMPONENT (state, index) {
      if (state.type === 0) {
        state.baseForm.splice(index, 1)
      } else {
        recursCollapseForm(state.collapseForm, state.activeCollapse, item => {
          item.view.splice(index, 1)
        })
      }
    },
    // 设置编辑的折叠面板
    SET_ACTIVE_COLLAPSE (state, key) {
      state.activeCollapse = key
    },
    // 设置编辑的组件
    SET_ACTIVE_COMPONENT (state, index) {
      let view = null
      // 基础表单
      if (state.type === 0) {
        // 嵌套表单
        view = state.baseForm[index]
      } else {
        recursCollapseForm(state.collapseForm, state.activeCollapse, item => {
          view = item.view[index]
        })
      }
      const name = `${view.type.substr(0, 1).toUpperCase()}${view.type.substr(1)}Panel`
      state.activeComponent = {
        index,
        name,
        item: view
      }
    },
    // 修改嵌套表单名称
    EDIT_COLLAPSE_FORM_NAME (state, { key, name }) {
      recursCollapseForm(state.collapseForm, key, item => {
        item.title = name
      })
    },
    // 删除嵌套表单
    DEL_COLLAPSE_FORM (state, key) {
      const searchOption = (arr, key) => {
        arr.forEach((item, index) => {
          if (item.key === key) {
            arr.splice(index, 1)
          }
          if (item.children && item.children.length > 0) {
            searchOption(item.children, key)
          }
        })
      }
      searchOption(state.collapseForm, key)
    },
    // 新增嵌套表单层级
    ADD_COLLAPSE_FORM (state, key) {
      const searchOption = (arr, key) => {
        arr.forEach(item => {
          if (!item.children) item.children = []
          if (item.key === key) {
            item.children.push(...collapseFormConfig.collapse)
          }
          if (item.children && item.children.length > 0) {
            searchOption(item.children, key)
          }
        })
      }
      searchOption(state.collapseForm, key)
    },
    // 更新组件
    UPDATE_COMPONENT (state, { value, index, item }) {
      item = JSON.parse(JSON.stringify(item))
      item.options.valid = state.validRulesList[value]
      state.baseForm[index] = item
    },
    // 更新基础表单属性面板
    UPDATE_BASE_FORM_CONFIG (state, { key, val }) {
      state[state.type === 0 ? 'baseFormConfig' : 'collapseFormConfig'][key] = val
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
